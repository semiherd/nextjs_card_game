import React from "react"
import Layout from 'src/app/component/layout/PageLayout'
import { Player } from 'src/app/context/type'
import { ContentContainerHeight,DetailContainerWidth, ControlContainerWidth } from 'src/asset/constant'
import { Overview, Content, Control, Detail } from "src/app/player/_components/index";
import { basicGETFetch } from "src/app/fn/basicFetch";
import { ApiResponse, ReturnType_Player_BFF } from 'src/app/api/type'
import { BASE_API_URL } from 'src/asset/constant'
import styles from "src/app/page.module.css";

interface CardProps{ 
	params: {
		name: Player['playerName'] 
	}
}

const OverviewComp= ({data}: {data:ReturnType_Player_BFF['players']}) => <Overview data={data} selected={null} screen="home" />
const ControlComp= () => <Control view={`player`} height={ContentContainerHeight} width={ControlContainerWidth} />
const DetailComp= ({player}:{player:Player|null}) => <Detail player={player} height={ContentContainerHeight} width={DetailContainerWidth} />

const Player= async <CProps extends CardProps>(props:CProps)=> {
	const url={ 
		endpoint: `${BASE_API_URL}/player/${props.params.name}`
	}
	
	const apiResp:ApiResponse<ReturnType_Player_BFF|null>= await basicGETFetch<ReturnType_Player_BFF>(url)
	
	return (
		<main className={styles.main}> 
			<Layout 
				content= {
					<Content 
						detail={<DetailComp player={apiResp===null ?null :apiResp!} />} 
						control={<ControlComp />} /> 
					}
				overview={apiResp.data===null
					? null
					: <OverviewComp data={apiResp.data.players} />}
			/>
    </main>
	)
};

export default Player