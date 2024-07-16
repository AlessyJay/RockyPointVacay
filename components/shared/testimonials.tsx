import React from "react";
import { InfiniteMovingCards } from "../ui/infiniteScrollCards";

const Testimonials = () => {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl">
          Let&apos;s see what our travellers said
        </h1>
      </div>

      <InfiniteMovingCards
        items={[
          {
            quote:
              "Truly was an excellent experience. I took care of it as it were my own. Minor issues which I dealt with on my own but it's to be expected.",
            name: "Magarita",
            title: "Group trip",
          },
          {
            quote:
              "had a good stay, host was very responsive , staff was awesome.",
            name: "Jeremy",
            title: "Stayed with kids",
          },
          {
            quote:
              "Beautiful and so quiet. All staff very nice. Views are Amazing. Thank you so much",
            name: "Irma",
            title: "Stayed with kids",
          },
          {
            quote:
              "It was the perfect condo! Awesome amenities and the most comfortable beds after a day spent in the sun. It’s a great space with amazing views of the pool, beach and ocean.",
            name: "Kayla",
            title: "Stayed with kids",
          },
        ]}
        speed="slow"
      />
    </div>
  );
};

export default Testimonials;
