import BannarImg1 from "../../images/saint-martin.jpg";
import BannarImg2 from "../../images/thailand.jpg";
import BannarImg3 from "../../images/bangkokjpg.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, EffectFade } from "swiper/modules";

const Bannar = () => {
  return (
    <Swiper
      effect={"fade"}
      fadeEffect={{ crossFade: true }}
      slidesPerView={1}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${BannarImg1})` }}>
          <div className="hero-overlay bg-opacity-45 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-full">
              <h1 className="mb-5 w-full text-5xl font-bold">Explore the World with Us</h1>
              <p className="mb-5">Explore breathtaking destinations, immerse yourself in diverse cultures, and create unforgettable memories.</p>
              <button className="btn dark:bg-violet-600 bg-slate-900 text-white border-none">Discover Deals</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `url(${BannarImg2})` }}>
          <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-full">
              <h1 className="mb-5 w-full text-5xl font-bold">Explore the World with Us</h1>
              <p className="mb-5">Explore breathtaking destinations, immerse yourself in diverse cultures, and create unforgettable memories.</p>
              <button className="btn dark:bg-violet-600 bg-slate-900 text-white border-none">Discover Deals</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="hero min-h-screen rounded-xl" style={{ backgroundImage: `url(${BannarImg3})` }}>
          <div className="hero-overlay bg-opacity-50 rounded-xl"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="w-full">
              <h1 className="mb-5 w-full text-5xl font-bold">Explore the World with Us</h1>
              <p className="mb-5">Explore breathtaking destinations, immerse yourself in diverse cultures, and create unforgettable memories.</p>
              <button className="btn dark:bg-violet-600 bg-slate-900 text-white border-none">Discover Deals</button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
 
export default Bannar;
