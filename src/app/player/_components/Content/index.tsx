import { Row } from 'src/app/component/layout/index'
import { CardProvider } from 'src/app/context/CardProvider';
import './style/Content.css'

async function Content({detail,control}:{
	detail: React.ReactNode,
	control: React.ReactNode,
	}) {
	
	return (
		<CardProvider>
			<Row rowWidth={90}>
				<>
					{detail}
					{control}				
				</>
      </Row> 
		</CardProvider>
  );
}
export default Content
