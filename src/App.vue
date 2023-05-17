<template>
    <router-view />
</template>

<script>
import './assets/main.css'
import ProductList from './components/ProductsList.vue'
import ProductDetail from './components/ProductDetail.vue'
import Checkout from './components/Checkout.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    ProductDetail,
    Checkout
  },
  mounted() {
    console.log('App mounted')
  }
}
</script>

<style>
  #app{
    display:flex;
    flex-direction: column;
    color: rgb(252, 49, 49);
    width: 50%;
  }
  
  button{
    margin: 5px 0;
    padding: .2rem .3rem;
    border: 1px solid #7169e2;
    border-radius: 8px;
    background-color: #7169e2;
    color: white;
  }

  button:hover{
    border-radius: 8px;
    background-color: transparent;
    color: white;
  }
</style>
