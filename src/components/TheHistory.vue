<template>
  <section class="history">
    <TitleHead :title="title" />
    <div class="history__contents" v-for="item in history" v-bind="item" :key="item.id">
      <div class="history__date">
        <p>{{ item.data }}</p>
      </div>
      <div class="history__txt">
        <p>{{ item.txt }}</p>
      </div>
    </div>
  </section>
</template>


<script>
import TitleHead from "@/components/TitleHead";

export default {
  name: "TheHistory",
  components: { TitleHead },
  data() {
    return {
      title: "History",
      history: [
        { data: "1997/02", txt: "神奈川県出身" },
        { data: "2019/03", txt: "横浜美術大学美術学部彫刻コース卒業" }
      ]
    };
  }
};
</script>
<style scoped>
.history {
  padding-top: 20px;
  padding-bottom: 14px;
  text-align: center;
}
.history__contents {
  display: flex;
  justify-content: center;
}
.history__date {
  padding-right: 10px;
}
</style>