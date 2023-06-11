import { useState, useMemo } from "react";
import { ASC, DESC } from "../constants/sort";

function useSortableTable(tableData) {
	const [sortKey, setSortKey] = useState(null);
	const [order, setOrder] = useState(null);

	const changeSortKey = (key) => {
		if (sortKey !== key) {
			setSortKey(key);
			setOrder(ASC);
			return;
		}

		if (order === ASC) {
			setOrder(DESC);
		} else {
			setSortKey(null);
			setOrder(null);
		}
	};

	const sortedTableData = useMemo(() => {
		if (sortKey === null) return tableData;

		return [...tableData].sort((first, second) => {
			return (
				(first[sortKey] < second[sortKey] ? -1 : 1) *
				(order === ASC ? 1 : -1)
			);
		});
	}, [tableData, sortKey, order]);

	return [sortedTableData, changeSortKey, sortKey, order];
}

export default useSortableTable;
