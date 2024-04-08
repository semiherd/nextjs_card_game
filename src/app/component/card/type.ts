import { View,CardsPathParam } from 'src/app/api/type'
import { BaseButton, BaseProp } from 'src/app/component/button/type'
import { Player } from 'src/app/context/type'

export interface PlayerCard extends Player{
	_typeid: 'player-card'
}

export interface SortButton extends BaseButton<BaseProp>{
	_typeid: 'sort-button'
}

export interface BackButton extends BaseButton<BaseProp>{
	_typeid: 'back-button'
}

export type NavItem= PlayerCard | SortButton | BackButton

export type BaseProps={
	state: boolean
	border: boolean
	showAllText: boolean
	uppercase: boolean
	width?: number
	height?: number
}
export type ItemProps=  NavItem & BaseProps

export type Remove<T,U extends keyof T>= T extends U? never: T
export type NavItemType= 'player-card'|'sort-button'|'back-button'

export type NavigationProp<T extends NavItemType,C>={
	type: T,
	view: View
	params: CardsPathParam['search']
	item: ItemProps
}
