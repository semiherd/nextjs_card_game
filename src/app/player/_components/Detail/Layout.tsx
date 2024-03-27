import React from "react"
import { Col } from 'src/app/component/layout/index'
import { CardProvider } from "src/app/context/CardContext"

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
