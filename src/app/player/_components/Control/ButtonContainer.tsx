'use client'
import React from "react"
import { ControlButton } from './type'
import { controlbuttons } from './Buttons'
import { useCardDispatch, useCardState } from "src/app/context/CardContext"
import { Button, Layout, withNavigation } from "src/app/component/index";
import { Sorting, View } from "src/app/context/type"
import { BaseProp } from "src/app/component/button/type"
import { QueryParamType } from "src/app/api/type"

interface ButtonProp extends BaseProp{
	dir:Sorting
}
const SortButtonWNav= withNavigation(Button)

const ButtonContainer = ({view}:{view:View}) => {
	const { sorting } = useCardState()
	const { updateSorting } = useCardDispatch()
	
	async function handleClick(props:ControlButton):Promise<void>{
		try{	
			updateSorting(props.dir)
		}catch(e){
			console.log(e)
		}
	}

	return (
		<Layout.Grid repeat={controlbuttons.length}>
			<>
				{controlbuttons.map((item:ControlButton) => {
					
					const querySort:QueryParamType['sort']= {
							query:`sort=${item.dir}`,
						 	value: item.dir
					}

					return (
						<SortButtonWNav
							key={item.label}
							type={`sort-button`}
							params= {{sort: querySort }}
							view={`${view}`}
							item={{
								_typeid: "sort-button",
								item: {
									label: item.label
								},
								onClick: () => handleClick(item),
								state: sorting=== item.dir ?true:false,
								uppercase: true,
								border: true,
								showAllText: false,
							}}  
						/>
					)	
				})}
			</>
		</Layout.Grid>	
	)
}
export default ButtonContainer
							
		