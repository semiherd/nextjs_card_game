import React from "react"
import { capitalizeFirstCh } from 'src/component/app/fn/CapitalizeFirstCh'
import './style/Button.css'
import { BaseButton } from './type'

const Button = ({state,uppercase,onClick,text}:BaseButton) => {

	return (	
		<div className={`button align-center pd-2`} onClick={onClick}>
			<p className={`${state ?'active':'not-active'}`}>{uppercase ?text.toUpperCase() :capitalizeFirstCh(text)}</p>
		</div>
	)
};

export default Button;
