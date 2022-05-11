<script setup>
  import Header from '@components/header.vue'
  import Nav from '@components/nav.vue'
  import SideBar from "@components/side-bar.vue";
  import Content from "@components/content.vue";
  import Modal from "@components/modal.vue";
</script>

<template>
  <main>
    <div class="video-bg">
      <video width="320" height="240" autoplay loop muted>
        <source
          src="https://assets.codepen.io/3364143/7btrrd.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="app">
      <Header />
      <div class="wrapper">
        <SideBar />
        <div class="main-container">
          <Nav />
          <Content />
        </div>
      </div>
      <Modal />
    </div>
  </main>
</template>
