<template>
  <header>
    <div @click="toggleMenu" class="menu-btn">
      <div class="menu-btn__item"></div>
      <div class="menu-btn__item"></div>
      <div class="menu-btn__item"></div>
    </div>

    <div class="menu__info" v-if="route !== 'home'">
      <img class="menu__logo" src="@/assets/common/brain.png" alt="logo">
      <span class="menu__text" v-if="route === 'test'">тест на определение IQ</span>
      <span class="menu__text-done" v-if="route === 'result'">Готово!</span>
    </div>

    <div class="menu">
      <nav class="menu__navigation">
        <button class="menu__close" @click="toggleMenu"></button>
        <ul class="menu__list">
          <router-link @click="toggleMenu" class="menu__item" to="/">Главная</router-link>
          <router-link @click="toggleMenu" class="menu__item" to="/">Информация о тесте</router-link>
          <router-link @click="toggleMenu" class="menu__item" to="/test">Пройти тест</router-link>
        </ul>
      </nav>
    </div>

  </header>
</template>
  
<script>
  export default {
  name: 'Navigation',
  methods: {
    toggleMenu () {
      const menu = document.querySelector('.menu')
      menu.classList.toggle('menu_active')
    },
  },
  computed: {
    route () {
      return this.$route.name
    }
  }
}
</script>
  
<style scoped>
    header {
      position: relative;
      font-family: 'Yeseva One', sans-serif;
      font-weight: 400;
      background-color: #181818;
      padding: 0 15px;
      height: 46px;
      display: flex;
      align-items: center;
    }
    .menu-btn {
      width: 24px;
      height: 17px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
    }
    .menu__info {
      display: flex;
      align-items: center;
    }
    .menu__logo {
      width: 40px;
      height: 32px;
      margin-left: 14px;
      margin-right: 11px;
    }
    .menu__text {
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #FFC700;
    }
    .menu__text-done {
      position: absolute;
      left: 50%;
      transform: translate(-48%);
      font-size: 20px;
      line-height: 23px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #FFC700;
    }
    .menu-btn__item {
      width: 100%;
      height: 2.67px;
      background: #DADADA;
    }
    .menu {
      position: fixed;
      z-index: 10;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #181818;
      transform: translateX(-100%);
      transition: transform 0.5s; 
    }
    .menu_active {
	    transform: translateX(0);
    }
    .menu__list {
      padding-top: 110px;
      padding-left: 23px;
      text-transform: uppercase;
      display: grid;
      grid-row: repeat(3, 19px);
      row-gap: 27px;
      font-size: 16px;
      line-height: 17px;
    }
    .menu__item {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      color: #fff;
      text-decoration: none;
    }
    .menu__item:hover {
      color: #F4CE0C;
    }
    .menu__close {
      background: #181818;
      border: none;
      position: absolute;
      top: 18px;
      right: 13px;
      width: 28px;
      height: 28px;
      cursor: pointer;
    }
    .menu__close::before, .menu__close::after {
      content: '';
      position: absolute;
      top: 11px;
      left: -6.5px;
      display: block;
      width: 36.7px;
      height: 3px;
      background: #FFC700;;
    }
    .menu__close::before {
        transform: rotate(45deg);
    }
    .menu__close::after {
        transform: rotate(-45deg);
    }
</style>
  