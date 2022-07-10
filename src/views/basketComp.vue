<template>
    <div class="container ">
        <div class="row  justify-content-around">
            <div class="col-md-8 " v-if="showBall">

                <div class="row" v-for=" i in getBall" :key="i">
                    <div class="col-md-3 d-flex justify-content-center align-items-center"> <i style="font-size:35px"
                            @click="removeData(i)" class='bx bx-trash'></i>
                    </div>

                    <div class="col-md-3">
                        <img :src="i.productİmg" class="img-fluid" alt="">
                    </div>

                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <h5 class="font-weight-bold">{{ i.totalCount }} TL</h5>
                    </div>

                    <div class="col-md-3 d-flex justify-content-center align-items-center">
                        <i style="font-size:25px;" @click="up(i)" class='bx bx-chevron-up-circle'></i>
                        <p style="font-weight:bold" class="mt-3 "> {{ i.count }} Adet </p>
                        <i class='bx bx-chevron-down-circle' @click="down(i)" style="font-size:25px;"></i>
                    </div>

                </div>

            </div>

            <div v-else class="col-md-8 py-5   alert alert-warning">
                <p>Henüz Sepetiniz de Ürün Bulunmamaktadır !</p>
            </div>

            <div class="col-md-4  p-0  ">
                <div class="card">
                    <div class="card-header ">

                        <h6 class="text-center">Seçilen Ürünler</h6>
                        <h6 class="text-center font-weight-bold"> {{ totalBalance }} TL</h6>
                        <button class="btn btn-warning w-100">Alışveriş Tamamla</button>
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
            'getBall', 'totalBalance',
        ]),

        showBall() {
            return this.getBall.length > 0 ? true : false
        }

    },

    mounted() {
        console.log(this.getProduct)
    },

    methods: {
        removeData(e) {
            this.$store.commit("removeİtem", e.id)
        },
        up(e) {
            this.$store.commit('increaseBallCount', e)
        },
        down(e) {
            this.$store.commit("decreaseBallCount", e)
        },
    }

}
</script>