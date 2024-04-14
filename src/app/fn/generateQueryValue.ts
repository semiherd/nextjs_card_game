import { QueryParamType, QueryParams } from "../api/type";

function generateQueryValue<T extends QueryParams>(k:T,obj:QueryParamType):QueryParamType[T]{
	try{	
		return obj[k]	
			? obj[k]
			: `default`
	}catch(e){
		return `default`
	}
} 
export { generateQueryValue }