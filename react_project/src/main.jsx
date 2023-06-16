import "./main.css";
import React from "react";
import ReactDOM from "react-dom/client";
import browserRouter from "./pages/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={browserRouter} />
		</QueryClientProvider>
	</React.StrictMode>
);
