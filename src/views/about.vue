<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
    export default {
        name: 'About',
        components: {
            Header,
            Footer
        },
    }
</script>
<template>
    <Header/>
    <section>
		<div class="main-about-section">
		<h2>О магазине</h2>
			<p>Мы – интернет-магазин, занимающийся продажей различных товаров.
			<br>Наша команда работает с целью предложить вам широкий ассортимент качественных и надежных товаров по доступным ценам.
			<br>Мы стремимся удовлетворить потребности наших клиентов, предлагая высокий уровень сервиса и быструю доставку.
			<br>Выбирая нас, вы можете получить море удовольствия.</p>
		</div>
	</section>

	<section>
		<div class="employees-about-section">
			<h2>Наши сотрудники</h2>
			<p>Мы гордимся нашей командой профессионалов, которые помогут вам найти и приобрести необходимые товары.
			<br>Наши сотрудники обладают большим опытом работы с клиентами и всегда готовы ответить на ваши вопросы и помочь вам сделать правильный выбор.
			<br>Они бережно относятся к каждому покупателю, заботясь о его комфорте.</p>
		</div>
	</section>

	<section>
		<div class="worth-about-section">
			<h2>Наши ценности</h2>
			<p>Наше главное преимущество – это удовлетворенность наших клиентов. Мы придерживаемся принципов честности, качества и надежности.
			<br>Мы стремимся к постоянному совершенствованию и повышению уровня нашего сервиса. Благодаря вашей поддержке и доверию мы развиваемся и растем каждый день.</p>
		</div>	
	</section> 
    <Footer/>
</template>
<style>
    .main-about-section, .employees-about-section, .worth-about-section {
        box-shadow: 0 0 24px #fff;
        border-bottom: 1px solid;
        height: 45vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>