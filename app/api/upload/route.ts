import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 },
      },
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json("There is something wrong with the fetching.");
  }
};
