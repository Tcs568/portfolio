<template>
  <header class="header">
    <ProfileItem />
    <NavList />
  </header>
</template>

<script>
import ProfileItem from "@/components/ProfileItem";
import NavList from "@/components/NavList";
export default {
  name: "TheHeader",
  components: {
    ProfileItem,
    NavList
  }
};
</script>

<style scoped>
.header {
  max-width: 1000px;
  text-align: center;
  margin: 0 auto;
}
</style>