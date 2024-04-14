import { QueryParamType } from "../api/type";

type Return= QueryParamType['sort']

function onSort(sort:QueryParamType['sort']|null):Return{
  const existingParamsString = window.location.search;
	const params = new URLSearchParams(existingParamsString);
  if (sort == null) {
		params.delete('sort')
  } else {
		params.set('sort', `sort=${sort}`);
  }
	return params.toString() as Return
}

export {
	onSort
}