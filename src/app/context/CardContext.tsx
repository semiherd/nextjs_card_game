'use client'
import React, { useEffect,useMemo } from "react"
import { Player, CardProviderState, CardProviderApi,SourceType, Sorting, View } from './type'
import { cardReducer } from './CardReducer'
import { CONTEXT_ACTIONS,ResponseActionVals } from './Action'
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

			return { 
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