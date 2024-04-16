import { ApiResponse } from "../api/type";
import { Player } from "../context/type";

type PostParamType= { id: Player['playerName'] }

const fetchPost= async function <T,P extends PostParamType>(endpoint:string,param:P):Promise<ApiResponse<T|null>>{
	try{
			const options= {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(param),
			}
			const res = await fetch(endpoint,options)
      
			return {
				success: res.ok,
				data: await res.json()
			}
			
	}catch(e){
		return {
			success: false,
			data: null
		}
	}
}

export { fetchPost }