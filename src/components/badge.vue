<template>
  <span class="notification-number updates">
    <slot />
  </span>
</template>
<style lang="scss" scoped>
.updates {
  background-color: #3a6df0;
  border-radius: 50%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  margin-left: auto;
  width: 18px;
  height: 18px;
  font-size: 11px;
}
</style>
