<template>
  <section class="works">
    <TitleHead :title="title" />
    <el-row>
      <el-col v-for="item in works" :key="item.id">
        <el-card :body-style="{ padding: '8px' }">
          <img :src="item.img" />
          <div style="padding: 10px;">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
            <el-tag class="tag" type="info" effect="plain">{{ item.tag }}</el-tag>
            <div class="bottom clearfix">
              <el-collapse accordion>
                <el-collapse-item name="1">
                  <template slot="title">
                    <span>description</span>
                  </template>
                  <time class="time">制作時間 : {{ item.date }}</time>
                  <div>{{ item.description }}</div>
                  <a :href="item.codeLink" target="_blank">
                    <font-awesome-icon :icon="['fab', 'github']" />
                  </a>
                </el-collapse-item>
              </el-collapse>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import TitleHead from "@/components/TitleHead";

export default {
  name: "TheWork",
  components: { TitleHead },
  data() {
    return {
      title: "Works",
      works: [
        {
          title: "ショッピングサイト(フロント)",
          date: "2020/01/01",
          img: "/img/profile.png",
          url: "https://tcs568.github.io/ecsite_front/",
          codeLink: "https://github.com/Tcs568/ecsite_front",
          tag: "HTML5/Sass/Javascript/jQuery",
          description: "説明です説明です説明です説明です説明です説明です"
        },
        {
          title: "ブログサイト",
          date: "2020/01/01",
          img: "/img/profile.png",
          url: "",
          tag: "WordPress",
          description: "説明です説明です説明です説明です説明です説明です"
        },
        {
          title: "掲示板",
          date: "2020/01/01",
          img: "/img/profile.png",
          url: "",
          tag: "Laravel",
          description: "説明です説明です説明です説明です説明です説明です"
        },
        {
          title: "ポートフォリオサイト",
          date: "2020/01/01",
          img: "/img/profile.png",
          url: "",
          tag: "Vue.js",
          description: "説明です説明です説明です説明です説明です説明です"
        },
        {
          title: "アプリ",
          date: "24時間",
          img: "/img/profile.png",
          url: "",
          tag: "Javascript",
          description: "説明です説明です説明です説明です説明です説明です"
        }
      ]
    };
  }
};
</script>

<style scoped>
.works {
  padding-top: 20px;
  padding-bottom: 20px;
}
.tag {
  display: block;
}
</style>