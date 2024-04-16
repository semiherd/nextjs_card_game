'use client'
import { useEffect, useState } from 'react'
import { BaseProp } from 'src/app/component/button/type'
import { Button } from 'src/app/component/index'
import { ResponseActionVals } from 'src/app/context/Action'
import { useCardDispatch } from 'src/app/context/CardContext'
import { Player } from 'src/app/context/type'
import './style/SubmitContainer.css'

const SubmitContainer= () => {
	const { submitCard }= useCardDispatch()
	const [state,setState]= useState<boolean>(false)

	useEffect(() => {
		handleSubmit()
	},[state])

	const handleSubmit= async () => {
		try{
			if(state){
				if(window?.location?.pathname){
					const pname:Player['playerName']= window.location.pathname.split('/player/')[1]
					const response:ResponseActionVals= await submitCard(pname)
					console.log('resp:',response)
				}
			}
		}catch(e){
			console.log(e)
		}finally{
			setState(false)
		}
	}
	const style= !state? 'progress' : ''

	return (
		<div className={style}>	
			<Button<BaseProp> showAllText state={state} uppercase onClick={() => setState((prev) => !prev)} item={{label:'submit'}} />
		</div>
	)
}
export default SubmitContainer;