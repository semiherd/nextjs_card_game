import PageLayout from 'src/app/home/_components/PageLayout' 
import { BASE_API_URL, ContentContainerHeight, ControlContainerWidth } from 'src/asset/constant'
import { ApiResponse, QueryParamType, ReturnType_Home_BFF, Sorting } from 'src/app/api/type'
import { basicGETFetch } from 'src/app/fn/basicFetch'
import { Control } from '../player/_components';
import { Player } from '../context/type';
import { sortBy } from '../fn/sortBy';
import CardsOverview from 'src/app/home/_components/overview/CardsOverview'
import styles from "src/app/page.module.css";

const ControlComp= () => <Control view={`home`} height={ContentContainerHeight} width={ControlContainerWidth} />
const OverviewComp= ({data}: {data:ReturnType_Home_BFF['players']}) => <CardsOverview data={data} selected={null} screen="home" />

function isSorting(i:string|QueryParamType['sort']){
	if(i==='ascending' || i==='descending'){
		return true
	}
	return false
}
async function HomePage({searchParams}:{searchParams:QueryParamType}) {

	const bff={ 
		endpoint: `${BASE_API_URL}/home?${searchParams?.sort?.query}`
	}
	const bffResponse:ApiResponse<ReturnType_Home_BFF|null>= await basicGETFetch<ReturnType_Home_BFF>(bff)
	
	if(!bffResponse.success) return null
	if(!bffResponse.data) return null
	const defaultSort:Sorting= 'descending'
	const defaultSortObj:QueryParamType['sort']={
		query: `sort=${defaultSort}`,
		value: defaultSort
	}
	const param:QueryParamType['sort']= searchParams?.sort 
		? isSorting(searchParams?.sort)
			? searchParams?.sort
			:	defaultSortObj
		: defaultSortObj
	
	const sortedData:{data:Player[]} =  await sortBy<Player>(bffResponse?.data?.players,'playerName',param.value)

	return (
		<main className={styles.main}>		
			<PageLayout 
				content= {!sortedData?.data.length ?null :<ControlComp />}
				overview={bffResponse.data===null
					? null
					: <OverviewComp data={sortedData.data} />}
			/>	
		</main>
  )
}
export default HomePage

