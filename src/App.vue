<template>
  <Header></Header>
  <section class="container">
    <router-view />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  components: {Header}
})
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&display=swap");
:root {
  --primary-color: #111;
  --secondary-color: #1289a7;
}
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  color: var(--secondary-color);
  background-color: var(--primary-color);
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
