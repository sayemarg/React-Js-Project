import PropTypes from "prop-types";
import UserTableHead from "./UserTableHead";
import UserTableRow from "./UserTableRow";
import useSortableTable from "../../hooks/useSortableTable";
import Styles from "./UserTable.module.css";

function UserTable({ tableHeaders, tableData }) {
	const [sortedUserList, changeSortKey, sortKey, order] =
		useSortableTable(tableData);

	return (
		<table className={Styles.userTable}>
			<thead>
				<tr>
					<th></th>

					{tableHeaders.map((header) => (
						<UserTableHead
							key={header.key}
							header={header}
							changeSortKey={changeSortKey}
							sortKey={sortKey}
							order={order}
						/>
					))}
				</tr>
			</thead>

			<tbody>
				{sortedUserList.map((user, index) => (
					<UserTableRow
						key={user.id}
						rowNumer={index + 1}
						user={user}
					/>
				))}
			</tbody>
		</table>
	);
}

UserTable.propTypes = {
	tableHeaders: PropTypes.arrayOf(PropTypes.object),
	tableData: PropTypes.arrayOf(PropTypes.object),
};

export default UserTable;
