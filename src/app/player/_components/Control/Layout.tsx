import { Col } from 'src/app/component/layout/index'

const ControlLayout = ({actionContainer,submitContainer}:{
	actionContainer: React.ReactNode,
	submitContainer: React.ReactNode
}) => {
	const translate = { 
		transform: `translate(0, 3vh)` 
	};

	return (
			<Col alignSelfOption="center">
				<div style={translate}>
					{actionContainer}
					{submitContainer}
				</div>
			</Col>
	)
};

export default ControlLayout;
