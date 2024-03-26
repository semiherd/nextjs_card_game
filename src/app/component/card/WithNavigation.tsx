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
		const updateCardRoute= async () => {
			try{
				
				if(props.view==='home'){
					props?.type==='control-button'
						? setRoute({
								as:`/home?${props.params.sort}`,
								href:`/home`
							})
						: props?.type==='player-card' && props?.player
							? setRoute({
									as:`/player/${formatName(props.player.playerName)}?${props.params.sort}`,
									href:`/player/${formatName(props.player.playerName)}`
								})
							: null
				}
				if(props.view==='player' && props?.player){	
					const name:string=formatName(props.player.playerName)
					setRoute({
						as:`/player/${name}?${props.params.sort}`,
						href:`/player`
					})				
				}
			}catch(e){
				console.log(e)
			}
		}

		useEffect(() => {
			updateCardRoute()
		},[])

		useEffect(() => {
			console.log('routeUrl:',routeUrl)
		},[routeUrl])

		return (
			<Link as={routeUrl.as} href={routeUrl.href} passHref>
				<Component {...props} />
			</Link>
		)
	}
}

export { withNavigation }