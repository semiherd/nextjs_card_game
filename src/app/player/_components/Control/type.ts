import { Sorting } from 'src/app/api/type'

export type ControlButton={
	type: 'sort'
	dir: Sorting
	label: string
}