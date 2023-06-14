import PropTypes from "prop-types";

function CountryListItem({ country, selectedCountryCode, onClick }) {
	return (
		<li
			onClick={() => onClick(country.code)}
			style={{
				color: selectedCountryCode == country.code ? "blue" : null,
			}}
		>{`${country.name} (${country.code})`}</li>
	);
}

CountryListItem.propTypes = {
	country: PropTypes.object,
	selectedCountryCode: PropTypes.string,
	onClick: PropTypes.func,
};

export default CountryListItem;
