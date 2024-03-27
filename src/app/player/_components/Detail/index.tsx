import React from "react"
import Layout from './Layout'
import NoData from './NoData'
import { Button, Title , Card, withNavigation } from "src/app/component/index"
import { Player } from "src/app/context/type"
import '../Content/style/Content.css'
import './style/Detail.css'

//const NavigationButton= withNavigation(Button)

const Detail = ({player,width,height}:{player:Player|null,width:number,height:number}) => {
	
	const styling= {
		width: `${width}vw`,
		height: `${height}vh`,
	}
	const borderStyle:'border'|'no-border'= 'border'

	return (	
			<div 
				className={`detail-container detail-anim ${borderStyle}`}
				style={styling}
			>
			{/*<div>
				<NavigationButton params={{sort:`sort=ascending`}} type={`control-button`} onClick={() => null} state uppercase text={`BACK`}/>
			</div>*/}
			<Title size={`1rem`} color={`#F5F5F5`} text={`Details`}/>
			{player===null
				? <NoData width={width*0.75} height={height} />
				: <Layout playerContainer={<Card state={false} border={false} player={player} width={width} showAllText />} />
			}
		</div>
		
	)
};

export default Detail;
