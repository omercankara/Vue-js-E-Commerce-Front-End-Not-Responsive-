<template>
    <div class="container mx-auto ">
        <div class="row">
            <div class="col-md-12 px-5 py-5 " style="background-color:#DEF1F1 !important; border-radius: 5vh;">
                <div class="row">
                    <div class="col-md-12">Overselling Product</div>
                </div>
                <div class="row justify-content-center align-items-center">

                    <div class="col-6 col-md-4 mb-3  " v-for="(coksatanlar,index) in overselling" :key="index">
                        <div class="card  ">

                            <div class="card-body d-flex flex-column  align-items-center">
                                <img :src="coksatanlar.productİmg" class="img-fluid" alt="">
                                <div class="col-md-12 text-center mt-2">{{coksatanlar.name}}</div>
                            </div>
                            <div class="card-footer d-flex flex-column p-0">
                               
                                
                                <div class="col-12   d-flex flex-column p-0 col-md-12">

                                     <div class="col-md-5 d-flex justify-content-center   p-0 mt-1 ml-1">$24</div>

                                    <div class="row   d-flex  justify-content-center mt-2">
                                        <div class="col-1 col-md-2 "><span class="border border-dark px-2 d-flex justify-content-center align-items-center">-</span></div>
                                        <div class="col-1 col-md-3  d-flex justify-content-center">1</div>
                                        <div class="col-1 col-md-2"><span class="border border-dark px-2 d-flex justify-content-center align-items-center">+</span></div>
                                        <div class="col-1 col-md-1"><i class='bx bx-cart-download' style="font-size: 25px; color:green"></i></div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>

         





                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
       coksatanlar:{
            required:true
       }
    },
    data(){
        return{
            overselling:[]
        }
    },
    mounted(){
        this.overselling = this.coksatanlar
        //console.log(this.overselling)
    }
}
</script>