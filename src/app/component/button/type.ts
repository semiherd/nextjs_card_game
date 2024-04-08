import { QueryParamType } from "src/app/api/type"

export type BaseProp={
	label:string
}
export type BaseButton<T extends BaseProp>= {
	state: boolean
	showAllText: boolean
	uppercase: boolean
	onClick: () => void 
	item: T
}

export interface BackButtonProps<P extends keyof QueryParamType> extends BaseButton<{label: string}>{
	params: QueryParamType[P]
}