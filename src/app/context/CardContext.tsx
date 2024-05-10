'use client'
import React from "react"
import { Player } from './type'
import { ApiResponse } from "../api/type"
import { CardStateCtx, CardDispatchCtx } from './CardProvider'

type ReturnType_Submit= ApiResponse<Player|null>

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

export { useCardState, useCardDispatch }