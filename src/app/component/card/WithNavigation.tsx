'use client'
import React, { useLayoutEffect, useState } from 'react'
import { NavItemType, NavigationProp } from './type'
import Link from "next/link"
const formatName=(item:string) => item.split(' ').join('-')

type LinkProps={ as:string, href:string }

type CType<T>= React.ComponentType<T>

const withNavigation= <TProps extends NavigationProp<NavItemType,TProps['item']>>(
	Component: CType<TProps['item']>
) => {
	
	return (props:TProps) => {
		const [routeUrl,setRoute]= useState<LinkProps>({as:'',href:''})
		
		function handleRoute(props:TProps){
			try{			
				switch(props.item._typeid){
					case 'sort-button':		
						return {
							as: `${window?.location.pathname}?${props.params.sort.query}`,
							href: window?.location.pathname
						}
					case 'player-card':
						const name:string= formatName(props?.item.playerName)
						return{
							as:  `/player/${name}?${props.params.sort.query}`,
							href: `/player/${name})}`
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

		const updateCardRoute= () => {
			try{				
				const route:LinkProps= handleRoute(props)
				setRoute(route)	
			}catch(e){
				console.log(e)
			}
		}

		useLayoutEffect(() => {
			updateCardRoute()
		},[])
		
		return (
			<Link as={routeUrl.as} href={routeUrl.href} passHref>
				<Component {...props.item} />
			</Link>
		)
	}
}

export { withNavigation }