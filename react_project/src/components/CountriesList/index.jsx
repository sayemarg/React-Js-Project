import CountryListItem from "./CountryListItem";
import PropTypes from "prop-types";

function CountriesList({ countriesList, selectedCountryCode, onItemClick }) {
	return (
		<ul>
			{countriesList &&
				countriesList.map((data) => {
					const country = data.item;

					return (
						<CountryListItem
							key={country.code}
							country={country}
							selectedCountryCode={selectedCountryCode}
							onClick={onItemClick}
						/>
					);
				})}
		</ul>
	);
}

CountriesList.propTypes = {
	countriesList: PropTypes.arrayOf(PropTypes.object),
	selectedCountryCode: PropTypes.string,
	onItemClick: PropTypes.func,
};

export default CountriesList;
