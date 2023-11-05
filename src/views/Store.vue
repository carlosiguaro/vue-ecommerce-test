<template>
    <main>
      <header>
        <div>
            <img src="/assets/icons/store.svg" alt="store icon" height="39" />
            <Button icon="pi pi-shopping-cart" severity="cart" rounded outlined aria-label="Favorite" @click="toggleShowShoppingCart" />
        </div>
        <div>
            <img src="/assets/icons/vite.svg" alt="vite icon" height="20" />
            <img src="/assets/icons/vue.svg" alt="vue icon" height="20" />
            <img src="/assets/icons/primevue.svg" alt="primevue icon" height="20" />
            <img src="/assets/icons/vuex.svg" alt="primevue icon" height="20" />
        </div>
      </header>
      <section>
        <div class="product-container">
            <div>
                <LoaderCategories v-if="!data" />
                <Categories :products="data" :fnFilter="filterProduct" :fnClearCategory="clearCategory" v-if="data" />
            </div>
            <div>
                <LoaderProductTable v-if="!data" />
                <ProductsTable :products="data" v-if="data" />
            </div>
        </div>

      </section>
      <ShoppingCart :fnToggleShowShoppingCart="toggleShowShoppingCart" v-if="showShoppingCart" />
    </main>
  </template>
  
<script setup>
import { ref, onMounted } from 'vue';
import Button from 'primevue/button';

const data = ref(null);
const initData = ref(null);
const showShoppingCart = ref(false);


onMounted(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(products => {  
        data.value = products;
        initData.value = products;
    }).catch(error => {
        console.error("Error al realizar la llamada AJAX:", error);
    });
});

const filterProduct = (category) => {
    const filtered = initData.value.filter(product => product.category == category);
    data.value = filtered;
}

const clearCategory = () => data.value = initData.value;

const toggleShowShoppingCart = ()=> showShoppingCart.value = !showShoppingCart.value;
</script>
  
<style scoped lang="scss">
@import "./store.scss";
</style>