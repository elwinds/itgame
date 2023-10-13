import { useRef } from "react";
import { SKILLS_MOCK } from "../Skills.mock";
import classes from "./SkillsList.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import SkillCard from "../SkillCard/SkillCard";
import { ArrowCircleIcon } from "../../ui/icons/ArrowCircle";

const BREACK_POINTS = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  450: {
    slidesPerView: 1.5,
    spaceBetween: 20,
  },
  520: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  600: {
    slidesPerView: 2.3,
    spaceBetween: 20,
  },
  700: {
    slidesPerView: 2.6,
    spaceBetween: 20,
  },
  800: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  900: {
    slidesPerView: 3.3,
    spaceBetween: 20,
  },
  1000: {
    slidesPerView: 3.5,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 4.7,
    spaceBetween: 20,
  },
};

const SkillsList = () => {
  const swiperRef = useRef<any>(null);

  const swiperNext = () => {
    swiperRef?.current?.swiper.slideNext();
  };

  const swiperPrev = () => {
    swiperRef?.current?.swiper.slidePrev();
  };
  return (
    <div className={classes.container}>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        breakpoints={BREACK_POINTS}
        className={classes.swiperMY}
        loop={true}
      >
        {SKILLS_MOCK.map((skill) => {
          return (
            <SwiperSlide key={skill.title}>
              <SkillCard skill={skill}></SkillCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={classes.navigationBtns}>
        <button
          onClick={() => swiperPrev()}
          className={classes.navigationBtns__prev}
        >
          <ArrowCircleIcon />
        </button>
        <button
          onClick={() => swiperNext()}
          className={classes.navigationBtns__next}
        >
          <ArrowCircleIcon />
        </button>
      </div>
    </div>
  );
};

export default SkillsList;
