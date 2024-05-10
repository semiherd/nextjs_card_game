import { NextRequest, NextResponse } from 'next/server';
import { getPlayers } from 'src/app/fn/getPlayers';
import { ReturnType_Home_BFF } from 'src/app/api/type';
import { Sorting } from 'src/app/api/type';

export async function GET(request: NextRequest) : Promise<NextResponse<ReturnType_Home_BFF>>{

	const searchParams= request.nextUrl.searchParams	
	const { sort } = {
  	sort: searchParams.get('sort') as Sorting,
  }
	
	//Overview - fetch all players
	const overview:ReturnType_Home_BFF['players']= await getPlayers({sort})
	
	const payload:ReturnType_Home_BFF= Object.assign({
		players: overview
	})

	return NextResponse.json(payload)	
}


