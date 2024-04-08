import { NextRequest, NextResponse } from 'next/server';
import { getPlayers } from 'src/app/fn/getPlayers';
import { ReturnType_Home_BFF, ReturnType_Player_BFF } from 'src/app/api/type';
import { Sorting } from 'src/app/api/type';

export async function GET(request: NextRequest) : Promise<NextResponse<ReturnType_Player_BFF>>{
	const name:string= request.nextUrl.pathname.split('api/player/')[1].toLowerCase()
	const searchParams= request.nextUrl.searchParams	
	const { sort } = {
  	sort: searchParams.get('sort') as Sorting,
  }

	//fetch all players
	const players:ReturnType_Home_BFF['players']= await getPlayers({sort})
	
	//filter requested-player-by-player-name
	const player: ReturnType_Home_BFF['players']= players.filter( p => p.playerName.split(' ').join('-').toLowerCase()===name)
	
	//payload-object
	const payload:ReturnType_Player_BFF= Object.assign({
		player: player.length ? player[0] :null,
		players
	})

	return NextResponse.json(payload)	
	}


