<template>
    <div class="categories-container">
        <Chip 
            v-if="category"
            :label="category"
            @remove="$event => clearCategory()" 
            removable
            class="mb-4"
        />
        <h4>Categorias</h4>
        <ul v-if="categories">
            <li v-for="_category in categories">
                <a href="#" @click="setCategory(_category.label)">{{ _category.label }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue';
import Chip from 'primevue/chip';

const categories = ref(null);
const category = ref(null);
const props = defineProps({
    products: Array,
    fnFilter: Function,
    fnClearCategory: Function
});

onMounted(() => {
    const listCategories = []; 
    props.products.forEach(product => {
        const match = listCategories.find((category) => category.label == product.category);
        if (!match) listCategories.push({
            label: product.category
        })
    });
    categories.value = listCategories;
});

const setCategory = (def) => {
    category.value = def;
    props.fnFilter(def);
}

const clearCategory = () => {
    category.value = null;
    props.fnClearCategory();
}

</script>

<style scoped lang="scss">
$black: #474343;
div.categories-container{
    min-width: 200px;   
    h4{
        color: $black;
        margin-bottom: .5rem;
    }
    ul {
        margin: 0;
        padding: 0;
        li {
            padding: 0;
            list-style: none;
            a{
                box-sizing: border-box;
                padding: 0.5rem 0 0.5rem 0.5rem;
                display: block;
                text-decoration: none;
                color: $black;
                font-size: 0.95rem;
            }
        }
    }
}
@media screen and (max-width: 1070px) {
    div.categories-container{
        padding: 1rem 2rem;
        box-sizing: border-box;
        ul {
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
    }
}
</style>