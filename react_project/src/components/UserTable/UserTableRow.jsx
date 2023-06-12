import PropTypes from "prop-types";

function UserTableRow({ rowNumer, user }) {
	return (
		<tr key={user.id}>
			<td>{rowNumer}</td>
			<td>{user.full_name}</td>
			<td>{user.personnel_id}</td>
			<td>{user.employment_date}</td>
			<td>{user.work_experience}</td>
		</tr>
	);
}

UserTableRow.propTypes = {
	rowNumer: PropTypes.number,
	user: PropTypes.object,
};

export default UserTableRow;
