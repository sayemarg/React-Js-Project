import CountriesList from "../components/CountriesList";
import CountryPriceChart from "../components/CountryPriceChart";
import useCountrySearch from "../hooks/useCountrySearch";
import { useState } from "react";

function SearchBarPage() {
	const [userInput, setUserInput] = useState("");

	const handleUserInputChange = (e) => {
		setUserInput(e.target.value);
	};

	const [selectedCountryCode, setSelectedCountryCode] = useState(null);

	const changeSelectedCountry = (countryCode) => {
		if (selectedCountryCode === countryCode) {
			setSelectedCountryCode(null);
			return;
		}

		setSelectedCountryCode(countryCode);
	};

	const countriesList = useCountrySearch(userInput);

	return (
		<>
			<h1>SearchBar Page</h1>

			<form onSubmit={(e) => e.preventDefault()}>
				<input value={userInput} onChange={handleUserInputChange} />
			</form>

			<div>
				{countriesList.isFetching ? (
					"Loading data..."
				) : (
					<CountriesList
						countriesList={countriesList.data}
						selectedCountryCode={selectedCountryCode}
						onItemClick={changeSelectedCountry}
					/>
				)}

				<div>
					<CountryPriceChart countryCode={selectedCountryCode} />
				</div>
			</div>
		</>
	);
}

export default SearchBarPage;
