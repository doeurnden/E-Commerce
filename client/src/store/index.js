
import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
  state : {
    sideBarState: false,
    cart:[
      {
        image:"image/homePage/t4.png",
        name:"T1-Shirt",
        price:10
      },
      {
        image:"image/homePage/t4.png",
        name:"T1-Shirt",
        price:10
      },
      {
        image:"image/homePage/t4.png",
        name:"T1-Shirt",
        price:10
      },
      {
        image:"image/homePage/t4.png",
        name:"T1-Shirt",
        price:10
      }
    ]
  },
  mutations: {
    addItem(state,item){
      state.cart.push(item)
    }
  },
  actions:{
    
  }
})
