<template>
  <section id="Profile">
    <h1 class="Profile__title">Profile</h1>
    <div class="Profile__humbnail">
      <img class="Profile__humbailImg" src="@/assets/profile.png" alt="田辺歩那海 / HonamiTanabeの画像" />
    </div>
    <div class="Profile__bio" v-for="(item,i) in profile" :key="i">
      <p class="Profile___description">{{ item.bio }}</p>
    </div>
    <ul class="Profile__snsLine">
      <li class="Profile___snsIcon">
        <!-- 動的に生成する -->
        <span>
          <font-awesome-icon :icon="['fab', 'github']" />
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      profile: [
        { bio: "田辺 歩那海 / Honami Tanabe" },
        { bio: "1997年 神奈川県出身" },
        { bio: "2019年 横浜美術大学美術学部卒業" },
        { bio: "趣味 ウォーキング" }
      ],
      sns: [{ path: "/profile" }]
    };
  }
};
</script>

<style lang="scss" scoped>
.Profile__humbailImg {
  width: 232px;
  height: 232px;
  border-radius: 50%;
}
</style>