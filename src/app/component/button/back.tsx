import React from "react"
import { BackButtonProps } from "./type";
import { Button,  withNavigation } from "src/app/component/index";

const BackNavButton= withNavigation(Button)

const Back = ({state,uppercase,showAllText,params,onClick,item}:BackButtonProps<'sort'>) => {
	
	return (
				<BackNavButton
					type={`back-button`}
					params= {{sort:params}} 
					view={`player`}
					item={{
						_typeid: `back-button`,
						item: {
							label: item.label
						},
						onClick: () => onClick(),
						state,
						uppercase,
						showAllText,
						border: true,
					}}  
				/>
	)
};

export default Back;
