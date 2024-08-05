
import { NextResponse } from "next/server"



export async function GET() {
    return  NextResponse.json(
        [
            {
              "name": "Jan",
              "value": 8
            },
            {
              "name": "Feb",
              "value": 15
            },
            {
              "name": "Mar",
              "value": 10
            },
            {
              "name": "Apr",
              "value": 20
            },
            {
              "name": "May",
              "value": 15
            },
            {
              "name": "Jun",
              "value": 25
            },
            {
              "name": "Jul",
              "value": 30
            },
            {
              "name": "Aug",
              "value": 35
            },
            {
              "name": "Sep",
              "value": 40
            },
            {
              "name": "Oct",
              "value": 45
            },
            {
              "name": "Nov",
              "value": 50
            },
            {
              "name": "Dec",
              "value": 55
            }
          ]
    )
}



