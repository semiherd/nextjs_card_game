import { basicGETFetch } from './basicFetch';
import { generatePath } from './generatePath';
import { ApiResponse, CardsPathParam, ReturnType_Home_BFF } from 'src/app/api/type';
import { Sorting } from 'src/app/api/type';
import { sortBy } from './sortBy';
import { Player } from '../context/type';

type Return= ApiResponse<ReturnType_Home_BFF['players']|null>

async function getPlayers({sort}:{sort:Sorting}):Promise<ReturnType_Home_BFF['players']>{
	try{
		const param:CardsPathParam= { id:'players',search:{ sort:{query: `sort=${sort}`,value:sort} }}
		const endpoint: string|null = generatePath(param);
		if(endpoint==null) return []
		const response:Return = await basicGETFetch<ReturnType_Home_BFF['players']>({endpoint});

		if(!response.success){
			return []
		}
		return response.data===null
				? []
				: response.data.length 
					? response.data 
					: []
	}catch(e){
		return []
	}
}
export { getPlayers }