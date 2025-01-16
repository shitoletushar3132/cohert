import { NextRequest, NextResponse } from "next/server";

let reqest = 0;
export function middleware(req: NextRequest) {
  reqest++;
  const res = NextResponse.next();
  return res;
}
