'use client'
import React, { useMemo } from "react"
import { Player, CardProviderState, CardProviderApi } from './type'
import { cardReducer } from './CardReducer'
import { CONTEXT_ACTIONS, ResponseActionVals } from './Action'
import { fetchPost } from "../fn/fetchPost"
import { generatePath } from "../fn/generatePath"
import { ApiResponse } from "../api/type"

const CardStateCtx= React.createContext<CardProviderState<Player>>({} as CardProviderState<Player>)
const CardDispatchCtx= React.createContext<CardProviderApi>({} as CardProviderApi)

type ReturnType_Submit= ApiResponse<Player|null>

function CardProvider({ children }:{children: React.ReactNode}) {
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
          
          if(apiResp) 
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

function useCardState() {
    const context = React.useContext(CardStateCtx);
    
    if (context === undefined) {
      throw new Error('useCardState must be used within a CardProvider');
    }
    return context;
 
}

function useCardDispatch() {
    const context = React.useContext(CardDispatchCtx);
    if (context === undefined) {
      throw new Error('useCardDispatch must be used within a CardProvider');
    }
    return context;
}

export { CardProvider, useCardState, useCardDispatch }