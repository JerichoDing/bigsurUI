<template>
  <div class="nav-menu">
    <a class="nav-menu-link is-active" href="#">All Apps</a>
    <a class="nav-menu-link" href="#">Desktop</a>
    <a class="nav-menu-link" href="#">Mobile</a>
    <a class="nav-menu-link" href="#">Web</a>
  </div>
</template>

<style lang="scss" scoped>
  .nav-menu {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    height: 58px;
    flex-shrink: 0;
    margin-left: 150px;
    box-sizing: content-box;
    &-link.is-active, &-link:hover {
        color: var(--theme-color);
        border-bottom: 2px solid var(--theme-color);
    }
    @media screen and (max-width: 1055px) {
      margin: auto;
    }
    a {
      padding: 20px 24px;
    }
  }

</style>
