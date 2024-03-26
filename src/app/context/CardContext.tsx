'use client'
import React, { useEffect, useMemo } from "react"
import { Player, CardProviderState, CardProviderApi,SourceType, Sorting, View } from './type'
import { cardReducer } from './CardReducer'
import { CONTEXT_ACTIONS, ResponseActionVals } from './Action'
import { useRouter } from 'next/navigation'
const CardStateCtx= React.createContext<CardProviderState<Player,'playerName'>>({} as CardProviderState<Player,'playerName'>)
const CardDispatchCtx= React.createContext<CardProviderApi>({} as CardProviderApi)

function CardProvider({ children }:{children: React.ReactNode}) {
    const router = useRouter()
    const initialState:CardProviderState<Player,'playerName'>= {
      sorting: null,
      selected: null,
      list: []
    }
    
    const [state, dispatch] = React.useReducer(cardReducer, initialState);
  
    const api = useMemo(() => {	  

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

      async function selectCard(param: Player['playerName']):Promise<ResponseActionVals> {
        try{
          dispatch({ 
							type: CONTEXT_ACTIONS.CARD.SELECT,
              payload: {
                data: param
              }
            })
					return CONTEXT_ACTIONS.RESPONSE.SUCCESS
					
        }catch(e){
          return CONTEXT_ACTIONS.RESPONSE.FAIL
        }
      }

			async function resetSelected():Promise<ResponseActionVals>{
        try{				 
            dispatch({ 
              type: CONTEXT_ACTIONS.CARD.RESET,
              payload: {
								data: null
							}
            })
						return CONTEXT_ACTIONS.RESPONSE.SUCCESS					
        }catch(e){
          return CONTEXT_ACTIONS.RESPONSE.FAIL
        }
      }

			return { 
        updateList,
        selectCard,
        resetSelected,
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