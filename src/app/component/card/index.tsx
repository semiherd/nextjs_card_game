import React from "react"
import { CardProps } from 'src/app/component/card/type'
import { CardWidth, CardHeight, DetailContainerWidth, VisibleChInCard } from 'src/asset/constant'
import './style/Card.css'

const keys= ['realName','playerName','asset'] as const 

const Card = (props:CardProps) => {
	const {state,player,width,height,showAllText,border}= props;
	const borderStyle:string= border ?'border' :'no-border'
	const selectedStyle:string= state ?'selected' :'not-selected'
			
	const marginClass:string= showAllText ? 'mg-v-0' :'mg-h-1 mg-v-3'
	const w:number= width ?width :CardWidth

	const styling={
		width:  showAllText
			? `${DetailContainerWidth}vw`
			: `${w}vw`,
		height:  height ? `${height}vh`:`${CardHeight}vh`,
	}

	function handleText(str:string,limit:number):string{
		try{
			const response:string= str.length>limit 
				? `${str.slice(0,limit)}...` 
				: str
			return response
		}catch(e){
			console.log(e)
			return ''
		}
	}

	return (
		<div className={`${marginClass} ${selectedStyle} ${borderStyle} pd-v-1 pd-h-2 radius-5`} style={styling}>
			{player && keys.map( item => {
				if(player[item]){
					return <h1 key={item} className={`card-text`}>{showAllText ?player[item] :handleText(player[item],VisibleChInCard)}</h1>
				}
				return null
			})}		
		</div>
	)
};

export default Card;