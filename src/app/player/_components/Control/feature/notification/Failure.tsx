import Image from 'next/image'
const remove = require('./icons/remove.png'); 

const FailureIcon = ({width,height}:{width:number,height:number}) => {
	if(!remove || !width || !height) return null
	
	return <Image alt="submission done" src={remove} width={width} height={height} />
		
};

export default FailureIcon;
