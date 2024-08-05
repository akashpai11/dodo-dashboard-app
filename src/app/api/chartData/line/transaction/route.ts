
import { NextResponse } from "next/server"



export async function GET() {
    return  NextResponse.json(
        [
            {
              "name": "Jan",
              "value": 5000
            },
            {
              "name": "Feb",
              "value": 12365
            },
            {
              "name": "Mar",
              "value": 20567
            },
            {
              "name": "Apr",
              "value": 30000
            },
            {
              "name": "May",
              "value": 34987
            },
            {
              "name": "Jun",
              "value": 39675
            },
            {
              "name": "Jul",
              "value": 48000
            },
            
          ]
    )
}



