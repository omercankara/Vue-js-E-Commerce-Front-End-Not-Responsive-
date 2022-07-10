<template>
    <div class="container-fluid bg-light">
        <div class="container">
            <div class="row mb-3">
                <h5 class="font-weight-bold mt-2 ">Bunları Kaçırmayın</h5>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <swiper :slidesPerView="1" :spaceBetween="10" :breakpoints="{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }" :modules="modules" class="mySwiper">

                    <swiper-slide class="py-2" v-for="(urun, index) in urunler" :key="index">
                        <div class="add-item mt-2">
                            <i data-toggle="modal" @click="selectedProduct(urun)" data-target="#exampleModalLong"
                                class='bx bx-plus-medical'></i>
                        </div>

                        <div class="mainPanel" @click="routerTo(urun)">
                            <div class="image-content "><img :src="urun.productİmg" class="img-fluid w-50 " alt="" />
                            </div>

                            <div class="detail-content">
                                <p>{{ urun.name }}</p>
                                <div class="product-price">
                                    <p class="old-price">25 TL</p>
                                    <span class=" text-white">
                                        <p class="bg-warning">{{ urun.price }} TL</p>
                                    </span>

                                </div>
                            </div>



                        </div>
                        
                    </swiper-slide>
                </swiper>
                <modal :secilenUrun="secilenUrun" />
            </div>
        </div>
    </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
// import required modules
import { Pagination } from "swiper";

/* */
import modal from "../components/modalComp.vue"


export default {
    components: {
        Swiper,
        SwiperSlide,
        modal
    },

    data() {
        return {
            urunler: [],
            secilenUrun: []
        }
    },
    props: {
        gelenurunler: {
            required: true
        }
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
    mounted() {
        this.urunler = this.gelenurunler
        //console.log(this.urunler)
    },
    methods: {
        selectedProduct(product) {
            this.secilenUrun = product
            //console.log(this.secilenUrun)

        },
        routerTo(e) {
            this.$router.push(`/urundetay/${e.id}`)
            //console.log(e)
        }
    }
};
</script>


<style scoped>
.mainPanel {
    width: 100% !important;
    height: 100px !important;
    display: flex;
    position: relative;
    justify-content: center !important;
    flex-direction: row;

}

.add-item {
    position: absolute;
    top: -10px;
    right: 0px;
    color: green;
}

.image-content {
    width: 40.5% !important;
    height: 100%;

}

.detail-content {
    width: 50%;
    /* background-color: red; */
    height: 100%;
    font-size: 15px !important;

}

.product-price {
    width: 100% !important;
    height: 50px;
    display: flex;
    flex-direction: row !important;
    justify-content: space-around;

}


.old-price {
    text-decoration: line-through !important;
    font-size: 15px !important;
}



@media only screen and (min-width:640px) and (max-width:896px) {
    .swiper-slide {
        width: 300px !important;
    }

    .detail-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .product-price {
        display: flex !important;
        height: 35px !important;
        flex-direction: row !important;
        justify-content: space-around !important;
        align-items: flex-start !important;
    }

    .old-price {
        text-decoration: line-through !important;
        font-size: 15px !important;
    }
}
</style>