import { NextRequest, NextResponse } from "next/server";
import users from "@/data/users.json";

const GET = async (request: NextRequest) => {
  const id = request.nextUrl.pathname.split("/")[2];
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  return NextResponse.json(user);
};

export { GET };
