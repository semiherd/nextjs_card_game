import { ApiResponse } from "../api/type";

const fetchGet= async function <returnType>({ endpoint }: { endpoint: string }) 
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

export {
	fetchGet
}
