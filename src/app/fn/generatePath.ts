import { PathType } from 'src/app/api/type'

const BASE_API_URL: string = 'http://localhost:3000/api';
const PATH_HOME: string = `${BASE_API_URL}/players`;
const PATH_PLAYER: string = `${BASE_API_URL}/player`;

const generatePath = (props: PathType):typeof PATH_HOME|typeof PATH_PLAYER|null => {
	if(props?.id==='player')
		return `${PATH_PLAYER}/${props.name}`;
	else if(props?.id==='players')	
		return `${PATH_HOME}?sort=${props.search.sort}`;
	else
		return null
}
export { generatePath }