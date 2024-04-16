import { NextResponse } from 'next/server';
import { fetchGet } from 'src/app/fn/fetchGet';
import { ApiResponse, ReturnType_Home_BFF } from 'src/app/api/type';

const BASEURL:string= `https://opensource.aoe.com/the-card-game-data/player.json`;

export async function GET() : Promise<NextResponse<ReturnType_Home_BFF['players']>>{
	
	const response:ApiResponse<ReturnType_Home_BFF['players']|null> = await fetchGet<ReturnType_Home_BFF['players']>({endpoint:BASEURL});

	if(!response.success || response.data===null) return NextResponse.json([])
	return NextResponse.json(response.data)
}