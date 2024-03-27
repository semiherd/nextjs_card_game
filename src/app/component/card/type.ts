import { Player } from 'src/app/context/type'
import { View } from 'src/app/api/type'
import { BaseButton } from 'src/app/component/button/type'

export type CardProps={
	player: Player|null,
	width?: number,
	border: boolean
	showAllText: boolean,
	state: boolean,
	height?: number,
}

export type Remove<T,U extends keyof T>= T extends U? never: T
export type NavItemType= 'player-card'|'control-button'

export type SortParams= 'sort=ascending'|'sort=descending'
export type QueryParams={
	sort: SortParams
}
export type NavigationProp<T extends NavItemType>={
	type: T,
	params: QueryParams
	view: View
	width: number
	border: boolean
	showAllText: boolean
	state: boolean
	item: T extends 'player-card'
		? Remove<CardProps,'height'> 
		: T extends 'button-card'
			? BaseButton
			: never
}
export type BaseNavigatedProps= NavigationProp<NavItemType>