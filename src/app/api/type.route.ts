import React from "react";

export type KeysOfValue<T, TCond> = {
  [K in keyof T]-?: T[K] extends TCond
    ? K
    : never;
}[keyof T];

export type RemoveChBf<T extends string,Ch extends string>= T extends `${Ch}${infer Name}`? Name : T

export type Split<T extends string,Separator extends string>=
	T extends `${infer Head}${Separator}${infer Tail}`
			? [Head, ...Split<Tail,Separator>]
			: [T]

export type ExtractRoute<Route extends string>= 
	Route extends `${infer Path}?${infer Search}#${infer Hash}`
		? { path: Path; search: Search; hash: Hash} 
		: Route extends `${infer Path}?${infer Search}`
			? { path: Path; search: Search; hash: ''} 
			: Route extends `${infer Path}#${infer Hash}`
				? { path: Path; search: ''; hash: Hash} 
				: { path: Route; search: ''; hash: ''}

export type ExtractPathParam<Path extends string,Items= Split<Path,'/'>,>=
	Items extends [infer Head,...infer Tail]
		? Head extends `:${infer Name}`
			? { [_ in Name]: string } & ExtractPathParam<Path, Tail>	
			: ExtractPathParam<Path, Tail>
		:	{}

export type ExtractSearchParam<Search extends string,Items=Split<Search,"&">>=
	Items extends [infer Head,...infer Tail]
		? Head extends `:${infer Name}[]`
			? { [_ in Name]?: string[] } & ExtractSearchParam<Search,Tail>
			: Head extends `:${infer Name}`
				? { [_ in Name]?: string} & ExtractSearchParam<Search,Tail>
				: ExtractSearchParam<Search,Tail>
		:{}

export type ExtractHashParam<Hash extends string>=
	Hash extends `:${infer Name}`
		? { [_ in Name]?: string}
		: {}

export type ExtractRouteParams<Route extends string>=	
	ExtractPathParam<ExtractRoute<Route>['path']>
	& ExtractSearchParam<ExtractRoute<Route>['search']>
	& ExtractHashParam<ExtractRoute<Route>['hash']>

export type TypeProductData= {
	id: string
	name: string
}

export interface ListProps<TItem>{
	data: TItem[]
	renderItem: (item:TItem) => React.ReactNode;
}

export type ContainerProps={
	content: React.ReactNode
}

export type Route = | '/home' | '/player' | '/player/:name'

export type GetName<T extends string>= 
	T extends `${infer Prename}:${infer Name}`
		? Name
		: T extends `/${infer A}`
			? A
			: T

export type TypeRoute= {
	[K in Route]: {
		name: GetName<K>	
		path: K
		param: ExtractRouteParams<K>
	} 
}[Route]

export type RouteProp= {
	name: TypeRoute["name"]
	path: TypeRoute["path"]
	content: string | React.ReactNode
}

export type TypeRouter<TParams> = {
	params: TParams;
	goBack: () => void;
	openPage: (page: string) => void;
}

export type TypeUseLocation={
	pathname: string
	hash: string
	key: string
	search: string
	state: string
}

export type TypeProductListProps={
	data: TypeProductData[]
}

export type NavigationFnProps<T extends Route>= {
	id: T
	param: ExtractRouteParams<T>
}
export type NavToProps={
	id: Route
	param: string
}
export type UseRouteFn= {
	navigateTo: (param:TypeRoute) => void	 
}