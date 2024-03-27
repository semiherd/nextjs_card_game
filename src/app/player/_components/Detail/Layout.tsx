import React from "react"
import { Col } from 'src/app/component/layout/index'

const Layout = ({playerContainer}:{
	playerContainer: React.ReactNode,
}) => {
	return (
			<Col>
				<>
					{playerContainer}
				</>
			</Col>
	)
};

export default Layout;
