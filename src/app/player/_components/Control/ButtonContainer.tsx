'use client'
import React from "react"
import { ControlButton } from './type'
import { controlbuttons } from './Buttons'
import { useCardDispatch, useCardState } from "src/app/context/CardContext"
import { Button, Layout, withNavigation } from "src/app/component/index";
import { View } from "src/app/context/type"

const NavigationButton= withNavigation(Button)

const ButtonContainer = ({view}:{view:View}) => {
	const { sorting } = useCardState()
	
	async function handleClick(item:ControlButton):Promise<void>{
		try{	
			//updateSorting(item.dir)
		}catch(e){
			console.log(e)
		}
	}

	return (
		<Layout.Grid repeat={controlbuttons.length}>
			<>
				{controlbuttons.map((item:ControlButton) => <NavigationButton params={{sort: `sort=${item.dir}`}} type={`control-button`} view={`${view}`} state={sorting===item.dir ?true:false} uppercase key={item.label} onClick={() => handleClick(item)} text={item.label}/>)}
			</>
		</Layout.Grid>		
	)
};

export default ButtonContainer;
