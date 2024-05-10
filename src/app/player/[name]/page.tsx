import React from "react"
import Layout from 'src/app/component/layout/PageLayout'
import { Player } from 'src/app/context/type'
import { ContentContainerHeight,DetailContainerWidth, ControlContainerWidth } from 'src/asset/constant'
import { Overview, Content, Control, Detail } from "src/app/player/_components/index";
import { fetchGet } from "src/app/fn/fetchGet";
import { BASE_API_URL } from 'src/asset/constant'
import { ApiResponse, QueryParamType, QueryString, ReturnType_Player_BFF, Sorting } from 'src/app/api/type'
import { sortBy } from "src/app/fn/sortBy";
import { generateQueryValue } from "src/app/fn/generateQueryValue";
import styles from "src/app/page.module.css";

interface CardProps{ 
	params: {
		name: Player['playerName'] 
	},
	searchParams: QueryParamType
}

const OverviewComp= ({data}: {data:ReturnType_Player_BFF['players']}) => <Overview data={data} screen="player" />
const ControlComp= () => <Control view={`player`} height={ContentContainerHeight} width={ControlContainerWidth} />
const DetailComp= ({player}:{player:Player|null}) => <Detail player={player} height={ContentContainerHeight} width={DetailContainerWidth} />

const Player= async <CProps extends CardProps>(props:CProps)=> {
	const sortQuery:Sorting= generateQueryValue('sort',props.searchParams) 		
	const sortQueryStr:QueryString<'sort'>= `sort=${sortQuery}`

	const url={ 
		endpoint: `${BASE_API_URL}/player/${props.params.name}?${sortQueryStr}`
	}
	
	const apiResp:ApiResponse<ReturnType_Player_BFF|null>= await fetchGet<ReturnType_Player_BFF>(url)
	
	const sortedPlayers:{data:Player[]} = apiResp.data?.players
		? await sortBy<Player>(apiResp?.data?.players,'playerName',sortQuery)
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
}

export default Player