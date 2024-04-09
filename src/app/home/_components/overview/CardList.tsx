'use client'
import React,{useEffect, useLayoutEffect, useState} from "react";
import { Player } from 'src/app/context/type';
import { CardsInEachRow } from "src/asset/constant";
import { useCardState } from "src/app/context/CardContext";
import { Card, withNavigation } from "src/app/component/index";
import { ContainerProps } from "./type";

const CardComponent= withNavigation(Card)
const CardDefComponent= withNavigation(Card)

const CardList = (props:ContainerProps) => {
	const { list } = useCardState()
	const [activeCard,setActiveCard]= useState<Player['playerName']>()
	

	useLayoutEffect(() => {
		const player:Player['playerName']= window.location.pathname
		if(props.screen==='player'){
			const playerName:Player['playerName']=player.split('/player/')[1]
			setActiveCard(playerName)
		} 
	},[window.location])

	return (
		<>
			{list?.map(( item: Player,index:number)  => {
				return(
					<CardComponent
						key={index.toString()}
						type={`player-card`}
						params= {{sort: { query: 'sort=ascending', value: 'ascending' }}}
						view={`${props.screen}`}
						item={{
							...item,
							_typeid: "player-card",
							state: activeCard===item.playerName.split(' ').join('-') ? true:false,
							border: true,
							showAllText: false,
							uppercase: true,
							width: (props.width/CardsInEachRow)*(1- (CardsInEachRow*0.05)),
						}}  
					/>
				)
			})}
		</>							
	)
}
export default CardList
