<template>
  <div class="profile">
    <img src="/img/profile.png" alt="Honami Tanabe" class="profile__img" />
    <p class="profile__name">{{ name }}</p>
    <p class="profile__subname">{{ subname }}</p>
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
  </div>
</template>


<script>
export default {
  name: "ProfileItem",
  data() {
    return {
      url: "https://github.com/Tcs568?tab=repositories",
      name: "Honami Tanabe",
      subname: "田辺 歩那海"
    };
  }
};
</script>
<style scoped>
.profile__img {
  width: 150px;
  height: 150px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
  border: 3px solid #fff;
}
</style>