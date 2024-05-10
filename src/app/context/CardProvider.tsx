'use client'
import React, { useMemo } from "react"
import { Player, CardProviderState, CardProviderApi } from './type'
import { cardReducer } from './CardReducer'
import { CONTEXT_ACTIONS, ResponseActionVals } from './Action'
import { fetchPost } from "../fn/fetchPost"
import { generatePath } from "../fn/generatePath"

const CardStateCtx= React.createContext<CardProviderState<Player>>({} as CardProviderState<Player>)
const CardDispatchCtx= React.createContext<CardProviderApi>({} as CardProviderApi)

function CardProvider({ children }:{ children: React.ReactNode }) {
	const initialState:CardProviderState<Player>= {
		list: []
	}
	
	const [state, dispatch] = React.useReducer(cardReducer, initialState);

	const api = useMemo(() => {	
		
		async function submitCard(pname:Player['playerName']):Promise<ResponseActionVals> {
			try{
				const endpoint: string|null = generatePath({id:`card-submit`});      
				if(endpoint===null) return CONTEXT_ACTIONS.RESPONSE.FAIL
				
				const apiResp= await fetchPost<Player,{id: string}>(endpoint, {id:pname});
				if(apiResp.data) 
					return CONTEXT_ACTIONS.RESPONSE.SUCCESS
				else
					return CONTEXT_ACTIONS.RESPONSE.FAIL
			}catch(e){
				console.log(e)
				return CONTEXT_ACTIONS.RESPONSE.FAIL
			}
		}
		
		async function updateList(data:Player[]):Promise<ResponseActionVals> {
			try{
				if(data) {					
					dispatch({ 
						type: CONTEXT_ACTIONS.LIST.UPDATE,
						payload: { data }
					})
					if(state.list===data)
						return CONTEXT_ACTIONS.RESPONSE.SUCCESS
					else 
						return CONTEXT_ACTIONS.RESPONSE.FAIL
				}else
					return CONTEXT_ACTIONS.RESPONSE.FAIL
			}catch(e){
				return CONTEXT_ACTIONS.RESPONSE.FAIL
			}
		}

		return { 
			updateList,
			submitCard,
		}
	},[])

	return (
		<CardStateCtx.Provider value={state}>
		<CardDispatchCtx.Provider value={api}>
			{children}
		</CardDispatchCtx.Provider>
		</CardStateCtx.Provider>
	)
}
export { CardProvider, CardStateCtx, CardDispatchCtx  }