export const increasemodal = ((state, e) => {
    const id = state.indirimliUrunler.indexOf(e)
    state.indirimliUrunler[id].count++
    state.indirimliUrunler[id].totalCount = state.indirimliUrunler[id].price * e.count
    console.log(id)
})

export const decreasemodal = ((state, e) => {
    const id = state.indirimliUrunler.indexOf(e)
    state.indirimliUrunler[id].totalCount = state.indirimliUrunler[id].price * e.count - state.indirimliUrunler[id].price
    state.indirimliUrunler[id].count--
    console.log(e)

    const count = state.indirimliUrunler[id].count
    if (count < 1) {
        state.indirimliUrunler[id].count = 1
        state.indirimliUrunler[id].totalCount = state.indirimliUrunler[id].price * e.count
    }
})

export const addBall = ((state, data) => {
    const item = state.selectedİtem.findIndex(x => x.id == data.id)
    if (item === -1) {
        state.selectedİtem.push(data)
    }
})

export const removeİtem = ((state,e)=>{
    state.selectedİtem = state.selectedİtem.filter(element => element.id != e )
})

export const increaseBallCount = ((state,e)=>{
    const id = state.selectedİtem.indexOf(e)
    console.log(id)
    state.selectedİtem[id].count++
    state.selectedİtem[id].totalCount = state.selectedİtem[id].price * e.count
})

export const decreaseBallCount = ((state,e)=>{
    const id = state.selectedİtem.indexOf(e)
    console.log(id)
    state.selectedİtem[id].count--
    state.selectedİtem[id].totalCount = state.selectedİtem[id].price * e.count 
    
    
    const count = state.selectedİtem[id].count
    if(count < 1) {
        state.selectedİtem[id].count = 0
        state.selectedİtem[id].totalCount = state.selectedİtem[id].price * e.count
    }
})

