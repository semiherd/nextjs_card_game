import {CardReducer,CardProviderState, Player} from './type';
import { CONTEXT_ACTIONS } from './Action'

export const cardReducer = (prevState: CardProviderState<Player>, action:CardReducer):CardProviderState<Player> => {
	switch (action.type) {
		case CONTEXT_ACTIONS.LIST.UPDATE:
			return {
				...prevState,
				list: action.payload.data
			}
		default:
			return prevState;
	}
};