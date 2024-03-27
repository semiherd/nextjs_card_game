'use client'
import { Button } from 'src/app/component/index'

const SubmitContainer= () => {

	const handleSubmit= () => {
		try{
			console.log('submitted')
		}catch(e){
			console.log(e)
		}	
	}

	return (
		<>
			<Button state={false} uppercase onClick={handleSubmit} text={`submit`} />
		</>
	)
}
export default SubmitContainer;