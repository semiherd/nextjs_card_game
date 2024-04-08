import { capitalizeFirstCh } from "src/app/fn/capitalizeFirstCh"

function formatText(str:string,limit:number,showAllText:boolean,uppercase:boolean):string{
	try{
		const response:string= str.length>limit 
			? `${str.slice(0,limit)}...` 
			: str
		return uppercase 
			? response.toUpperCase() 
			: capitalizeFirstCh(response) || response
	}catch(e){
		return ''
	}
}

export {
	formatText
}