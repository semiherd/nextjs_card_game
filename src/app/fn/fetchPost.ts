import { ApiResponse } from "../api/type";
import { Player } from "../context/type";

type PostParamType= { id: Player['playerName'] }

const fetchPost= async function <T,P extends PostParamType>(endpoint:string,param:P):Promise<ApiResponse<T|null>>{
	try{
			const res = await fetch(endpoint,{
				method: "POST",
				cache: 'no-store', 
				headers: {
					"Content-Type": "application/json;charset=utf8",
				},
				body: JSON.stringify(param),
			})
			const data= await res.json()
			return {
				success: res.ok,
				data
			}
			
	}catch(e){
		return {
			success: false,
			data: null
		}
	}
}

export { fetchPost }