import tableData from "../constants/table_data.json";
import { useState } from "react";

function TablePage() {
	const table_header = [
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

	const [sortKey, setSortedBy] = useState(null);
	const [order, setOrder] = useState(null);

	const changeSortedBy = (key) => {
		if (sortKey !== key) {
			setSortedBy(key);
			setOrder("asc");
			return;
		}

		if (order === "asc") {
			setOrder("desc");
		} else {
			setSortedBy(null);
			setOrder(null);
		}
	};

	const sortedTableData =
		sortKey === null
			? tableData
			: [...tableData].sort(
					(data_1, data_2) =>
						(data_1[sortKey] < data_2[sortKey] ? -1 : 1) *
						(order === "asc" ? 1 : -1)
			  );

	return (
		<>
			<h1>Table Page</h1>

			<table>
				<thead>
					<tr>
						<th>Row</th>

						{table_header.map((header) => (
							<th
								key={header.key}
								onClick={() => changeSortedBy(header.key)}
							>
								{header.title}
							</th>
						))}
					</tr>
				</thead>

				<tbody>
					{sortedTableData.map((data, index) => (
						<tr key={data.id}>
							<td>{index + 1}</td>
							<td>{data.full_name}</td>
							<td>{data.personnel_id}</td>
							<td>{data.employment_date}</td>
							<td>{data.work_experience}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}

export default TablePage;
