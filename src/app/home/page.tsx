import PageLayout from 'src/app/home/_components/PageLayout' 
import { ReturnType_Home_BFF } from 'src/app/api/type'
import { isError } from 'src/app/fn/isErrorType'
import { basicGETFetch } from 'src/app/fn/basicFetch'

async function HomePage() {
	const bff={ 
		endpoint: `http://localhost:3000/api/home`
	}
	const data= await basicGETFetch<ReturnType_Home_BFF>(bff)
	
	return (
    <> 			
			{isError({data}) 
				?	<PageLayout 
						content= {null}
						overview={null}
					/>
				: null 
			}		
		</>
  );
}
export default HomePage

