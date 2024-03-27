import React from "react"
import { capitalizeFirstCh } from 'src/app/fn/capitalizeFirstCh'
import { BaseButton } from './type'
import './style/Button.css'

const Button = (props:BaseButton) => {
	const {state,uppercase,onClick,text}= props	
	
	return (	
		<div className={`button align-center pd-2`} onClick={onClick}>
			<p className={`${state ?'active':'not-active'}`}>{uppercase ?text.toUpperCase() :capitalizeFirstCh(text)}</p>
		</div>
	)
};

export default Button;
