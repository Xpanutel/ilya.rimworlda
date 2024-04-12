<script>
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue'
import store_card from '@/components/store_card.vue'

export default {
    name: 'Products',
    components: {
        Header,
        Footer,
        store_card
    },
    data() {
        return {
            store: [
                {id: 1, image: '../assets/product1.png', name: "Костюм Песочника", description: 'Описание товара 1', price: 10 },
                {id: 2, image: '../assets/product2.jpg', name: "Костюм Кролика", description: 'Описание товара 2', price: 10 },
                {id: 3, image: '../assets/product3.jpg', name: "Костюм Санты", description: 'Описание товара 3', price: 10 },
                {id: 4, image: '../assets/product4.jpg', name: "Бумеранги Кролика", description: 'Описание товара 4', price: 10 },
                {id: 5, image: '../assets/product5.jpg', name: "Посох Джека", description: 'Описание товара 5', price: 10 },
                {id: 6, image: '../assets/product6.jpg', name: "Набор Песочника", description: 'Описание товара 6', price: 10 }
            ],
        }
    },
}
</script>
<template>
    <Header />
    <section class="product-section">
        <div class="product-section_header">
            <h2 class="product-section_title">Лучшие предложения</h2>
            <p class="product-section_description">Узнайте о наших актуальных предложениях</p>
        </div>
        <div class="product-section_content">
            <store_card v-for="product in store" :key="product.id" :product="product" />
        </div>
    </section>
    <Footer />
</template>
<style>
    .product-section_content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 50px;
    }
    .product-section_header {
        text-align: center;
        margin-bottom: 25px;
    }
    .product-section_content img {
        border-radius: 25px;
        width: 80%;
        margin-top: 25px;
    }
    .product-section_item {
        text-align: center;
        border: 1px solid;
        border-radius: 25px;
        box-shadow: 0 0 24px #fff;
        transition: all .3s !important;
        margin-bottom: 25px;
    }
    .product-section_item:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
</style>