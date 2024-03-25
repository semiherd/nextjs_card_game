import React from "react"
import { capitalizeFirstCh } from "src/app/fn/capitalizeFirstCh";

const Title = ({text,size,color}:{text:string,size:number|string,color:string}) => {
	
	const divStyling= {
		 margin: '1%',
		 padding: '1%'
	}
	const fontStyling= {
		 size,
		 color,
		 fontWeight: '500',
	}
	return (
		<div style={divStyling}>
			<h1 style={fontStyling}>{capitalizeFirstCh(text)}</h1>
		</div>
	)
}

export default Title;
