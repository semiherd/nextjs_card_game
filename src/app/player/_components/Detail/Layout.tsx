import React from "react"
import { Col } from 'src/app/component/layout/index'
import { CardProvider } from "src/app/context/CardProvider"

const Layout = ({playerContainer}:{
	playerContainer: React.ReactNode,
}) => {
	return (
			<CardProvider>
				<Col>
					<>
						{playerContainer}
					</>
				</Col>
			</CardProvider>
	)
};

export default Layout;
