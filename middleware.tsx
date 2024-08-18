import React from 'react';
import {NextResponse} from "next/server";

function Middleware(request:Request) {
    console.log('hello there');
 return NextResponse.redirect(new URL('/', request.url));
}

export default Middleware;
export const config= {
  matcher :['/about/:path*'],
}