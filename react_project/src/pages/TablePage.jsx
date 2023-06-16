import UserTable from "../components/UserTable";
import tableData from "../constants/table_data.json";
import { userTableHeaders } from "../constants/userTable";

function TablePage() {
	return (
		<>
			<h1>Table Page</h1>

			<UserTable tableHeaders={userTableHeaders} tableData={tableData} />
		</>
	);
}

export default TablePage;
