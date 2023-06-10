import React, { useEffect, useState } from "react";
import SectionTitle from "../../component/SectionTitle";
//
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
///
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
//
import { AiOutlineUser } from "react-icons/ai";

const ClientReview = () => {
  ///
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="mt-5 mb-7">
      <SectionTitle
        subheading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id} review={review}>
            <div className="text-center p-6 flex flex-col justify-center space-y-4">
              <div className="mx-auto">
                <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              </div>
              <div className="mx-auto">
                <AiOutlineUser className="text-4xl"/>
              </div>
              <h3 className="text-3xl font-bold">{review.name}</h3>
              <p className="">{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientReview;
