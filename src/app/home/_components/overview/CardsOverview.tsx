import Overview from "./index";
import { CardsContainerPropsType } from "./type";

function CardsOverview (props:CardsContainerPropsType)  {
	
	const styling= props?.screen==='home' && props.data.length 
			? 'move-left'	
			: ''

	return (
		<div className={`${styling}`}>
				<Overview {...props} />
		</div>
	) 
}
export default CardsOverview