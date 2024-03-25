import { Player, Sorting } from 'src/context/type'

export type Error= {
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

export type ReturnType_Home_BFF={
	players: Player[]
}

export type ReturnType_Player_BFF={
	players: Player[],
	player: Player|null
}