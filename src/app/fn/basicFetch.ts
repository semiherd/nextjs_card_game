import { Error } from 'src/app/api/type'

async function basicGETFetch<returnType>({ endpoint }: { endpoint: string; }):Promise<returnType|Error>{
	try{
		const response = await fetch(endpoint,{ 
			method: "GET" ,
			cache: 'no-store'  
		})
		if (!response.ok) throw new Error('Error!');	
		return await response.json();
	}catch(e){
		return {
			error: e
		}
	}
}

async function basicPOSTFetch<T>(endpoint:string,param:T):Promise<T|null>{
  const res= await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 
			time: new Date().toISOString(),
			data: param
		}),
  })
 
  return await res.json()
}

export { basicGETFetch, basicPOSTFetch }