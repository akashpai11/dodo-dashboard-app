import { NextResponse } from "next/server"



export async function GET() {
   
    return  NextResponse.json(
        [
            {
                "title": "Revenue",
                "color": "#F7F9FB",
                "type": "lineRevenue"
            },
            {
                "title": "Number of Transactions",
                "color": "#F7F9FB",
                "type": "lineTransaction"
            },
            {
                "title": "Transaction Value By Referrer (in $)",
                "color": "#F7F9FB",
                "type": "bar"
            },
            {
                "title": "% Transaction Volume By Location",
                "color": "#F7F9FB",
                "type": "pie"
            },
            
        ]
    )
}