import React from "react"
import Layout from 'src/app/component/layout/PageLayout'
import { Player } from 'src/app/context/type'
import { ContentContainerHeight,DetailContainerWidth, ControlContainerWidth } from 'src/asset/constant'
import { Overview, Content, Control, Detail } from "src/app/player/_components/index";
import { basicGETFetch } from "src/app/fn/basicFetch";
import { BASE_API_URL } from 'src/asset/constant'
import styles from "src/app/page.module.css";
import { ApiResponse, QueryParamType, ReturnType_Player_BFF, Sorting } from 'src/app/api/type'
import { sortBy } from "src/app/fn/sortBy";

interface CardProps{ 
	params: {
		name: Player['playerName'] 
	},
	searchParams: QueryParamType
}

const OverviewComp= ({data}: {data:ReturnType_Player_BFF['players']}) => <Overview data={data} selected={null} screen="player" />
const ControlComp= () => <Control view={`player`} height={ContentContainerHeight} width={ControlContainerWidth} />
const DetailComp= ({player}:{player:Player|null}) => <Detail player={player} height={ContentContainerHeight} width={DetailContainerWidth} />

function isSorting(i:string|QueryParamType['sort']){
	if(i==='ascending' || i==='descending'){
		return true
	}
	return false
}

const Player= async <CProps extends CardProps>(props:CProps)=> {
	const url={ 
		endpoint: `${BASE_API_URL}/player/${props.params.name}`
	}
	
	const apiResp:ApiResponse<ReturnType_Player_BFF|null>= await basicGETFetch<ReturnType_Player_BFF>(url)
	
	const defaultSort:Sorting= 'ascending'
	const defaultSortObj:QueryParamType['sort']={
		query: `sort=${defaultSort}`,
		value: defaultSort
	}
	const param:QueryParamType['sort']= props.searchParams?.sort 
		? isSorting(props.searchParams?.sort)
			? props.searchParams?.sort
			:	defaultSortObj
		: defaultSortObj
	console.log(param)
	const sortedPlayers:{data:Player[]} = apiResp.data?.players
		? await sortBy<Player>(apiResp?.data?.players,'playerName',param.value)
		: { data: [] }
		

	return (
		<main className={styles.main}> 
			{apiResp.success
				? <Layout			
						content= {
							<Content 
								detail={<DetailComp 
									player={apiResp?.data?.player
											? apiResp.data.player
											: null
								} />} 
								control={<ControlComp />} /> 
							}
						overview={!sortedPlayers.data
							? null
							: <OverviewComp data={sortedPlayers.data} />}
					/>
				: <h1>No Api Response</h1>
			}
    </main>
	)
};

export default Player