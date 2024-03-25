import { NextRequest, NextResponse } from 'next/server';
import { basicGETFetch } from 'src/app/fn/basicFetch'
import { isError } from 'src/app/fn/isErrorType';
import { Error, ReturnType_Home_BFF } from 'src/app/api/type';
import { Sorting } from 'src/app/api/type';

const BASEURL:string= `https://opensource.aoe.com/the-card-game-data/player.json`;

export async function GET(request: NextRequest) : Promise<NextResponse<ReturnType_Home_BFF['players']>>{
	
	const searchParams= request.nextUrl.searchParams	
	const { sort } = {
  	sort: searchParams.get('sort') as Sorting,
  }

	const response:ReturnType_Home_BFF['players']|Error = await basicGETFetch<ReturnType_Home_BFF['players']>(BASEURL);

	if(isError<ReturnType_Home_BFF['players']>(response)){
		return NextResponse.json([])
	}
	
	return NextResponse.json(response)
}