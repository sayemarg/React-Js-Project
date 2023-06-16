import CountriesList from "../components/CountriesList";
import CountryPriceChart from "../components/CountryPriceChart";
import Loader from "../components/Loader";
import Styles from "./SearchBarPage.module.css";
import useCountrySearch from "../hooks/useCountrySearch";
import { useCallback, useState } from "react";

function SearchBarPage() {
	const [userInput, setUserInput] = useState("");

	const handleUserInputChange = useCallback((e) => {
		setUserInput(e.target.value);
	}, []);

	const [selectedCountryCode, setSelectedCountryCode] = useState(null);

	const changeSelectedCountry = useCallback(
		(countryCode) => {
			if (selectedCountryCode === countryCode) {
				setSelectedCountryCode(null);
				return;
			}

			setSelectedCountryCode(countryCode);
		},
		[selectedCountryCode]
	);

	const countriesList = useCountrySearch(userInput.trim());

	return (
		<>
			<h1 className={Styles.title}>SearchBar Page</h1>

			<div>
				<input
					type="search"
					className={Styles.searchInput}
					onChange={handleUserInputChange}
					value={userInput}
					placeholder="Enter Country Name"
				/>
			</div>

			<div>
				{countriesList.isFetching ? (
					<Loader />
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
