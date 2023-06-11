import UserTable from "../components/UserTable";
import tableData from "../constants/table_data.json";

function TablePage() {
	const tableHeaders = [
		{
			title: "Full Name",
			key: "full_name",
		},
		{
			title: "Personnel ID",
			key: "personnel_id",
		},
		{
			title: "Employeement Date",
			key: "employment_date",
		},
		{
			title: "Work Experience",
			key: "work_experience",
		},
	];

	return (
		<>
			<h1>Table Page</h1>

			<UserTable tableHeaders={tableHeaders} tableData={tableData} />
		</>
	);
}

export default TablePage;
