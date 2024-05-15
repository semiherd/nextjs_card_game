import Image from 'next/image'
const check = require('./icons/check.png'); 

const SuccessIcon = ({width,height}:{width:number,height:number}) => {
	if(!check || !width || !height) return null
	return <Image alt="submission done" src={check} width={width} height={height} />		
};

export default SuccessIcon;
