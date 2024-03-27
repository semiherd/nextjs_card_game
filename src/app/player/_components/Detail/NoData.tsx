import '../Content/style/Content.css'

const NoData = ({width,height}:{height:number,width:number}) => {
	
	const styling= {
		width: `${width}vw`,
		height: `${height}vh`,
		//transform: `translate(5%, -10%)`,
	}

	return (
		<div 
			className={`text-center`}
			style={styling}
		>
			<p className={`no-info`}>{`No information found, please select another card`}</p>
		</div>
	)
};

export default NoData;
