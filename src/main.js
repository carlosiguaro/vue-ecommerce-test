import { createApp } from 'vue'
import './style.css';
import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import PrimeVue from 'primevue/config';
import Categories from './components/categories/Categories.vue';
import LoaderCategories from "./components/categories/LoaderCategories.vue"
import ProductsTable from './components/products-table/ProductsTable.vue';
import LoaderProductTable from "./components/products-table/LoaderProductTable.vue"
import SearchBar from './components/search-bar/SearchBar.vue';
import StoreComponent from './views/Store.vue';
import ShoppingCart from './components/shopping-cart/ShoppingCart.vue';
import ToastService from 'primevue/toastservice';

import App from './App.vue'
import store from './store';

const app = createApp(App);
app.use(PrimeVue);
app.use(ToastService);

app.component('Store', StoreComponent);
app.component('SearchBar', SearchBar);
app.component('Categories', Categories);
app.component('LoaderCategories', LoaderCategories);
app.component('ProductsTable', ProductsTable);
app.component('LoaderProductTable', LoaderProductTable);
app.component('ShoppingCart', ShoppingCart);
app.use(store);
app.mount('#app');