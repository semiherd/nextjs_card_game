import PageLayout from 'src/app/home/_components/PageLayout' 
import { ApiResponse, ReturnType_Home_BFF } from 'src/app/api/type'
import { basicGETFetch } from 'src/app/fn/basicFetch'
import styles from "src/app/page.module.css";
import CardsOverview from 'src/app/home/_components/overview/CardsOverview'
import { BASE_API_URL } from 'src/asset/constant'
const OverviewComp= ({data}: {data:ReturnType_Home_BFF['players']}) => <CardsOverview data={data} selected={null} screen="home" />

async function HomePage() {
	const bff={ 
		endpoint: `${BASE_API_URL}/home?sort=ascending`
	}
	const bffResponse:ApiResponse<ReturnType_Home_BFF|null>= await basicGETFetch<ReturnType_Home_BFF>(bff)
	
	if(!bffResponse.success){
		return null
	}
	
	return (
		<main className={styles.main}>		
			<PageLayout 
				content= {null}
				overview={bffResponse.data===null
					? null
					: <OverviewComp data={bffResponse.data.players} />}
			/>	
		</main>
  );
}
export default HomePage

