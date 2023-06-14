const BASE_URL = "http://localhost:3000";

async function get(path) {
	const response = await fetch(`${BASE_URL}${path}`);

	const json_data = await response.json();

	if (json_data.status === "success") {
		return json_data.data;
	}

	throw new Error(json_data.message);
}

async function getCountriesList(countryName) {
	const apiResponse = await get(`/?q=${countryName}`);

	return apiResponse.results;
}

async function getCountryChartData(countryName) {
	return await get(`/chart/${countryName}`);
}

export { getCountriesList, getCountryChartData };
