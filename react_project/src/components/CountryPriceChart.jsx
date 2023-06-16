import "chart.js/auto";
import PropTypes from "prop-types";
import { Line as LineChart } from "react-chartjs-2";
import { getCountryChartData } from "../utils/network";
import { getRandomRGBColor } from "../utils/random";
import { useEffect, useRef, memo, useMemo, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";

const CountryPriceChart = memo(function CountryPriceChart({ countryCode }) {
	const chartRef = useRef();

	let updateChartInterval = useRef();

	const initialChartData = useMemo(
		() => ({
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
		}),
		[countryCode]
	);

	const chartDataQuery = useQuery({
		queryKey: ["CountryChart", countryCode],
		queryFn: () => getCountryChartData(countryCode),
		enabled: Boolean(countryCode),
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		initialData: null,
		staleTime: 1000,
	});

	const addDataToChart = useCallback((label, data) => {
		const chart = chartRef.current;

		chart.data.labels.push(`${label.substr(0, 2)}:${label.substr(2)}`);
		chart.data.datasets[0].data.push(data);

		chart.update();
	}, []);

	useEffect(() => {
		if (!countryCode) return;

		if (updateChartInterval.current) {
			clearInterval(updateChartInterval.current);
		}

		updateChartInterval.current = setInterval(async () => {
			const { data } = await chartDataQuery.refetch();

			addDataToChart(data.x, data.y);
		}, 1000);

		return () => clearInterval(updateChartInterval.current);
	}, [countryCode, chartDataQuery, addDataToChart]);

	return (
		<>
			{countryCode && (
				<LineChart ref={chartRef} data={initialChartData} />
			)}
		</>
	);
});

CountryPriceChart.propTypes = {
	countryCode: PropTypes.string,
};

export default CountryPriceChart;
