import { AlignOptions, AlignSelfOptions } from './type'

const Row = ({ rowWidth,alignOption,alignSelfOption,children }:
	{rowWidth:number,alignSelfOption?:AlignSelfOptions,alignOption?:AlignOptions,children:React.ReactElement}) => {
		return (
			<div style={{
				display: 'flex',
				margin: '1%',
				flexDirection: "row",
				width: `${rowWidth}%`,
				justifyContent: alignOption || 'center',
				alignSelf: alignSelfOption || 'center',
				alignItems: 'center',
			}}>{children}</div>
 		)
}
 export default Row