import { getCountriesList } from "../utils/network";
import { useQuery } from "@tanstack/react-query";

function useCountrySearch(countryName) {
	return useQuery({
		queryKey: ["Countries", countryName],
		queryFn: () => getCountriesList(countryName),
		enabled: Boolean(countryName),
		refetchOnWindowFocus: false,
	});
}

export default useCountrySearch;
