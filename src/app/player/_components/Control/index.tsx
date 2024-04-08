import ControlLayout from './Layout'
import ButtonContainer from './ButtonContainer'
import SubmitContainer from './SubmitContainer'
import { Title } from "src/app/component/index";
import { View } from "src/app/context/type"
import '../Content/style/Content.css'
import './style/Control.css'

const Control = ({view,width,height}:{view:View,height:number,width:number}) => {
	
	const styling= {
		width: `${width}vw`,
		height: `${height}vh`,
	}

	return (
		<div 
			className={`control-container radius-5 border ${view==='home' ? 'control-anim' :'' }`}
			style={styling}
		>
			<Title size={`1rem`} color={`#F5F5F5`} text={`Controls`}/>
			<ControlLayout 
				actionContainer={<ButtonContainer view={view} />} 
				submitContainer={<SubmitContainer  />} 
			/>
		</div>
	)
};

export default Control
