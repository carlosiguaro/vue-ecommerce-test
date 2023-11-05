<template>
    <div>
        <span class="p-input-icon-left w-full">
            <i class="pi pi-search" />
            <InputText 
                @input="searchProduct" 
                class="w-full" 
                placeholder="Buscar Producto" 
            />
        </span>
    </div>
</template>
<script setup>  
    import InputText from 'primevue/inputtext';
    import { defineProps } from 'vue';

    const props = defineProps({
        fnSearchProduct: Function,
    });

    const searchProduct = ($event) => props.fnSearchProduct($event);
</script>