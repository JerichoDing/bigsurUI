<script setup>
import Notify from '@components/notify.vue'
</script>

<template>
  <div class="header">
    <div class="menu-circle"></div>
    <div class="header-menu">
      <a class="header-menu-link is-active" href="#">Apps</a>
      <a class="header-menu-link notify" href="#">Your work</a>
      <a class="header-menu-link" href="#">Discover</a>
      <a class="header-menu-link notify" href="#">Market</a>
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Search" />
    </div>
    <div class="header-profile">
      <Notify>2 </Notify>
      <svg viewBox="0 0 512 512" fill="currentColor">
        <path
          d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z"
        />
      </svg>
      <div class="dark-light">
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
      <img class="profile-img" src="/static/images/avatar.png" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 58px;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  padding: 0 30px;
  white-space: nowrap;
  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
  &-menu {
    display: flex;
    align-items: center;
    a {
      padding: 20px 30px;
      text-decoration: none;
      color: var(--inactive-color);
      border-bottom: 2px solid transparent;
      transition: 0.3s;
      @media screen and (max-width: 610px) {
        // &:not(.main-header-link) {
        //   display: none;
        // }
      }
      &.is-active,
      &:hover {
        color: var(--theme-color);
        border-bottom: 2px solid var(--theme-color);
      }
    }
  }

  .search-bar {
    height: 40px;
    display: flex;
    width: 100%;
    max-width: 400px;
    padding-left: 16px;
    border-radius: 4px;
    input {
      width: 100%;
      height: 100%;
      border: none;
      background-color: var(--search-bg);
      border-radius: 4px;
      font-family: var(--body-font);
      font-size: 15px;
      font-weight: 500;
      padding: 0 20px 0 40px;
      box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
      background-size: 14px;
      background-repeat: no-repeat;
      background-position: 16px 48%;
      color: var(--theme-color);
      &::placeholder {
        font-family: var(--body-font);
        color: var(--inactive-color);
        font-size: 15px;
        font-weight: 500;
      }
    }
  }

  .header-profile {
    display: flex;
    align-items: center;
    padding: 0 16px 0 40px;
    margin-left: auto;
    flex-shrink: 0;
    svg {
      width: 22px;
      color: #f9fafb;
      flex-shrink: 0;
    }
  }

  .profile-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--theme-color);
    margin-left: 22px;
  }
  .menu-circle {
    width: 15px;
    height: 15px;
    background-color: #f96057;
    border-radius: 50%;
    box-shadow: 24px 0 0 0 #f8ce52, 48px 0 0 0 #5fcf65;
    margin-right: 195px;
    flex-shrink: 0;
    @media screen and (max-width: 945px) {
      display: none;
    }
  }
}
</style>
