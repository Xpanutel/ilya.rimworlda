<script>
    export default {
        name: 'Header',
    }
</script>
<template>
    <header class="header">
        <div class="logo">
            <a href="/main"><img src="../assets/logo.png"></a>
        </div>
        <div class="nav">
            <a class="button" href="/main">Главная</a>
		    <a class="button" href="/about">О нас</a>
		    <a class="button" href="/products">Товары</a>
		    <a class="button" href="/contacts">Контакты</a>
        </div>
	</header> 
</template>
<style>
    .header {
        box-shadow: 0px 0px 40px 10px rgba(95, 75, 139, 1);
        animation: shadow-animation 5s linear infinite;
        background: #151521;
        height: 65px;
        transition: ease-out 0.7s;
        display: flex;
        justify-content: space-between;
        padding: 0 25px;
        align-items: center;
    }
    @keyframes shadow-animation {
      0% {
        box-shadow: 0 0 20px 10px rgba(95, 75, 139, 1);
      }
      20% {
        box-shadow: 0 0 40px 10px rgb(141, 122, 182);
      }
      40% {
        box-shadow: 0 0 60px 10px rgb(199, 192, 215);
      }
      60% {
        box-shadow: 0 0 40px 10px rgb(141, 122, 182);
      }
      100% {
        box-shadow: 0 0 20px 10px rgba(95, 75, 139, 1);
      }
    }
    .nav {
        display: flex;
        align-items: center;
    }
    .nav .button {
        margin-left: 5px;
    }
</style>