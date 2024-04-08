import { QueryParamType } from '../api/type'
import { ControlButton } from '../player/_components/Control/type'
import { CONTEXT_ACTIONS } from './Action'

export type Sorting= 'ascending'|'descending'
export type View= 'home' | 'player'

export type Player={
	realName: string
	playerName: string
	asset: string
}

export type CardProviderState<T>={
	list: T[]
	sorting: Sorting| null
}

export type CardProviderApi={
	updateList: (param: Player[]) => void
	updateSorting: (dir: Sorting ) => void
}

type ResetSelected= {
	type: typeof CONTEXT_ACTIONS.CARD.RESET
	payload: {
		data: null
	}
}
type SelectCard= {
	type: typeof CONTEXT_ACTIONS.CARD.SELECT
	payload: {
		data: Player['playerName']
	}
}
type UpdateSorting= {
	type: typeof CONTEXT_ACTIONS.LIST.SORT
	payload: {
		data: 'ascending'|'descending'
	}
}
type UpdateList= {
	type: typeof CONTEXT_ACTIONS.LIST.UPDATE
	payload: {
		data: Player[]
	}
}

export type CardReducer= ResetSelected | SelectCard | UpdateSorting | UpdateList

export type HomeSource= {
	type: 'home',
	dir: Sorting
}
export type PlayerSource= {
	type: 'player'
	item: Player['playerName']
	dir: Sorting
}
export type SourceType= HomeSource | PlayerSource

export type RouteReturn= {
	query: QueryParamType['sort']['query']|null
	value: Sorting|null
} 