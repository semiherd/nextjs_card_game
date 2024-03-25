import { NextRequest, NextResponse } from 'next/server';
// import { getPlayers } from 'src/app/api/fn/getPlayers';
import { isError } from 'src/app/fn/isErrorType';
import { CardsPathParam, Error, ReturnType_Home_BFF } from 'src/app/api/type';
import { Sorting } from 'src/app/api/type';
import { Player } from 'src/type';
import { testData } from 'src/asset/data';

export async function GET(request: NextRequest) : Promise<NextResponse<ReturnType_Home_BFF>>{

	const searchParams= request.nextUrl.searchParams	
	const { sort } = {
  	sort: searchParams.get('sort') as Sorting,
  }

	//Overview - fetch all players
	const overview:ReturnType_Home_BFF['players']|Error= testData // await getPlayers({sort})
	
	const payload= Object.assign({
		players: isError(overview) ? [] : overview
	})

	return NextResponse.json(payload)
	
}


