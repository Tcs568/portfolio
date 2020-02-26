<template>
  <section class="top">
    <div class="textAnime">
      <span v-for="(t, index) in text" :key="index" v-text="t" class="text delay-anime" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text: "Hi there! Welcome to my portfolio page"
    };
  }
};
</script>

<style scoped>
.top {
  padding-top: 20px;
  padding-bottom: 20px;
}
@keyframes text-in {
  0% {
    transform: translate(0, -5px);
    opacity: 0;
  }
}

.text {
  display: inline-block;
  min-width: 0.3em;
  animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
}
</style>