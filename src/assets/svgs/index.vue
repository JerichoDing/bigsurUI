<script setup>
// TODO:

</script>

<template>
  <svg
    class="icon icon-{{this.props.icon}}"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="{{width}}"
    height="{{height}}"
    viewBox="0 0 {{this.props.vWidth}} {{this.props.vHeight}}"
    style="{{transform: 'rotate(' + rotation + ')', transformOrigin: '50% 50%'}}"
  >
    {i.doms}
  </svg>
</template>
