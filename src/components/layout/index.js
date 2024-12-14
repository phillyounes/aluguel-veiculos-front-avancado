import {Header} from "../header";

export const Layout = ({children, breadcrumbs}) => {
	return (
		<>
			<Header breadcrumbs={breadcrumbs}/>
			<main>
				{children}
			</main>
		</>
	)
}