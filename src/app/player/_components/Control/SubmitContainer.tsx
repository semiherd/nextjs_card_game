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
	const [submitted,setSubmitted]=useState<boolean>(false) 
	const removeDuration:number= 3
	
	async function handleSubmitted(){
		try{
			if(submitted){
				setTimeout(() => {
					setSubmitted(false);
				}, removeDuration * 1000);
			}
		}catch(e){
			console.log(e)
		}
	}
	useEffect(() => {
		handleSubmit()
	},[state])

	useEffect(() => {
	handleSubmitted()
	},[submitted])

	const handleSubmit= async () => {
		try{
			
			if(state){
				if(window?.location?.pathname){
					const pname:Player['playerName']= window.location.pathname.split('/player/')[1]
					const response:ResponseActionVals= await submitCard(pname)
					if(response==='success') setSubmitted(true)
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
			{submitted ?<h1>submitted</h1> :null}
			<Button<BaseProp> showAllText state={state} uppercase onClick={() => setState((prev) => !prev)} item={{label:'submit'}} />
		</div>
	)
}
export default SubmitContainer;