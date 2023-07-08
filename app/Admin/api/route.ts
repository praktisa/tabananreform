import { CreateFileJSON } from '@/app/feature/Upload/_function/CreateFileJSON'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const res = await request.json()

    let Directory = "C:/next/tabananreform/app/Admin/_data/soal.json"


    let Stringy_data = JSON.stringify(res)
    CreateFileJSON(Directory, Stringy_data)

    return NextResponse.json({ res })
}