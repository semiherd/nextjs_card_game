import { NextRequest, NextResponse } from 'next/server';
import { getPlayers } from 'src/app/fn/getPlayers';
import { isError } from 'src/app/fn/isErrorType';
import { Error, ReturnType_Home_BFF } from 'src/app/api/type';
import { Sorting } from 'src/app/api/type';

export async function GET(request: NextRequest) : Promise<NextResponse<ReturnType_Home_BFF>>{

	const searchParams= request.nextUrl.searchParams	
	const { sort } = {
  	sort: searchParams.get('sort') as Sorting,
  }

	//Overview - fetch all players
	const overview:{data:ReturnType_Home_BFF['players']}|Error= await getPlayers({sort})
	
	const payload= Object.assign({
		players: isError(overview) ? [] : overview.data
	})

	return NextResponse.json(payload)
	
}


