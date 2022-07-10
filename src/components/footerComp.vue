<template>
    <div class="container-fluid">
        <div class="row bg-light mt-5">
            <div class="col-md-12 d-flex footer-container     justify-content-around ">

                <div class="col-md-3 d-flex flex-column align-items-center ">
                    <h3 class="footerTitle">App'i İndirin</h3>
                    <img class="img-fluid mt-2 " src="../assets/banner/appstore.svg">
                    <img class="img-fluid mt-2 " src="../assets/banner/google.svg">

                </div>


                <div class="col-md-2  discover-content   d-flex flex-column  align-items-end  justify-content-end ">
                    <div class="col-md-12 ">
                        <h4 class="text-left footerTitle">App'i Keşfedin</h4>
                        <p class="text-left">Hakkımızda</p>
                        <p class="text-left">Kariyer</p>
                        <p class="text-left">Teknoloji Kariyerleri</p>
                        <p class="text-left">İletişim</p>
                        <p class="text-left">COVID-19 Duyuru</p>
                        <p class="text-left">Sosyal Sorumluluk Projeleri</p>
                    </div>
                </div>

                <div class="col-md-2      d-flex flex-column  align-items-center ">
                    <div class="col-md-12">
                        <h4 class="text-left footerTitle">Yardım</h4>
                        <p class="text-left">Sıkça Sorulan Sorular</p>
                        <p class="text-left">Kişisel Verilerin Korunması</p>
                        <p class="text-left">Gizlilik Politikası</p>
                        <p class="text-left">Kullanım Koşulları</p>
                        <p class="text-left">COVID-19 Duyuru</p>
                        <p class="text-left">Çerez Politikası</p>
                    </div>
                </div>
                <div class="col-md-2      d-flex flex-column  align-items-center ">
                    <div class="col-md-12">
                        <h4 class="footerTitle">İş ortaklığı</h4>
                        <p>Bayimiz Olun</p>
                        <p>Deponuzu Kiralayın</p>
                        <p>GetirYemek Restoranı Olun</p>
                        <p>GetirÇarşı İşletmesi Olun</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>












.footerTitle {
        color: #5B3DB9;
}

.responsiveİmg{
        max-width: 80px !important;
}


@media screen and (max-width:430px) {
        /* 430 PX DEN KÜÇÜK CİHAZLAR İÇİN UYGULA*/

       

        .footer-container {
                display: flex;
                flex-direction: column;
        }

        .discover-content {
                display: flex;
                flex-direction: column !important;
                justify-content: center !important;

                align-items: center !important;
        }



}


@media screen and (min-width:500px) and (max-width:896px) {

        /*500 Den büyük 896 den küçük // 500 896 arası cihazlar*/
       
        .footer-container {
                display: flex;
                flex-direction: row !important;
                justify-content: around !important;

        }

        .discover-content {
                display: flex;
                flex-direction: column !important;
                justify-content: center !important;
                align-items: center !important;
        }

  

     

      


}


</style>