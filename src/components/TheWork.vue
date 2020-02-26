<template>
  <section class="works">
    <TitleHead :title="title" />
    <el-row>
      <el-col v-for="item in works" :key="item.id" :span="24">
        <el-card :body-style="{ padding: '16px'}" shadow="hover">
          <img :src="item.img" />
          <h1>
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </h1>
          <el-tag class="tag" type="info" effect="plain">{{ item.tag }}</el-tag>
          <el-collapse accordion>
            <el-collapse-item class="collapse">
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
          title: "ショッピングサイト(フロントエンド)",
          date: "40時間",
          img: "/img/profile.png",
          url: "https://tcs568.github.io/ecsite_front/",
          codeLink: "https://github.com/Tcs568/ecsite_front",
          tag: "HTML/SCSS/Javascript/jQuery",
          description: "命名規則にBEMを利用しました"
        },
        {
          title: "ブログテーマ",
          date: "40時間",
          img: "/img/profile.png",
          url: "",
          tag: "WordPress",
          description: "説明です説明です説明です説明です説明です説明です"
        },
        {
          title: "掲示板",
          date: "40時間",
          img: "/img/profile.png",
          url: "",
          tag: "Laravel",
          description: "説明です説明です説明です説明です説明です説明です"
        },
        {
          title: "ポートフォリオサイト",
          date: "45時間",
          img: "/img/profile.png",
          url: "",
          tag: "Vue.js",
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
  margin: 0 auto;
  text-align: center;
  width: 80%;
}

@media screen and (min-width: 560px) {
  .works {
    width: 30%;
  }
}

.el-card {
  margin-bottom: 20px;
}

.tag {
  display: block;
}
</style>