import { NextResponse } from "next/server"



export async function GET() {
   
    return  NextResponse.json(
        [
            {
              "title": "Revenue",
              "amount": "$24M",
              "percentage": "11.01",
              "color": "#F9FEF0"
            },
            {
              "title": "Transaction",
              "amount": "14K",
              "percentage": "-0.03",
              "color": "#DBE6F2"
            },
            {
              "title": "Average transaction",
              "amount": "$2K",
              "percentage": "15.03",
              "color": "#F9FEF0"
            },
            {
              "title": "Refunds",
              "amount": "1K",
              "percentage": "6.08",
              "color": "#DBE6F2"
            }
          ]
    )
}