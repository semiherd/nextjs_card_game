import { Player } from "src/app/context/type";
import { ReturnType_Home_BFF, View } from "src/app/api/type";
import OverView from "./Overview";

type PropsType={
	data: ReturnType_Home_BFF['players'],
	selected: Player['playerName']|null,
	screen: View
}
function CardsOverview (props:PropsType)  {
	
	const styling= props?.screen==='home' && !props.data.length 
			? 'anim-opac'
			: 'move-left'	

	return (
		<div className={`${styling}`}>
				<OverView {...props} />
		</div>
	) 
}
export default CardsOverview