import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import PropTypes from "prop-types"

export default function Slider({ spaceBetween, slidesPerView, items, render, ...props }) {
  return (
    <Swiper
      {...props}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className="pb-12"
      modules={[Pagination]}
      pagination={{
        clickable: true,
        dynamicBullets: true
      }}
    >
      {items.map((item, key) => (
        <SwiperSlide key={key}>
          {render(item, key)}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

Slider.propTypes = {
  spaceBetween: PropTypes.number,
  slidesPerView: PropTypes.number,
  items: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
  props: PropTypes.object
}

Slider.defaultProps = {
  spaceBetween: 30,
  slidesPerView: 1
}
