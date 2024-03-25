type Props = {
  className?: string;
	repeat:number,
	children:React.ReactNode
}

const Grid = ({className,repeat,children}:Props) => {
	
	const styling= {
		display: 'grid',
		gridTemplateColumns: `repeat(${repeat},1fr)`,
		margin: '1%',
	}
	return <div className={className} style={styling}>{children}</div>
}
 export default Grid


