import React from "react"
import { Col } from "src/app/component/layout/index";

const PageLayout = ({content,overview}:{content: React.ReactNode,overview: React.ReactNode}) => {

	return (		
			<Col>
				<>
					{content}
					{overview}
				</>
			</Col>
	)
};

export default PageLayout;
