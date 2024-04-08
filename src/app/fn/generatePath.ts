import { PathType } from 'src/app/api/type'
import { PATH_HOME, PATH_PLAYER } from 'src/asset/constant'

const generatePath = (props: PathType):typeof PATH_HOME|typeof PATH_PLAYER|null => {
	if(props?.id==='player')
		return `${PATH_PLAYER}/${props.name}`;
	else if(props?.id==='players')	
		return `${PATH_HOME}?sort=${props.search.sort}`;
	else
		return null
}
export { generatePath }