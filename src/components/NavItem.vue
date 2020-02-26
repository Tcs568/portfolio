<template>
  <li class="nav__item">
    <router-link :to="path" exact>{{ label }}</router-link>
  </li>
</template>

<script>
export default {
  props: {
    path: String,
    label: String
  }
};
</script>

<style scoped>
.nav__item {
  display: inline-block;
  padding-right: 15px;
}

.router-link-active {
  color: #e6a23c;
}
</style>

