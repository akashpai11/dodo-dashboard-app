import { NextResponse } from "next/server"



export async function GET() {
    return  NextResponse.json(
        [
            { "name": "United States", "value": 38.6 },
            { "name": "Canada", "value": 22.5 },
            { "name": "Europe", "value": 30.8 },
            { "name": "Other", "value": 8.1 }
          ]
    )
}
