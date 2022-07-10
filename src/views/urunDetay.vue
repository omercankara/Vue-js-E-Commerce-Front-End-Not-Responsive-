<template>
    <div class="container ">
        <div class="row ">
            <div class="col-md-12">
                <div class="row justify-content-around">
                    <div class="col-md-7  d-flex py-4 " style="background-color: #fff;">
                        <div class="col-md-8">
                            <img :src="mySelected.productİmg" alt="">
                        </div>
                        <div class="col-md-4 d-flex flex-column  align-items-start ">
                            <span class=" mb-2  text-center">
                                <h3 class="bg-primary text-white">{{ mySelected.price }} TL</h3>
                            </span>
                            <P>{{ mySelected.name }}</P>
                            <button class="btn btn-primary w-100">Sepete Ekle</button>
                        </div>
                    </div>

                    <div class="col-md-4   d-flex justify-content-center bg-light">
                        <table class="table d-flex justify-content-center">
                            <tbody>
                                <thead>
                                    <tr>
                                        <th>Ürün Kodu</th>
                                        <th>Marka</th>
                                        <th>Mensei</th>
                                    </tr>
                                </thead>
                            <tbody>
                                <tr>
                                    <td>{{ mySelected.urunkodu }}</td>
                                    <td>{{ mySelected.marka }}</td>
                                    <td>{{ mySelected.mensei }}</td>
                                </tr>
                            </tbody>
                            </tbody>
                        </table>
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
        ...mapGetters(['getİtem']),
        mySelected() {
            let item = this.$store.getters.getİtem(this.$route.params.id)
            return item
        }
    },
}
</script>