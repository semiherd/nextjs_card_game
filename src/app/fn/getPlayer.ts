import { getPlayers } from './getPlayers';
import { ApiResponse, ReturnType_Home_BFF } from 'src/app/api/type';
import { Player } from '../context/type';

type Return= ApiResponse<ReturnType_Home_BFF['players']|null>

async function getPlayer({name}:{name:Player['playerName']}):Promise<{player:Player|null}>{
	try{

		//fetch all players
		const players:ReturnType_Home_BFF['players']= await getPlayers({sort:'default'})
		
		//filter requested-player-by-player-name
		const player: ReturnType_Home_BFF['players']= players.filter( p => p.playerName.split(' ').join('-').toLowerCase()===name)
		if(!player.length){
			return { player: null }
		}
		return {
			player: player[0]
		}
	}catch(e){
		return { player: null }
	}
}
export { getPlayer }