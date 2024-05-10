import { Col } from 'src/app/component/layout/index'
import { CardProvider } from 'src/app/context/CardProvider';

const ControlLayout = ({actionContainer,submitContainer}:{
	actionContainer: React.ReactNode,
	submitContainer: React.ReactNode
}) => {
	const translate = { 
		transform: `translate(0, 3vh)` 
	};

	return (
			<CardProvider>
				<Col alignSelfOption="center">
					<div style={translate}>
						{actionContainer}
						{submitContainer}
					</div>
				</Col>
			</CardProvider>
	)
};

export default ControlLayout;
