'use client'
import React from "react"
import { ControlButton } from './type'
import { controlbuttons } from './Buttons'
import { Layout } from "src/app/component/index";
import { View } from "src/app/context/type"
import { SortButtonWNav } from './SortButton'

const ButtonContainer = ({view}:{view:View}) => {

	return (
		<Layout.Grid repeat={controlbuttons.length}>
			<>
				{controlbuttons.map((item:ControlButton) => {
					return (
						<SortButtonWNav
							key={item.label}
							type={`sort-button`}
							params= {{sort: item.dir }}
							view={`${view}`}
							item={{
								_typeid: "sort-button",
								item: {
									label: item.label
								},
								onClick: () => null,
								state: window.location.search.split('?sort=')[1]=== item.dir ?true:false,
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
							
		