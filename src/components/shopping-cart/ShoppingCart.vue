<template>
    <div class="shopping-cart-container">
        <div>
            <header>
                <i class="pi pi-shopping-cart"></i>
                <h3>Carrito de Compras</h3>
                <button @click="props.fnToggleShowShoppingCart">
                    <i class="pi pi-times"></i>
                </button>
            </header>

            <section>
                <table border="1" v-if="cartItems.length">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in cartItems" :key="item.id">
                            <td>{{ item.title }}</td>
                            <td>
                                <img :src="`${item.image}`" width="60" alt="">
                            </td>
                            <td>{{ formatCurrency(item.price) }}</td>

                            <td>
                                <Button icon="pi pi-trash" severity="danger" @click="$event =>removeFromCart(index)" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            
                <div v-if="!cartItems.length">
                    <Message class="m-3 p-0" :closable="false">
                        <small>
                            No hay productos en el carrito de compra
                        </small>
                    </Message>
                </div>

            </section>
            <footer>
                <label>Total:</label>
                <label>{{ formatCurrency(cartTotal) }}</label>
            </footer>
        </div>
    </div>
    <Toast />
</template>
<script setup>
import { defineProps } from 'vue';
import Message from 'primevue/message';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const props = defineProps({
    fnToggleShowShoppingCart: Function,
});
const toast = useToast();

const cartTotal = computed(() => store.getters['cart/cartTotal']);
const cartItems = computed(() => store.state.cart.cartItems);

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

const removeFromCart = (id) => {
    store.dispatch("cart/removeFromCart", id);
    toast.add({ severity: 'info', summary: 'Carrito de Compra', detail: 'Producto removido', life: 3000 });

}
</script>

<style scoped lang="scss">
@import "./shopping-cart.scss";
</style>