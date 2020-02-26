<template>
  <section class="contact">
    <TitleHead :title="title" />
    <p class="contact__msg">{{ msg }}</p>
    <el-card class="contact__box">
      <p class="contact__mail">{{ mail }}</p>
    </el-card>
  </section>
</template>


<script>
import TitleHead from "@/components/TitleHead";

export default {
  name: "TheContact",
  components: { TitleHead },
  data() {
    return {
      title: "Contact",
      msg: "下記までお気軽にご連絡ください",
      mail: "honamitanabe01[at]gmail.com"
    };
  }
};
</script>

<style scoped>
.contact {
  padding-top: 14px;
  padding-bottom: 20px;
  text-align: center;
}
.contact__box {
  width: 240px;
  margin: 0 auto;
}
.contact__msg {
  margin-bottom: 8px;
}
</style>