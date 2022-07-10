<template>
    <div class="container mb-4 p-0">

        <swiper :autoplay="{
            delay: 1000,
            disableOnInteraction: false,
        }" :pagination="true" :modules="modules" class="mySwiper">
            <swiper-slide> <img src="../assets/img/2.jpg" /> </swiper-slide>
            <swiper-slide> <img src="../assets/img/3.jpg" /> </swiper-slide>
        </swiper>
    </div>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Autoplay],
        };
    },
};
</script>

