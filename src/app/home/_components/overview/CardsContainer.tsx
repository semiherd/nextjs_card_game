'use client'
import React,{useLayoutEffect, useState} from "react";
import { Player } from 'src/app/context/type';
import { View } from 'src/app/api/type';
import { CardsInEachRow } from "src/asset/constant";
import { useCardState } from "src/app/context/CardContext";
import { Layout, Card, withNavigation } from "src/app/component/index";

const CardComponent= withNavigation(Card)

type Props={
	screen:View,
	selected: Player['playerName']|null ,
	width:number
}

const CardsContainer = (props:Props) => {
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
		<Layout.Grid repeat={CardsInEachRow}>
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
		</Layout.Grid>
	)
}
export default CardsContainer
