import { QueryParamType } from '../api/type'
import { CONTEXT_ACTIONS, ResponseActionVals } from './Action'
import { Sorting } from 'src/app/api/type'

export type View= 'home' | 'player'

export type Player={
	realName: string
	playerName: string
	asset: string
}

export type CardProviderState<T>={
	list: T[]
}

export type CardProviderApi={
	updateList: (param: Player[]) => Promise<ResponseActionVals>
	submitCard: (item: Player['playerName'] ) => Promise<ResponseActionVals>
}

type UpdateList= {
	type: typeof CONTEXT_ACTIONS.LIST.UPDATE
	payload: {
		data: Player[]
	}
}


export type CardReducer= UpdateList

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
	query: QueryParamType['sort']|null
	value: Sorting|null
} 