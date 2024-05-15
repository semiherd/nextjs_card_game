export type NMessageProps= {
	id: string
	label: string
	type: 'success' | 'fail'
	size:{
		width: number, height: number
	}
}
export type Positions= 'top-left'|'top-right'|'bottom-left'|'bottom-right'|'center'