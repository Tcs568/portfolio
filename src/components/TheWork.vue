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
          img: "/img/ecsite_front.jpg",
          url: "https://tcs568.github.io/ecsite_front/",
          codeLink: "https://github.com/Tcs568/ecsite_front",
          tag: "HTML/SCSS/Javascript/jQuery",
          description:
            "レスポンシブ対応のウェブサイトを制作しました。保守性の高いコーディングのためにBRM名命名規則を利用しました。"
        },
        {
          title: "ポートフォリオサイト",
          date: "45時間",
          img: "/img/works/portfolio.jpg",
          url: "https://portfolio-ce086.firebaseapp.com/",
          codeLink: "https://github.com/Tcs568/portfolio",
          tag: "Vue.js",
          description:
            "このポートフォリオサイトです。Vue RouterでSPAを実装、単一ファイルコンポーネントで構成しました。"
        },
        {
          title: "BBS",
          date: "40時間",
          img: "/img/works/laravel_bbs.jpg",
          url: "https://laravel-bbs00.herokuapp.com/",
          codeLink: "https://github.com/Tcs568/laravel_bbs",
          tag: "Laravel",
          description:
            "BBSで基礎的なLaravelでのCRUDの構築を学びました。認証機能を利用して、管理者と一般ユーザを個別に管理する機能を実装しました。"
        },
        {
          title: "ブログテーマ",
          date: "40時間",
          img: "/img/works/wp_blog.jpg",
          url: "https://wp-blog-8dae8.firebaseapp.com",
          codeLink: "https://github.com/Tcs568/wp_blog",
          tag: "WordPress/jQuery/Bootstrap4",
          description:
            "WordPressでブログテーマを自作しました。コンテツ上部の商品画像は楽天APIから取得しました。"
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