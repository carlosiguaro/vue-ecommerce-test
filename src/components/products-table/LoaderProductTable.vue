<template>
    <div>
        <Skeleton width="5rem" height="2rem" class="mb-2 w-full"></Skeleton>
        <div class="flex w-full justify-content-between">
            <Skeleton v-for="i in 5" width="18%" height="1.5rem" class="mb-2"></Skeleton>
        </div>
        <div class="flex w-full justify-content-between"  v-for="i in 5">
            <Skeleton v-for="i in 5" width="18%" height="5rem" class="mb-2"></Skeleton>
        </div>
    </div>
</template>
<script setup>
import Skeleton from 'primevue/skeleton';
</script>