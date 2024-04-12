<script>
    export default {
        name: 'Footer'
    }
</script>
<template>
    <footer>
		<div class="footer_container">
			<div class="footer_logo">
				<img src="../assets/logo.png">
			</div>
			<div class="footer_contacts">
				<h4>Об авторе</h4>
                <div class="abou_autor">
                    <a class="link" href="#">КамТИ - филиал ПензГТУ</a>
				    <a class="link" href="#">Полянский Илья Владимирович</a>
				    <a class="link" href="#">fedpet75@gmail.com</a>
				    <a class="link" href="#">+7 123 456 7890</a>
                </div>
			</div>	
			<div class="footer_useful-links">
				<h4>Навигация</h4>
				<div class="footer_useful-links-list">
					<a class="link" href="/main">Главная</a>
					<a class="link" href="/about">О нас</a>
					<a class="link" href="/contacts">Контакты</a>
					<a class="link" href="/store">Товары</a>
                </div>
			</div> 
		</div>
	</footer>
</template>
<style>
    .footer_container {
        display: flex;
        justify-content: space-between;
        padding: 0 10%;
        box-shadow: 0 0 24px #fff;
    }
    .abou_autor {
        display: flex;
        flex-direction: column;
    }
    .footer_useful-links-list {
        display: flex;
        flex-direction: column;
    }
</style>