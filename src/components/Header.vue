<template>
  <header id="Header">
    <nav class="Globalnav">
      <ul class="Globalnav__list">
        <li class="Globalnav__item" v-for="(item,i) in items" :key="i">
          <router-link class="Globalnav__link" v-bind:to="item.path">{{ item.title }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Globalnav",
  data() {
    return {
      items: [
        { title: "home", path: "/" },
        { title: "profile", path: "/profile" },
        { title: "works", path: "/works" },
        { title: "contact", path: "/contact" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.Globalnav {
  @at-root {
    .Globalnav__list {
      margin: 0 auto;
      padding: 0;
      text-align: center;
    }
    .Globalnav__item {
      display: inline-block;
      position: relative;
      padding-right: 15px;
      margin-right: 10px;
    }
    .Globalnav__link {
      text-decoration: none;
      color: #aaa;
      display: inline-block;
      width: 100%;
    }
    .Globalnav__link:hover {
      color: #555;
    }
  }
}
</style>