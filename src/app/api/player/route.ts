import { NextRequest, NextResponse } from 'next/server';

export async function POST(req:NextRequest,res:NextResponse){
  const data= await req.json()
  console.log('post data:', data)
  return NextResponse.json(data)
}