import { Player } from "src/app/context/type"

export type Sorting= 'ascending'|'descending'
export type View= 'home' | 'player'

export type Error={
	error: unknown
}

export type CardsPathParam={
	id: 'players',
	search: {
		sort: Sorting
	}
}
export type CardPathParam={
	id: 'player'
	name: string
}
export type PathType= CardsPathParam | CardPathParam

export type GetPlayerResponse={
	players: Player[]|null,
	player: Player|null
}
export type ApiResponse<T>={
	success: boolean,
	data: T
}
export type ReturnType_Home_BFF={
	players: Player[]
}

export type ReturnType_Player_BFF={
	players: Player[],
	player: Player|null
}
