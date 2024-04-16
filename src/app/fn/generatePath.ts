import { PathType, QueryString } from 'src/app/api/type'
import { PATH_SUBMIT, PATH_HOME, PATH_PLAYER } from 'src/asset/constant'
import { generateQueryValue } from './generateQueryValue';
import { Sorting } from 'src/app/api/type';

const generatePath = (props: PathType):typeof PATH_HOME|typeof PATH_PLAYER|null => {
	
	if(props?.id==='player'){

		return `${PATH_PLAYER}/${props.name}`;

	}else if(props?.id==='players'){

		const sortQuery:Sorting= generateQueryValue('sort',props.search) 		
		const sortQueryStr:QueryString<'sort'>= `sort=${sortQuery}`
		return `${PATH_HOME}?${sortQueryStr}`

	}else if(props?.id==='card-submit'){
		return `${PATH_SUBMIT}`

	}else
		return null
}
export { generatePath }