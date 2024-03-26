import { ApiResponse } from "../api/type";

const basicGETFetch= async function <returnType>({ endpoint }: { endpoint: string }) 
	: Promise<ApiResponse<returnType|null>> {
		const response = await fetch(endpoint,{ 
			method: "GET" ,
			cache: 'no-store'  
		})
		if (!response.ok){
			return {
				success: false,
				data: null
			}	
		}	
		const data:returnType= await response.json()
		return {
			success: true,
			data
		}
}

const basicPOSTFetch= async function <T>(endpoint:string,param:T):Promise<ApiResponse<T|null>>{
	try{
		const response= await fetch(endpoint, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ 
				time: new Date().toISOString(),
				data: param
			}),
		})
	
		return {
			success: true,
			data: await response.json()
		}
	}catch(e){
		return {
			success: false,
			data: null
		}
	}
}

export {
	basicGETFetch,
	basicPOSTFetch
}
