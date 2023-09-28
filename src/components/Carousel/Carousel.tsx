import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface CarouselProps {
  titleFontSize: number;
  title: string;
  items: ReactNode[];
}

export default function Carousel({
  titleFontSize = 16,
  title,
  items,
}: CarouselProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title} style={{ fontSize: titleFontSize }}>
        {title}
      </h3>
      <Swiper
        loop
        slidesPerView={5}
        breakpoints={{
          1600: {
            slidesPerView: 5,
          },
          1320: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          0: {
            slidesPerView: 1,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item?.toString()}>{item}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
