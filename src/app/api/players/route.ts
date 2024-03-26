import { NextRequest, NextResponse } from 'next/server';
import { basicGETFetch } from 'src/app/fn/basicFetch';
import { ApiResponse, Error, ReturnType_Home_BFF } from 'src/app/api/type';
import { Sorting } from 'src/app/api/type';

const BASEURL:string= `https://opensource.aoe.com/the-card-game-data/player.json`;

export async function GET(request: NextRequest) : Promise<NextResponse<ReturnType_Home_BFF['players']>>{
	
	const searchParams= request.nextUrl.searchParams	
	const { sort } = {
  	sort: searchParams.get('sort') as Sorting,
  }

	const response:ApiResponse<ReturnType_Home_BFF['players']|null> = await basicGETFetch<ReturnType_Home_BFF['players']>({endpoint:BASEURL});

	if(!response.success || response.data===null) return NextResponse.json([])
	return NextResponse.json(response.data)
}