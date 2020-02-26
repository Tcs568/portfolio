<template>
  <nav class="nav">
    <ul class="nav__list">
      <NavItem v-for="item in list" v-bind="item" :key="item.id" />
    </ul>
  </nav>
</template>

<script>
import NavItem from "@/components/NavItem";
export default {
  name: "NavList",
  components: { NavItem },
  data() {
    return {
      list: [
        { label: "Top", path: "/" },
        { label: "About", path: "/about" },
        { label: "Works", path: "/works" },
        { label: "Contact", path: "/contact" }
      ]
    };
  }
};
</script>

