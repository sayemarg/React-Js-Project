import { Line as LineChart } from "react-chartjs-2";
import { getCountryChartData } from "../utils/network";
import { getRandomRGBColor } from "../utils/random";
import { useEffect, useRef, memo } from "react";
import PropTypes from "prop-types";
import "chart.js/auto";

const CountryPriceChart = memo(function CountryPriceChart({ countryCode }) {
	const chartRef = useRef();

	let updateChartInterval = useRef();

	const chartData = {
		labels: [],
		datasets: [
			{
				label: `${countryCode} currency chart`,
				data: [],
				backgroundColor: getRandomRGBColor(),
				lineTension: 0.5,
				borderColor: "rgb(0, 0, 0)",
				borderWidth: 2,
			},
		],
	};

	const addDataToChart = (label, data) => {
		const chart = chartRef.current;

		chart.data.labels.push(`${label.substr(0, 2)}:${label.substr(2)}`);
		chart.data.datasets[0].data.push(data);

		chart.update();
	};

	useEffect(() => {
		if (!countryCode) return;

		if (updateChartInterval.current) {
			clearInterval(updateChartInterval.current);
		}

		updateChartInterval.current = setInterval(async () => {
			const chartData = await getCountryChartData(countryCode);

			addDataToChart(chartData.x, chartData.y);
		}, 1000);

		return () => clearInterval(updateChartInterval.current);
	}, [countryCode]);

	return <>{countryCode && <LineChart ref={chartRef} data={chartData} />}</>;
});

CountryPriceChart.propTypes = {
	countryCode: PropTypes.string,
};

export default CountryPriceChart;
