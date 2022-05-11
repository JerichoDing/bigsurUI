<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style lang="scss">

.video-bg {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

img {
  max-width: 100%;
}

.app {
  background-color: var(--theme-bg-color);
  max-width: 1250px;
  max-height: 860px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  border-radius: 14px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  font-size: 15px;
  font-weight: 500;
}

.notify {
  position: relative;
  &:before {
    content: '';
    position: absolute;
    background-color: #3a6df0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    right: 20px;
    top: 16px;
  }
  @media screen and (max-width: 1055px) {
    display: none;
  }
}





.wrapper {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}


.main-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}







.content-button:not(.open):hover {
  background: #1e59f1;
}





.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 187px;
  margin-left: auto;
  @media screen and (max-width: 480px) {
    width: auto;
  }
}



.checkbox-wrapper {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  & + .checkbox-wrapper {
    margin: 20px 0 40px;
  }
}

.checkbox {
  display: none;
}

.checkbox + label {
  display: flex;
  align-items: center;
  &:before {
    content: '';
    margin-right: 10px;
    width: 15px;
    height: 15px;
    border: 1px solid var(--theme-color);
    border-radius: 4px;
    cursor: pointer;
    flex-shrink: 0;
  }
}

.checkbox:checked + label:before {
  background-color: #3a6df0;
  border-color: #3a6df0;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e");
  background-position: 50%;
  background-size: 12px;
  background-repeat: no-repeat;
}

.content-button-wrapper {
  margin-top: auto;
  margin-left: auto;
  .open {
    margin-right: 8px;
  }
}

.apps-card {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: calc(100% + 20px);
}

.app-card {
  display: flex;
  flex-direction: column;
  width: calc(33.3% - 20px);
  font-size: 16px;
  background-color: var(--content-bg);
  border-radius: 14px;
  border: 1px solid var(--theme-bg-color);
  padding: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.02);
    background-color: var(--theme-bg-color);
  }
  svg {
    width: 28px;
    border-radius: 6px;
    margin-right: 12px;
    flex-shrink: 0;
  }
  & + .app-card {
    margin-left: 20px;
  }
  span {
    display: flex;
    align-items: center;
  }
  &__subtext {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6em;
    margin-top: 20px;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 20px;
  }
  &-buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-top: 16px;
  }
  @media screen and (max-width: 1110px) {
    width: calc(50% - 20px);
    &:last-child {
      margin-top: 20px;
      margin-left: 0px;
    }
  }
  @media screen and (max-width: 565px) {
    width: calc(100% - 20px);
    margin-top: 20px;
    & + .app-card {
      margin-left: 0;
    }
  }
}

::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-bg);
  border-radius: 10px;
}
</style>
