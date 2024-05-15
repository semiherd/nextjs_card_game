'use client'
import { useEffect, useState } from 'react'
import { BaseProp } from 'src/app/component/button/type'
import { Button } from 'src/app/component/index'
import { ResponseActionVals } from 'src/app/context/Action'
import { useCardDispatch } from 'src/app/context/CardContext'
import { Player } from 'src/app/context/type'
import NMessageList from 'src/app/player/_components/Control/feature/notification/NMessageList'
import { NMessageProps } from 'src/app/player/_components/Control/feature/notification/type'
import './style/SubmitContainer.css'

const SubmitContainer= () => {
	const { submitCard }= useCardDispatch()
	const [state,setState]= useState<boolean>(false)
	const [notifData,setNotifData]= useState<NMessageProps[]>([]) 
	const autoClose:number= 2
	
	const removeNotif = (id:NMessageProps['id']) => {
    setNotifData((prev) => prev.filter((n) => n.id !== id));
  };
	const addNotif = (item:NMessageProps) => {
    setNotifData((prev) => ([
			...prev, 
			item
		]));
  };

	const showNotif = (message: string, type:'success'|'fail') => {
    const nMessage = {
      id: `submit-${type}`, 
			label: message, 
			type,
			size: {width: 20, height: 20}
    };

    addNotif(nMessage)

    setTimeout(() => {
			removeNotif(nMessage.id);
    }, autoClose * 1000);   
  };

	useEffect(() => {
		handleSubmit()
	},[state])

	const handleSubmit= async () => {
		try{		
			if(state){
				if(window?.location?.pathname){
					const pname:Player['playerName']= window.location.pathname.split('/player/')[1]
					const response:ResponseActionVals= await submitCard(pname)
					const message:string= response==='success' ?'submitted' :'submission failed'
					showNotif(message,response)
				}
			}
		}catch(e){
			console.log(e)
			setState(false)
		}finally{
			setState(false)
		}
	}
	const style= !state? 'progress' : ''

	return (
		<div className={style}>	
			<Button<BaseProp> showAllText state={state} uppercase onClick={() => setState((prev) => !prev)} item={{label:'submit'}} />
			<NMessageList data={notifData} position={`bottom-left`} />
		</div>
	)
}
export default SubmitContainer;