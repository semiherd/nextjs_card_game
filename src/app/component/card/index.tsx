import React from "react"
import { ItemProps } from 'src/app/component/card/type'
import { formatText } from "./fn/formatText";
import { CardWidth, CardHeight, DetailContainerWidth, VisibleChInCard } from 'src/asset/constant'
import './style/Card.css'

const keys= ['realName','playerName','asset'] as const 

const Card = ( props: ItemProps ) => {

	const borderStyle:string= props.border ?'border' :'no-border'
	const selectedStyle:string= props.state ?'selected' :'not-selected'
	const marginClass:string= props.showAllText ? 'mg-v-0' :'mg-h-1 mg-v-3'
	const w:number= props.width ?props.width :CardWidth

	const styling={
		width:  props.showAllText
			? `${DetailContainerWidth}vw`
			: `${w}vw`,
		height:  props.height ? `${props.height}vh`:`${CardHeight}vh`,
	}
	
	return (
		<div className={`no-flick ${marginClass} ${selectedStyle} ${borderStyle} pd-v-1 pd-h-2 radius-5`} style={styling}>
			{props && keys.map( (i: typeof keys[number]) => {
				if(props._typeid==='player-card'){	
					return <h1 key={i} className={`card-text`}>{formatText(props[i],VisibleChInCard,props.showAllText,props.uppercase)}</h1>
				}
				return null
			})}		
		</div>
	)
};

export default Card;