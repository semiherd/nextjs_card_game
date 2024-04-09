'use client'
import React from "react"
import Layout from './Layout'
import NoData from './NoData'
import { Title , Card } from "src/app/component/index"
import { Player } from "src/app/context/type"
import '../Content/style/Content.css'
import './style/Detail.css'

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
			<Title size={`1rem`} color={`#F5F5F5`} text={`Details`}/>
			{player===null
				? <NoData width={width*0.75} height={height} />
				: <Layout 
						playerContainer={
							<Card 
								_typeid= {`player-card`}
								state={false} 
								border={false} 
								asset={player.asset}
								playerName={player.playerName}
								realName={player.realName}
								width={width} 
								uppercase={false}
								showAllText />
						} 
					/>
			}
		</div>
		
	)
};

export default Detail;
