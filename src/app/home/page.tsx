import PageLayout from 'src/app/home/_components/PageLayout' 
import { ReturnType_Home_BFF } from 'src/app/api/type'
import { isError } from 'src/app/fn/isErrorType'
import { basicGETFetch } from 'src/app/fn/basicFetch'
import CardsOverview from './_components/overview'
import styles from "src/app/page.module.css";
async function HomePage() {
	const bff={ 
		endpoint: `http://localhost:3000/api/home`
	}
	const data= await basicGETFetch<ReturnType_Home_BFF>(bff)
	console.log(data)
	return (
		<main className={styles.main}>		
			{isError({data}) 
				? null 
				:	<PageLayout 
						content= {null}
						overview={<CardsOverview data={data.players} selected={null} screen="home" />}
					/>
			}		
		</main>
  );
}
export default HomePage

