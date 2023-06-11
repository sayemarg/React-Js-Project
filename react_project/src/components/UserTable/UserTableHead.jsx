import PropTypes from "prop-types";

function UserTableHead({ header, changeSortKey, sortKey, order }) {
	return (
		<th
			onClick={() => changeSortKey(header.key)}
			data-order={header.key === sortKey ? order : null}
		>
			{header.title}
		</th>
	);
}

UserTableHead.propTypes = {
	header: PropTypes.object,
	changeSortKey: PropTypes.func,
	sortKey: PropTypes.string,
	order: PropTypes.string,
};

export default UserTableHead;
