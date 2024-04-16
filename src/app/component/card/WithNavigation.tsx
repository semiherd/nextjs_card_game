'use client'
import React, { useEffect, useState } from 'react'
import { NavItemType, NavigationProp } from './type'
import { generateQueryValue } from 'src/app/fn/generateQueryValue'
import { QueryString } from 'src/app/api/type'
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
				const sortValue= generateQueryValue<'sort'>('sort',props.params)
				const sortQueryStr:QueryString<'sort'>= `sort=${sortValue}`
				
				switch(props.item._typeid){
					case 'sort-button':		
						return {
							as: `${window?.location.pathname}?${sortQueryStr}`,
							href: window?.location.pathname
						}
					case 'player-card':
						const name:string= formatName(props?.item.playerName)					
						
						return{
							as:  `/player/${name}?${sortQueryStr}`,
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

		useEffect(() => {
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