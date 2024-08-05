
import { NextResponse } from "next/server"



export async function GET() {
    return  NextResponse.json(
        [
            {
              "name": "Youtube",
              "views": 200,
              "fill": "#526062"
            },
            {
              "name": "Facebook",
              "views": 700,
              "fill": "#EF8E5B"
            },
            {
              "name": "Instagram",
              "views": 400,
              "fill": "#0B6468"
            },
            {
              "name": "Twitter",
              "views": 500,
              "fill": "#526062"
            }
          ]
       
    )
}



