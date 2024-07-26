import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const res = await fetch(
      `https://api.countrystatecity.in/v1/countries/MX/states`,
      {
        method: "GET",
        headers: {
          "X-CSCAPI-KEY": process.env.COUNTRY_API || "",
          "Content-Type": "application/json",
        },
        next: { revalidate: 3600 },
      },
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
};
