import { createStore } from 'vuex'
import * as  getters from "./modules/getters"
import * as mutations from "./modules/mutations"
//import * as mutations from "./modules/mutations"

export const store = new createStore({
  state: {
    indirimliUrunler: [
      {
        id: 0,
        urunkodu: '30403564',
        marka: 'Finish',
        mensei: 'POLONYA',
        name: 'Finish Bulaşık Makine Temizleyici 250ML',
        count: 1,
        price: 10,
        totalCount: 10,
        productİmg: require("/src/assets/urunler/1.png")
      },
      {
        id: 1,
        urunkodu: '09050570',
        marka: 'SuperFresh',
        mensei: 'TÜRKİYE',
        name: 'SuperFresh Zeytinyağlı Ton Balığı',
        count: 1,
        price: 15,
        totalCount: 15,
        productİmg: require("/src/assets/urunler/4.jpg"),
      },
      {
        id: 2,
        urunkodu: '00093071',
        marka: 'Finish',
        mensei: 'POLONYA',
        name: 'Finish Ultimate Bulaşık Temizleyici 250ML',
        count: 1,
        price: 20,
        totalCount: 20,
        productİmg: require("/src/assets/urunler/3.png"),
      },
      {
        id: 3,
        urunkodu: '00065817',
        marka: 'Komili',
        mensei: 'Türkiye',
        name: 'Le Petit Marseilias Duş Jeli',
        count: 1,
        price: 25,
        totalCount: 25,
        productİmg: require("/src/assets/urunler/9.png"),
      },
      {
        id: 4,
        urunkodu: '08110030',
        marka: 'Red Bull',
        mensei: 'AVUSTURYA',
        name: 'Redbull Enerji İçeçeği 250ml',
        count: 1,
        price: 30,
        totalCount: 30,
        productİmg: require("/src/assets/urunler/5.jpg"),
      },
      {
        id: 5,
        urunkodu: '00047326',
        marka: 'Cif',
        mensei: 'Türkiye',
        name: 'Cif Sprey PowerShine Banyo 750ml',
        count: 1,
        price: 35,
        totalCount: 35,
        productİmg: require("/src/assets/urunler/7.jpg"),
      },
      {
        urunkodu: '000938326',
        marka: 'Cif',
        mensei: 'Türkiye',
        name: 'Cif Sprey PowerShine Mutfak 750ml',
        id: 6,
        count: 1,
        price: 40,
        totalCount: 40,
        productİmg: require("/src/assets/urunler/8.jpg"),
      },
    ],
    coksatanlar: [
      {
        id: 0,
        name: 'Bebek Bezi',
        count: 1,
        price: 10,
        totalCount: 10,
        productİmg: require("/src/assets/overselling/bebek.jpg"),
      },

      {
        id: 1,
        name: 'Et',
        count: 1,
        price: 10,
        totalCount: 10,
        productİmg: require("/src/assets/overselling/et.jpg"),
      },

      {
        id: 2,
        name: 'Güneş Kremi',
        count: 1,
        price: 10,
        totalCount: 10,
        productİmg: require("/src/assets/overselling/guneskrem.jpg"),
      },

      {
        id: 3,
        name: '1 Kg Kıyma',
        count: 1,
        price: 10,
        totalCount: 10,
        productİmg: require("/src/assets/overselling/kiyma.jpg"),
      },

      {
        id: 4,
        name: 'Tat Domates Salçası 710 g',
        count: 1,
        price: 10,
        totalCount: 10,
        productİmg: require("/src/assets/overselling/salca.jpg"),
      },

      {
        id: 5,
        name: 'Noname Süt',
        count: 1,
        price: 10,
        totalCount: 10,
        productİmg: require("/src/assets/overselling/süt.jpg"),
      },
      {
        id: 5,
        name: 'Noname Süt',
        count: 1,
        price: 10,
        totalCount: 10,
        productİmg: require("/src/assets/overselling/nescafe.jpg"),
      },
      {
        id: 5,
        name: 'Noname Süt',
        count: 1,
        price: 10,
        totalCount: 10,
        productİmg: require("/src/assets/overselling/sucuk.jpg"),
      },
      {
        id: 5,
        name: 'Noname Süt',
        count: 1,
        price: 10,
        totalCount: 10,
        productİmg: require("/src/assets/overselling/un.jpg"),
      },

    ],
    selectedİtem: []
  },
  getters,
  mutations,


})
