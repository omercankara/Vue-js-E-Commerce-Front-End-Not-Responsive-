<template>
    <div>
        <slider/>
        <indirimSlider :gelenurunler="getProduct" class="mb-4" />
        <kategori />
        <cokSatanlar :coksatanlar="getOverselling" />
        <banner />
    </div>
</template>

<script>
import slider from "../components/sliderComp.vue"
import indirimSlider from "./discountedProduct.vue"
import kategori from "./categoriesComp.vue"
import cokSatanlar from "./overSelling.vue"
import banner from "../components/bannerComp.vue"
import { mapGetters } from "vuex";
export default {
    components: {
        slider,
        indirimSlider,
        cokSatanlar,
        kategori,
        banner,

    },
    mounted(){
        //console.log(this.getOverselling)
    },  
    computed: {
        ...mapGetters([
            'getProduct',
            'getOverselling'
        ])
    },
}
</script>