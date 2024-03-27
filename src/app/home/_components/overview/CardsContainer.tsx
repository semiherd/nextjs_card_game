'use client'
import React,{useState,useEffect} from "react";
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

const Item= (props:{item:Player}&Props) => {	
	return (
		<CardComponent 
			view={props.screen}
			key={props.item.playerName}
			type={`player-card`}
			params= {{sort: 'sort=ascending'}} // assigned as default sort-direction
			state={props.selected===props.item.playerName ?true:false} 
			player={props.item} 
			width={(props.width/CardsInEachRow)*(1- (CardsInEachRow*0.05))} 
			border 
			showAllText={false} />
	)
}

const CardsContainer = (props:Props) => {
	const { list } = useCardState()
	const [data,setData]= useState<Player[]>([])
	
	useEffect(() => {
		handleList()
	},[list])

	async function handleList(){
		try{
			setData(list)
		}catch(e){
			console.log(e)
		}
	}

	return (
		<Layout.Grid repeat={CardsInEachRow}>
			<>
				{data?.map((item:Player)  => 
					<Item key={item.realName} item={item} {...props} />
				)}
			</>							
		</Layout.Grid>
	)
}
export default CardsContainer
