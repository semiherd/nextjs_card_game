import { basicGETFetch } from './basicFetch';
import { generatePath } from './generatePath';
import { isError } from 'src/app/fn/isErrorType';
import { CardsPathParam, Error, ReturnType_Home_BFF } from 'src/app/api/type';
import { Sorting } from 'src/app/api/type';

async function getPlayers({sort}:{sort:Sorting}):Promise<{data:ReturnType_Home_BFF['players']}|Error>{
	try{
		const param:CardsPathParam= { id:'players',search:{ sort }}
		const endpoint: string|null = generatePath(param);
		if(endpoint==null){
			return { data: [] }
		} 
		console.log('endpoin in getPlayers:',endpoint)
		const overview:ReturnType_Home_BFF['players']|Error = await basicGETFetch<ReturnType_Home_BFF['players']>({ endpoint })
		if(isError<ReturnType_Home_BFF['players']>(overview)){
			return { error: overview.error }
		}
		return { data: overview }
	}catch(e){
		return { error: e }
	}
}
export { getPlayers }