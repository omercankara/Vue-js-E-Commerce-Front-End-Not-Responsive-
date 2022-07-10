<template>
    <div class="container-fluid">

        <div class="row">

            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
                aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Sepetinize Ekleyin</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="col-md-12 d-flex ">
                                <div class="col-md-4">
                                    <img :src="secilenUrun.productİmg" class="img-fluid" alt="">
                                </div>
                                <div class="col-md-8   d-flex flex-column">
                                    <h6 class="text-center font-weight-bold">{{ secilenUrun.name }}</h6>
                                    <div class="col-md-6  d-flex p-0">
                                        <div class="col-md-2  d-flex justify-content-center align-items-center">
                                            <i @click="increasemodal(secilenUrun)" class='bx bxs-up-arrow'></i>
                                        </div>

                                        <div class="col-md-7 d-flex justify-content-start align-items-center ">
                                            <p class="mt-3"> {{ secilenUrun.count }} Adet</p>
                                        </div>
                                        <div class="col-md-2  d-flex justify-content-center align-items-center">
                                            <i class='bx bxs-down-arrow' @click="decreasemodal(secilenUrun)"></i>
                                        </div>
                                        <div
                                            class="col-md-12 d-flex flex-column justify-content-end  align-items-center">
                                            <p class="mt-3">Toplam Fiyat</p>
                                            <p>{{ secilenUrun.totalCount }} TL</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Kapat</button>
                            <button type="button" data-dismiss="modal" class="btn btn-success w-25" @click="addBall(secilenUrun)">Sepete
                                Ekle</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {

    props: {
        secilenUrun: {
            required: true
        }
    },
    methods: {
        increasemodal(e) {
            this.$store.commit('increasemodal', e)
        },
        decreasemodal(e) {
            this.$store.commit("decreasemodal", e)
        },
        addBall(e) {
            console.log(e)
            this.$store.commit("addBall", e)
        },

        updateBall(e){
            this.$store.commit('updateBall', e)
        },
        downBall(e){
            this.$store.commit('downBall', e)
        }
    }
}
</script>