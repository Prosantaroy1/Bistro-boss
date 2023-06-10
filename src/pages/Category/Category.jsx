import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "../../component/SectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <SectionTitle
          subheading={'From 11:00am to 10:00pm'}
          heading={'ORDER ONLINE'}
         > </SectionTitle>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mt-6 mb-8"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 font-bold pe-32 text-white">
              Fizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 font-bold pe-32  text-white">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 font-bold pe-32 text-white">
              Shopas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 font-bold pe-32 text-white">
              BarGar
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 font-bold pe-32 text-white">
              Fizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 font-bold pe-32 text-white">
              Fizza
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <h3 className="text-4xl uppercase text-center -mt-20 font-bold pe-32 text-white">
              Fizza
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
