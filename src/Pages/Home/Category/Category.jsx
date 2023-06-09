import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 10.00am to 8.00pm"}
                heading={"order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-10"
            >
                <SwiperSlide className="mb-16">
                    <img src={slide1} alt="" />
                    <h2 className="text-2xl text-center uppercase -mt-16 font-semibold  text-white">Salads</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className="text-2xl text-center text-white  uppercase -mt-16 font-semibold">Pizzas</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className="text-2xl text-white text-center uppercase -mt-16  font-semibold">Soups</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className="text-2xl text-white text-center uppercase -mt-16  font-semibold">desserts</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className="text-2xl text-white text-center uppercase -mt-16  font-semibold">Salads</h2>
                </SwiperSlide>



            </Swiper>
        </section>
    );
};

export default Category;