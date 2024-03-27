'use client'
import React, { useEffect, useState } from 'react'
import { useCardDispatch } from 'src/app/context/CardContext'
import { NavItemType, NavigationProp } from './type'
import Link from "next/link"

const formatName= (item:string) => item.split(' ').join('-')

const withNavigation= <TProps extends NavigationProp<NavItemType>>(
	Component: React.ComponentType<TProps>,
) => {
	
	return (props:TProps) => {
		const [routeUrl,setRoute]= useState<{as:string,href:string}>({as:'',href:''})
		
		function handleRoute(props:TProps){
			try{
				const name:string= formatName(props?.player.playerName)
				const base:string= `/${props.view}`

				switch(props.type){
					case 'control-button':
						return {
							as:`${base}?${props.params.sort}`,
							href: base
						}
					case 'player-card':
						const playerString:string= name?.split(' ').join('-')
						return{
							as:`/player/${playerString}?${props.params.sort}`,
							href:`/player/${playerString})}`
						}
					default:
						return {
							as: '',
							href:''
						}
				}
			}catch(e){
				return {
					as: '',
					href:''
				}
			}
		}

		const updateCardRoute= async () => {
			try{					
				const route:{as:string,href:string}= handleRoute(props)
				console.log('route',route)
				setRoute(route)	
			}catch(e){
				console.log(e)
			}
		}

		useEffect(() => {
			updateCardRoute()
		},[])

		return (
			<Link as={routeUrl.as} href={routeUrl.href} passHref>
				<Component {...props} />
			</Link>
		)
	}
}

export { withNavigation }