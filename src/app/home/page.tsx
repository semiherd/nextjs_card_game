import PageLayout from 'src/app/home/_components/PageLayout' 
import { BASE_API_URL, ContentContainerHeight, ControlContainerWidth } from 'src/asset/constant'
import { ApiResponse, QueryParamType, QueryString, ReturnType_Home_BFF, Sorting } from 'src/app/api/type'
import { basicGETFetch } from 'src/app/fn/basicFetch'
import { Control } from '../player/_components';
import CardsOverview from 'src/app/home/_components/overview/CardsOverview'
import styles from "src/app/page.module.css";
import { handleQueryStr } from '../fn/handleQueryStr';
import { generateQueryValue } from '../fn/generateQueryValue';

const ControlComp= () => <Control view={`home`} height={ContentContainerHeight} width={ControlContainerWidth} />
const OverviewComp= ({data}: {data:ReturnType_Home_BFF['players']}) => <CardsOverview data={data} selected={null} screen="home" />

function isSorting(i:string|QueryParamType['sort']){
	if(i==='ascending' || i==='descending' || i=='default'){
		return true
	}
	return false
}
async function HomePage({searchParams}:{searchParams:QueryParamType}) {

	console.log('homepage searchParams:',searchParams)
	const sortQuery:Sorting= generateQueryValue('sort',searchParams) 		
	const sortQueryStr:QueryString<'sort'>= `sort=${sortQuery}`
	console.log('homepage sortQuery ss:',sortQuery)
	console.log('homepage sortquerystr ss:',sortQueryStr)
	const bff={ 
		endpoint: `${BASE_API_URL}/home?${sortQueryStr}`
	}
	
	const bffResponse:ApiResponse<ReturnType_Home_BFF|null>= await basicGETFetch<ReturnType_Home_BFF>(bff)
	
	if(!bffResponse.success) return null
	if(!bffResponse.data) return null
	// const defaultSort:Sorting= 'descending'
	// const defaultSortObj:QueryParamType['sort']={
	// 	query: `sort=${defaultSort}`,
	// 	value: defaultSort
	// }
	// const param:QueryParamType['sort']= searchParams?.sort 
	// 	? isSorting(searchParams?.sort)
	// 		? searchParams?.sort
	// 		:	defaultSortObj
	// 	: defaultSortObj

	//const sortedData:{data:Player[]} =  await sortBy<Player>(bffResponse?.data?.players,'playerName',param.value)
	
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

