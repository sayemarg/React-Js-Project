import HomePage from "./HomePage";
import LayoutPage from "./LayoutPage";
import MainLayout from "../layouts/MainLayout";
import SearchBarPage from "./SearchBarPage";
import TablePage from "./TablePage";
import { createBrowserRouter } from "react-router-dom";

const browserRouter = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "layout",
				element: <LayoutPage />,
			},
			{
				path: "table",
				element: <TablePage />,
			},
			{
				path: "searchbar",
				element: <SearchBarPage />,
			},
		],
	},
]);

export default browserRouter;
