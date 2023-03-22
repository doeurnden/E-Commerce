<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="home" id="brand-name">
          <dev>DEN</dev>
        </RouterLink>
        <RouterLink to="#" class="first">
          <dev>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </dev>
          <dev>Search</dev>
        </RouterLink>
        <RouterLink to="/home" class="home">Home</RouterLink>
        <RouterLink to="/category" class="category">Category</RouterLink>
        <RouterLink to="/contact" class="contact">Contact</RouterLink>
        <RouterLink to="/about" class="about">About</RouterLink>
        <RouterLink to="#" class="login">
          <dev>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </dev>
          <dev>Login</dev>
        </RouterLink>
        <RouterLink to="#" class="cart">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <div>Cart()</div>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  nav {
    width: 100%;
    height: 50px;
    background-color: rgb(167, 167, 167);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
  }
  #brand-name, .home, .category, .contact, .about,.first, .login, .cart{
    text-decoration: none;
  }
  .first, .login, .cart{
    display: flex;
    gap: 10%;
  }
  .first svg{
    width: 15px;
    height: 15px;
  }

  .login svg{
    width: 18px;
    height: 18px;
  }
  .cart svg{
    width: 20px;
    height: 20px;
  }
</style>
