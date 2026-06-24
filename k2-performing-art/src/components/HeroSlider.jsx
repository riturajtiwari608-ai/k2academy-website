import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";

const slides = [
  {
    image: slide1,
    title: "Discipline Creates Champions",
    text: "Consistency, focus and dedication build a strong future.",
  },
  {
    image: slide2,
    title: "Dance With Passion",
    text: "Every step tells a story. Every movement builds confidence.",
  },
  {
    image: slide3,
    title: "Karate Builds Strength",
    text: "Learn discipline, courage, self-defence and inner power.",
  },
];

function HeroSlider() {
  return (
    <section id="top" className="hero">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3500 }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="overlay"></div>

              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span>K2 Performing Art Academy</span>
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
                <a href="#course" className="hero-btn">
                  Explore Courses
                </a>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;