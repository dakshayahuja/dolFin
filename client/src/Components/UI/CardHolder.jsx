import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "../../Styles/card.css";

const CardHolder = (props) => {
  if (!props.data) {
    return null;
  }
 
  return (
    <div className="container mt-4">
      <h4>{props.title}</h4>
      <Swiper
        slidesPerView={5}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div>
          {props.data.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <Card
                  title={data.title}
                  prices={data.prices}
                  imgUrl={data.img}
                  ticker = {data.ticker}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default CardHolder;
