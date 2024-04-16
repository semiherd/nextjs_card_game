import React, { useEffect, useState } from "react";
import { CardsInEachRow } from "src/asset/constant";
import { Card, Layout } from "src/app/component/index";
import { ContainerProps } from "./type";
import CardList from "./CardList";

const CardsContainer = (props:ContainerProps) => {
	const [shouldRender,setShouldRender]= useState<boolean>(false)

	useEffect(() => {
		setShouldRender(true);
	}, []);

	if(!shouldRender){
		[...Array(3)].map((e, i) => {
			return <Card  
				key={i.toString()}
				playerName=""
				realName=""
				asset=""
				_typeid= 'player-card'
				state= {false}
				border= {false}
				showAllText= {false}
				uppercase= {false}
			/>
		})
	}
	return (
		<Layout.Grid repeat={CardsInEachRow}>
			<CardList {...props} />	
		</Layout.Grid>
	)
}
export default CardsContainer
