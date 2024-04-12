<script>
    export default {
        name: 'store_card',
        props: {
            product: {
                type: Object,
                required: false,
            },
        },
    };
</script>
<template>
    <div class="product-section_item">
        <img :src="product.image" class="product-section_image">
        <h3 class="product-section_item-title">{{ product.name }}</h3>
        <p class="product-section_item-description">{{ product.description }}</p>
        <span class="product-section_item-price">Цена: {{ product.price }}$</span>
    </div>
</template>
<style></style>