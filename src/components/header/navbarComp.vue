<template>
    <div class="container mb-4 ">
        <div class="row  bg-warning">
            <div class="col-12 col-md-12   py-3">
                <div class="row ">
                    <div class="col-4 col-md-1  col-lg-1 text-center  text-primary p-0">
                        <img style="cursor: pointer;" @click="goHome" src="../../assets/icon.png" class="img-fluid" alt="">
                    </div>

                    <div
                        class="col-4 col-md-5  col-lg-7   position-relative    p-0 d-flex justify-content-center align-items-center">

                        <div class="col-lg-5  mt-1-flex flex-column  align-items-end justify-content-start">
                            <div class="col-md-10 bg-success p-0">
                                <button class="btn btn-primary w-100  " @mouseover="upHere = true"><span
                                        class="float-left"><i
                                            class='bx bxs-purchase-tag-alt'></i></span>Kategoriler</button>
                            </div>
                            <div class="col-md-8 p-0 position-absolute " style="z-index: 999;" v-if="upHere">
                                <ul class="list-group" @mouseleave="upHere = false">
                                    <li v-for="(nav, index) in navİtem" :key="index" class="list-group-item">{{ nav }}
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <input type="text" placeholder="Ürün Arayın" v-model="searchTerm" class="w-50 form-control">
                    </div>

                    <div class="col-4  col-md-3 col-lg-4   d-flex justify-content-around align-items-center ">
                        <!--Mobilde justify start yap-->
                        <i style='color:#03624d; font-size: 30px ;' class='bx bx-user mr-'></i>
                        <p class="mt-3"> Giriş Yap</p>

                        <i class='bx bxs-gift ' style='color:#03624d; font-size: 35px ;'></i>
                        <p class=" mt-3 ">Kampanyalar</p>

                        <i class='bx bx-cart-download' @click="sepet" style='color:#03624d; font-size: 35px ; cursor: pointer;'></i>
                    </div>


                    <div class="col-md-12  col-lg-12    d-flex justify-content-center position-relative">
                        <div class="col-md-5 col-lg-4  p-0 position-absolute bg-light" v-if="isVisible"
                            style="z-index: 999 !important;">
                            <ul>
                                <li @click="routerTo(veri)" class="d-flex justify-content-start mb-3 ml-2"
                                    v-for="(veri, index) in filtered" :key="index">
                                    <img :src="veri.productİmg" style="width:35px !important;" alt="">
                                    <p class="ml-3"> {{ veri.name }}</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

            </div>
        </div>

    </div>

</template>



<script>
import { mapGetters } from 'vuex'
export default {

    computed: {
        ...mapGetters([
            'getProduct',
        ]),

        filtered() {
            return this.getProduct.filter((element) => {
                const searchData = element.name.toLowerCase().includes(this.searchTerm.toLowerCase())
                return searchData
            })
        },
    },
    methods: {
        routerTo(e) {
            this.$router.push(`/urundetay/${e.id}`)
            //console.log(e)
            //console.log(e)
        },

        sepet() {
            this.$router.push("/sepet")
        },
        goHome(){
                 this.$router.push("/")
        }

    },

    data() {
        return {
            searchTerm: null,
            isVisible: null,
            upHere: null,
            navİtem: ["Meyve Sebze", "Et Tavuk", "Süt Ürünleri", "Kahvaltılık", "Ekmek & Pastane", "Dondurulmuş Ürünler", "Yemeklik Malzemele", "Atıştırmalık", "İçecek", "Kişisel Bakim"]
        }
    },

    watch: {
        searchTerm(value) {
            if (value.length > 0) {
                this.isVisible = true
            } else {
                this.isVisible = false
            }
            console.log(this.isVisible)

        }
    }
}






</script>
