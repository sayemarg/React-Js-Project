import { Line as LineChart } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import "chart.js/auto";

function createRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
	const red = createRandomNumber(0, 255);
	const green = createRandomNumber(0, 255);
	const blue = createRandomNumber(0, 255);

	return `rgb(${red}, ${green}, ${blue})`;
}

async function getCountriesList(countryName) {
	return await fetch(`http://localhost:3000/?q=${countryName}`)
		.then((response) => response.json())
		.then((json_data) => {
			if (json_data.status === "success") {
				return json_data.data.results;
			}

			throw Error(json_data.message);
		});
}

async function getCountryChartData(countryName) {
	return await fetch(`http://localhost:3000/chart/${countryName}`)
		.then((response) => response.json())
		.then((json_data) => {
			if (json_data.status === "success") {
				return json_data.data;
			}

			throw Error(json_data.message);
		});
}

function SearchBarPage() {
	const [userInput, setUserInput] = useState("");

	const [selectedCountryCode, setSelectedCountryCode] = useState(null);

	const handleUserInputChange = (e) => {
		setUserInput(e.target.value);
	};

	const [labels, setLables] = useState([]);
	const [datas, setDatas] = useState([]);

	const changeSelectedCountry = (countryCode) => {
		setLables([]);
		setDatas([]);

		if (selectedCountryCode === countryCode) {
			setSelectedCountryCode(null);
			return;
		}

		setSelectedCountryCode(countryCode);
	};

	const countriesList = useQuery({
		queryKey: ["Countries", userInput],
		queryFn: () => getCountriesList(userInput),
		enabled: Boolean(userInput),
	});

	const chartData = {
		labels: labels,
		datasets: [
			{
				label: `${selectedCountryCode} currency chart`,
				data: datas,
				backgroundColor: getRandomColor(),
				lineTension: 0.5,
				borderColor: "rgb(0, 0, 0)",
				borderWidth: 2,
			},
		],
	};

	useEffect(() => {
		setTimeout(async () => {
			if (!selectedCountryCode) return;

			const { x: label, y: data } = await getCountryChartData(
				selectedCountryCode
			);

			setLables((oldLabels) => [
				...oldLabels,
				label.substr(0, 2) + ":" + label.substr(2),
			]);
			setDatas((oldDatas) => [...oldDatas, data]);
		}, 1000);
	});

	return (
		<>
			<h1>SearchBar Page</h1>

			<form onSubmit={(e) => e.preventDefault()}>
				<input value={userInput} onChange={handleUserInputChange} />
			</form>

			<div>
				<ul>
					{countriesList.data &&
						countriesList.data.map((data) => {
							const country = data.item;

							return (
								<li
									onClick={() =>
										changeSelectedCountry(country.code)
									}
									style={{
										color:
											selectedCountryCode == country.code
												? "blue"
												: null,
									}}
									key={country.code}
								>{`${country.name} (${country.code})`}</li>
							);
						})}
				</ul>

				<div>
					{Boolean(selectedCountryCode) && Boolean(datas.length) && (
						<LineChart
							data={chartData}
							options={{
								title: {
									display: true,
									text: "Country currency",
									fontSize: 20,
								},
								legend: {
									display: true,
									position: "right",
								},
							}}
						/>
					)}
				</div>
			</div>
		</>
	);
}

export default SearchBarPage;
