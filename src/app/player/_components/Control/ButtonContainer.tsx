'use client'
import React, { useEffect, useState } from "react"
import { ControlButton } from './type'
import { controlbuttons } from './Buttons'
import { Layout } from "src/app/component/index";
import { View } from "src/app/context/type"
import { SortButtonWNav } from './SortButton'

const ButtonContainer = ({view}:{view:View}) => {
	const [location,setLocation]=useState<{search:string}|null>({search:''})
	
	useEffect(() => {  
		const handleLocation = () => {
      setLocation(window.location);
    }

    window.addEventListener('load', handleLocation);

    return () => window.removeEventListener('load', handleLocation);
  }, []);

	return (
		<Layout.Grid repeat={controlbuttons.length}>
			<>
				{controlbuttons.map((item:ControlButton) => {
					const state:boolean= location?.search?.split('?sort=')[1]=== item.dir 
						? true
						: false
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
								state,
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
							
		