'use client'
import React,{ useEffect } from "react"
import { Title } from "src/app/component/index"
import { MarginCardsWithTitle, DetailContainerWidth } from 'src/asset/constant'
import { Player } from "src/app/context/type"
import { View } from "src/app/api/type"
import { useCardState,useCardDispatch } from "src/app/context/CardContext";
import CardsContainer from './CardsContainer'
import NoCard from './NoCard'
import './style/Overview.css'

const OverView = (props:{data:Player[],screen:View,selected:Player['playerName']|null }) => {
	const { data }= props
	const { list } = useCardState()
	const { updateList }= useCardDispatch()
	
	useEffect(() => {
		console.log('data',data)
		updateList(data)
	},[data])

	const marginCardsContainer= 1- MarginCardsWithTitle/100
	
	const styling={
		width: `${DetailContainerWidth}vw`
	}
	if(list===null || !list?.length) return <NoCard />

	return (
		<div className={`overview-container`} style={styling}>
			{list?.length ?<Title size={`1rem`} color={`#F5F5F5`} text={`Overview`}/> : null}		
			<div style={{ margin: `2% ${MarginCardsWithTitle}%`}}>
				<CardsContainer {...props} width={DetailContainerWidth*marginCardsContainer} />
			</div>
		</div>
	)
}

export default OverView
