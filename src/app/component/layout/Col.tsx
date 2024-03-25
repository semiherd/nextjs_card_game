import { AlignOptions, AlignSelfOptions } from './type'

const Col = (
	{ alignOption,alignSelfOption,children }:
	{ alignOption?:AlignOptions,alignSelfOption?:AlignSelfOptions,children:React.ReactElement}) => (
		<div style={{
			display: 'flex',
			margin: 0,
			flexDirection: "column",
			justifyContent: alignOption || 'center',
			alignSelf: alignSelfOption || 'center',
		}}>{children}</div>
 )
 export default Col