<template>
  <footer class="footer">
    <small>&copy;{{ copy }}</small>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      copy: "2020 Honami Tanabe"
    };
  }
};
</script>

<style scoped>
.footer {
  max-width: 1000px;
  text-align: center;
  margin: 0 auto;
}
</style>

