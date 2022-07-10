export const getProduct = ((state) => {
    return state.indirimliUrunler
})

export const getOverselling = ((state) => {
    return state.coksatanlar
})

export const totalBalance = ((state)=>{
    let total=null
    state.selectedİtem.forEach(element=>{
        total+=element.totalCount
    })
    return total
})

export const getBall = ((state)=>{
    return state.selectedİtem
})

export const getİtem = (state) => (id) => {
    return state.indirimliUrunler.find((item) => item.id == id)
}






