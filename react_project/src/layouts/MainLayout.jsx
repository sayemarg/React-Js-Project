import Navbar from "../components/Navbar";
import Styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";

function MainLayout() {
	return (
		<>
			<Navbar />

			<div className={Styles.container}>
				<aside className={Styles.sidebar}>
					Fugiat ea excepteur amet mollit ea occaecat in cillum
					laboris eiusmod. Aute eiusmod deserunt voluptate quis aliqua
					reprehenderit fugiat non reprehenderit duis. Laboris aute
					labore ex cillum enim et dolore cupidatat eiusmod labore
					excepteur ea laboris. Do laborum quis pariatur sit id
					dolore. Excepteur laborum culpa fugiat officia. Mollit do
					nostrud proident anim esse adipisicing ex ipsum consectetur
					ex mollit deserunt consequat. Officia incididunt sit duis do
					laborum sit culpa mollit labore fugiat quis deserunt est.
					Nulla sit cillum ullamco eu Lorem sit adipisicing non ea
					Lorem consectetur officia commodo nulla. Laborum ex aliquip
					dolore non nostrud culpa eiusmod excepteur sint irure nisi
					cillum esse. Velit ad in pariatur ad duis anim aliqua nulla
					minim occaecat consectetur mollit excepteur amet. Laboris
					pariatur excepteur eiusmod nulla exercitation dolor tempor
					cillum adipisicing magna pariatur. Ad sunt esse ullamco sunt
					voluptate exercitation ullamco nisi nostrud duis esse
					occaecat irure. Cupidatat velit labore ex cupidatat enim
					adipisicing. Commodo fugiat quis id nisi labore excepteur
					tempor magna commodo. Fugiat minim excepteur elit sunt
					labore dolor excepteur ex. Ad et sint magna ullamco
					reprehenderit id voluptate dolor in sint. Cupidatat aliquip
					consequat veniam in irure et esse voluptate veniam dolor
					consequat dolore. Ullamco do mollit cupidatat ad adipisicing
					sunt officia consectetur sit dolor labore consectetur culpa
					ad. Cupidatat sint esse laborum aliqua irure proident fugiat
					laboris. Anim dolore labore laboris labore. Tempor veniam
					ipsum pariatur eu est nulla magna fugiat eu velit duis.
					Lorem id mollit tempor nostrud nostrud duis eiusmod.
				</aside>

				<main className={Styles.content}>
					<Outlet />
				</main>
			</div>
		</>
	);
}

export default MainLayout;
