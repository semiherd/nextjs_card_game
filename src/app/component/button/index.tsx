import React from "react"
import { BaseButton } from './type'
import './style/Button.css'
import { formatText } from "./fn/formatText";

const Button=<T extends {label:string}>(props:BaseButton<T>) => {
	const {state,showAllText,uppercase,onClick,item}= props	
	
	if(!item){
		return null
	}
	return <div className={`button align-center pd-2`} onClick={() =>onClick()}>
			<p className={`${state ?'active':'not-active'}`}>{formatText(item.label,item.label.length,showAllText,uppercase)}</p>
		</div>
	
};

export default Button;
