
<template>
    <div class="table-container">
        <DataTable :value="products">
            <template #header>
                <SearchBar :fnSearchProduct="searchProduct" />
            </template>
            <template #empty>Producto no encontrado</template>
            <Column field="title" header="Nombre"></Column>
            <Column header="Image">
                <template #body="slotProps">
                    <img :src="`${slotProps.data.image}`" :alt="slotProps.data.image" class="w-6rem shadow-2 border-round" />
                </template>
            </Column>
            <Column field="price" header="Precio">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="rating" header="Reseñas">
                <template #body="slotProps">
                    <Rating  :modelValue="slotProps.data.rating.rate" readonly :cancel="false" />
                </template>
            </Column>
            <Column field="category" header="Categoria"></Column>
            <Column header="">
                <template #body="slotProps">
                    <Button @click="$event => addToCart(slotProps.data)" label="Add" icon="pi pi-cart-plus" />
                </template>
            </Column>
            <template #footer>Total de {{ products ? products.length : 0 }} productos. </template>
        </DataTable>
    </div>
    <Toast />
</template>

<script setup>
    import { ref, defineProps, onMounted, watch } from 'vue';
    import { useStore } from 'vuex';
    import Button from 'primevue/button';
    import DataTable from 'primevue/datatable';
    import Column from 'primevue/column';
    import Rating from 'primevue/rating';
    import Toast from 'primevue/toast';
    import { useToast } from "primevue/usetoast";

    const store = useStore();
    const products = ref(null);
    const props = defineProps({
        products: Array,
    });
    const toast = useToast();

    onMounted(() => {
        products.value = props.products;
    });

    watch(() => props.products,
        (newProducts, prevProducts) => {
            products.value = newProducts;
        }
    );

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const searchProduct = ($event) => {
        const match = props.products.filter(product => product.title.toLowerCase().includes($event.target.value));
        products.value = match;
    }

    const addToCart = (favProduct) => {
        store.dispatch("cart/addToCart", favProduct);
        toast.add({ severity: 'success', summary: 'Carrito de Compra', detail: 'Producto Agregado', life: 3000 });
    }
</script>

<style scoped lang="scss">
 div.table-container{
    padding: 1rem;
    box-sizing: border-box;
    background-color: #FFFFFF;
    border-radius: .8rem;
    overflow-y: hidden;
    overflow-x: auto;
 }
</style>
