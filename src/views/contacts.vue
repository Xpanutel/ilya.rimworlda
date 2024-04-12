<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
    export default {
        name: 'Contacts',
        components: {
            Header,
            Footer
        }
    }
</script>
<template>
    <Header/>
    <section>
		<div class="main-contact-section">
			<h2>Обратная связь</h2>
			<p>Если у вас остались вопросы, имеются предложения и вы хотите обратиться с этим в наш магазин, то можете воспользоваться 
			<br>формой обратной связи. Наши специалисты дадут ответ в самые кротчайшие сроки.</p>
			<form action="/contacts" method="post">
				<label for="name">Ваше имя:</label>
				<input class="input" type="text" id="name" name="name" required>
				
				<label for="email">Ваш адрес электронной почты (email):</label>
				<input class="input" type="email" id="email" name="email" required>
				
				<label for="message">Ваше сообщение:</label>
				<textarea id="message" name="message" required></textarea>
				
				<button class="button" type="button">Отправить</button>
			</form>
			
			<h2>Контактные данные:</h2>
			<p>Магазин: Guardians of Dreams Shop</p>
			<p>Владелец: Полянский Илья Владимирович</p>
			<p>Email: fedpet75@gmail.com</p>
			<p>Телефон: +7 123 456 7890</p>
		</div>
	</section>
    <Footer/>
</template>
<style>
    .main-contact-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 25px 0; 
    }
    .main-contact-section form {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid;
        box-shadow: 0 0 24px #fff;
        border-radius: 25px;
        padding: 25px 10px;
        margin: 25px 0;
    }
    .main-contact-section form .button {
        margin: 25px 0 0 0;
    }
</style>