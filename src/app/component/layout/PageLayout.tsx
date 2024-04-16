import React from "react"
import { Col } from "src/app/component/layout/index";
import { CardProvider } from "src/app/context/CardContext";

const PageLayout = ({content,overview}:{content: React.ReactNode,overview: React.ReactNode}) => {

	return (
		<CardProvider>
			<Col>
				<>
					{content}
					{overview}
				</>
			</Col>
		</CardProvider>
		
	)
};

export default PageLayout;
