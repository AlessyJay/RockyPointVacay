import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = async () => {
  const searchParams = useSearchParams();
  const selectedCountry = searchParams.get("city");
  try {
    const res = await fetch(
      `https://api.countrystatecity.in/v1/countries/${selectedCountry}/states`,
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
