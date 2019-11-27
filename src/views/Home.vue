<template>
  <section id="Home">
    <h1 class="Home__title">{{ name }}</h1>
    <h2 class="Home__description">{{ text }}</h2>
  </section>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      name: "Hello Wold！",
      text: "by Honami Tanabe"
    };
  }
};
</script>

<style lang="scss" scoped>
// #Home {
//   @at-root {
//     .Home__title {
//     }
//     .Home__description {
//     }
//   }
// }
</style>