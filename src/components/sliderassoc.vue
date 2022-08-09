<template>
  <swiper
      :centeredSlides="true"
      :grabCursor="true"
      :modules="modules"
      class="mySwiper"
      :breakpoints="swiperOptions.breakpoints"
  >

    <swiper-slide>
      <div class="card">
      <img src="~@/assets/associations/assoc1.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h1 class="card-title text-center">Association Marocaine </h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
     </div>
    </swiper-slide>
    <swiper-slide width="300px">
      <div class="card">
      <img src="~@/assets/associations/assoc1.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h1 class="card-title text-center">Fédération marocaine </h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide>
      <div class="card">
      <img src="~@/assets/associations/assoc2.png" class="card-img-top" alt="..." >
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide><div class="card">
      <img src="~@/assets/associations/assoc3.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide><div class="card">
      <img src="~@/assets/associations/assoc2.png" class="card-img-top" alt="..." >
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide><div class="card">
      <img src="~@/assets/associations/assoc1.png" class="card-img-top" alt="..." height="100PX"  >
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide><div class="card">
      <img src="~@/assets/associations/assoc2.png" class="card-img-top" alt="..."  height="100PX" >
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide><div class="card">
      <img src="~@/assets/associations/assoc1.png" class="card-img-top" alt="..." height="100PX" >
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
          <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
    <swiper-slide><div class="card">
      <img src="~@/assets/associations/assoc3.jpg" class="card-img-top" alt="..." height="100PX"  >
      <div class="card-body">
        <h1 class="card-title text-center">Card title</h1>
        <br>
        <div class="col text-center">
        <button type="button" class="btn btn-dark">Plus Détails</button>
        </div>
      </div>
    </div></swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
export default {
  name: `sliderassoc`,
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data(){
    return {
      swiperOptions: {
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 50
          },

          771: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }
      }
    }
  },
}
</script>

<style scoped>
swiper {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
img.card-img-top {
  height: 100PX;
  width: 100px;
  margin: auto;
}
button{
  border-radius: 20px;
}
h1{
  font-weight: bold;
  font-size: 20px;
  color: black;

}

</style>