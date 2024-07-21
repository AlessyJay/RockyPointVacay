import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    if (!process.env.COUNTRY_API) {
      throw new Error("Missing country api key");
    }

    const res = await fetch("https://api.countrystatecity.in/v1/countries", {
      method: "GET",
      headers: {
        "X-CSCAPI-KEY": process.env.COUNTRY_API,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok)
      return NextResponse.json(
        { error: "API request failed!" },
        { status: res.status },
      );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching countries:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
};
