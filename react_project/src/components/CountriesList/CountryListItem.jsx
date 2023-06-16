import PropTypes from "prop-types";
import Styles from "./CountryListItem.module.css";

function CountryListItem({ country, selectedCountryCode, onClick }) {
	const isSelected = selectedCountryCode === country.code;

	return (
		<li
			className={`${Styles.countryListItem} ${
				isSelected ? Styles.selected : ""
			}`}
			onClick={() => onClick(country.code)}
		>{`${country.name} (${country.code})`}</li>
	);
}

CountryListItem.propTypes = {
	country: PropTypes.object,
	selectedCountryCode: PropTypes.string,
	onClick: PropTypes.func,
};

export default CountryListItem;
