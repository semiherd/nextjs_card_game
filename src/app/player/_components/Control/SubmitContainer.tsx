'use client'
import { BaseProp } from 'src/app/component/button/type'
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
			<Button<BaseProp> state={false} uppercase onClick={handleSubmit} item={{label:'submit'}} />
		</>
	)
}
export default SubmitContainer;