<template>
  <nav>
    <div class="left">
      <span id="brandName">
        <RouterLink to="/">DEN</RouterLink>
      </span>
      <span>
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        Search...
      </span>
    </div>

    <div class="right">
      <div class="content">
        <span>
          <RouterLink to="/shopAll">Shop All</RouterLink>
        </span>
        <span>
          <RouterLink to="/women">Women</RouterLink>
        </span>
        <span>
          <RouterLink to="/men">Men</RouterLink>
        </span>
        <span>
          <RouterLink to="/sale">Sale</RouterLink>
        </span>
        <span>
          <RouterLink to="/about">About</RouterLink>
        </span>
        <span>
          <RouterLink to="/contact">Contact</RouterLink>
        </span>
      </div>
      <div class="login-cart">
        <span>
          <RouterLink to="/login"><font-awesome-icon icon="fa-solid fa-user" /></RouterLink>
        </span>
        <span>
          <RouterLink to="" id="cart" @click="store.state.sideBarState = true"><font-awesome-icon icon="fa-solid fa-bag-shopping" /></RouterLink>
        </span>
      </div>
    </div>
  </nav>
</template>
  
<script setup>
import { RouterLink } from 'vue-router'
import store from '../store';
</script>
  
<style lang="scss" scoped>
nav {
  width: 100%;
  height: 4rem;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position:sticky;

  .left {
    width: 40%;

    span {
      margin-right: 1rem;
    }

    #brandName a {
      color: white;
      background-color: black;
      padding: 0.5rem;
      text-decoration: none;
      // margin-left: 1rem;
    }
  }

  .right {
    width: 60%;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;

    div a {
      text-decoration: none;
      color: black;
    }

    :hover {
      color: chocolate;
    }

    .content {
      span {
        margin-right: 1rem;
      }
    }

    .login-cart {
      span {
        margin: 1rem;

        #cart {
          transition: 100s;
        }
      }
    }
  }
}

svg {
  width: 12px;
}

@media screen and (max-width: 500px) {
  nav {
    width: 100%;
    background-color: aqua;
    display: flex;

    .left {
      width: 40%;

      span {
        margin: 0;
      }

      #brandName a {
        margin: 0;
        padding: 0;
      }
    }

    .right {
      width: 60%;
      // display: flex;
    }
  }
}
</style>
  