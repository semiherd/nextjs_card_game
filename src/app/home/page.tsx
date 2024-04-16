import PageLayout from 'src/app/home/_components/PageLayout' 
import { BASE_API_URL, ContentContainerHeight, ControlContainerWidth } from 'src/asset/constant'
import { ApiResponse, QueryParamType, QueryString, ReturnType_Home_BFF, Sorting } from 'src/app/api/type'
import { fetchGet } from 'src/app/fn/fetchGet'
import { Control } from '../player/_components';
import { generateQueryValue } from '../fn/generateQueryValue';
import CardsOverview from 'src/app/home/_components/overview/CardsOverview'
import styles from "src/app/page.module.css";

const ControlComp= () => <Control view={`home`} height={ContentContainerHeight} width={ControlContainerWidth} />
const OverviewComp= ({data}: {data:ReturnType_Home_BFF['players']}) => <CardsOverview data={data} selected={null} screen="home" />

async function HomePage({searchParams}:{searchParams:QueryParamType}) {

	const sortQuery:Sorting= generateQueryValue('sort',searchParams) 		
	const sortQueryStr:QueryString<'sort'>= `sort=${sortQuery}`
	const bff={ 
		endpoint: `${BASE_API_URL}/home?${sortQueryStr}`
	}
	
	const bffResponse:ApiResponse<ReturnType_Home_BFF|null>= await fetchGet<ReturnType_Home_BFF>(bff)
	
	if(!bffResponse.success) return null
	if(!bffResponse.data) return null
	
	return (
		<main className={styles.main}>		
			<PageLayout 
				content= {!bffResponse?.data ?null :<ControlComp />}
				overview={bffResponse.data===null
					? null
					: <OverviewComp data={bffResponse.data.players} />}
			/>	
		</main>
  )
}
export default HomePage

