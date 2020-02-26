<template>
  <div class="pageTitle">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "TitleHead",
  props: {
    title: String
  }
};
</script>

<style scoped>
.pageTitle {
  padding-top: 8px;
  padding-bottom: 24px;
}
</style>