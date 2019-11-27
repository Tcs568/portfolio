<template>
  <div id="app">
    <template>
      <Header />
      <router-view />
      <Footer />
    </template>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss">
html {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 62.5%;
  color: #2c3e50;
  text-align: center;
}
body {
  font-size: 1.6rem;
  line-height: 2;
}
h1 {
  font-size: 2.4rem;
  line-height: 1.3;
}
h2 {
  font-size: 2rem;
  line-height: 1.3;
}
p {
  font-size: 1.4rem;
  line-height: 1.3;
}
p,
li,
dt,
dl {
  line-height: 1.6;
}
li {
  list-style-type: none;
}
@media (min-width: 560px) {
  h1 {
    font-size: 3.6rem;
  }
  h2 {
    font-size: 2.4rem;
  }
  p {
    font-size: 1.6rem;
  }
}
@media (min-width: 960px) {
  h1 {
    font-size: 4.8rem;
  }
  h2 {
    font-size: 2.8rem;
  }
  p {
    font-size: 1.6rem;
  }
}
</style>