import { NextRequest, NextResponse } from "next/server";
import users from "@/data/users.json";

const GET = async () => {
  return NextResponse.json(users);
};

const POST = async (request: NextRequest) => {
  const user = await request.json();
  users.push(user);
  return NextResponse.json(users);
};

const DELETE = async (request: NextRequest) => {
  const id = request.nextUrl.pathname.split("/")[2];
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  users.splice(users.indexOf(user), 1);
  return NextResponse.json(users);
};

const PUT = async (request: NextRequest) => {
  const { id } = await request.json();
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  users.splice(users.indexOf(user), 1);
  return NextResponse.json(users);
};

export { GET, POST, DELETE, PUT };
