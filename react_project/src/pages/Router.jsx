import App from "../App";
import HomePage from "./HomePage";
import LayoutPage from "./LayoutPage";
import SearchBarPage from "./SearchBarPage";
import TablePage from "./TablePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const browserRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
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

function Router() {
	return <RouterProvider router={browserRouter} />;
}

export default Router;
