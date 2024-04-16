import React,{useEffect, useState} from "react";
import { Player } from 'src/app/context/type';
import { CardsInEachRow } from "src/asset/constant";
import { useCardDispatch, useCardState } from "src/app/context/CardContext";
import { Card, withNavigation } from "src/app/component/index";
import { ContainerProps } from "./type";

const CardComponent= withNavigation(Card)

const CardList = (props:ContainerProps) => {
	const { list } = useCardState()
	const [activeCard,setActiveCard]= useState<Player['playerName']>()
	
	useEffect(() => {
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
						key={`${item.playerName}`}
						type={`player-card`}
						params= {{sort: 'ascending' }}
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
