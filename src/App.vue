<template>
  <div id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/TheHeader";
import Main from "@/components/TheMain";
import Footer from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  }
};
</script>