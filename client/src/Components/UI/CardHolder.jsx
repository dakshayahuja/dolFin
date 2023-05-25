import "swiper/css";
import Card from "./Card";
import "../../Styles/card.css";
import { Swiper, SwiperSlide } from "swiper/react";
const CardHolder = (props) => {
  if (!props.data) {
    return null;
  }
  return (
    <div className="mt-4 ms-5">
      <h4>{props.title}</h4>
      <Swiper slidesPerView={5}>
        <div>
          {props.data.map((data) => {
            return (
              <SwiperSlide key={data.id} className="mx-2 mx-xl-0">
                <Card
                  title={data.title}
                  prices={data.prices}
                  change={data.change}
                  pChange={data.pChange}
                  imgUrl={data.img}
                  ticker={data.widget_ticker}
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