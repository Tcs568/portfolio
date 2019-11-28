<template>
  <section id="Works">
    <h1 class="Works__title">Works</h1>
    <div class="WorksDetail">
      <div class="WorksDetail__content" @click="openModal(item)" v-for="item in items" :key="item">
        <div class="WorkstDetail__humbnail">{{ item.humbnail }}</div>
        <div class="WorkstDetail__textContent">
          <h2 class="WorkstDetail__title">{{ item.title }}</h2>
          <div class="WorksDetail_meta">
            <p class="WorksDetail__date">{{ item.date }}</p>
            <ul class="WorksDetail__tag">
              <li class="WorksDetail__tagList">{{ item.tag }}</li>
            </ul>
          </div>
        </div>
      </div>
      <modal :val="postItem" v-if="showModal" @close="closeModal"></modal>
    </div>
  </section>
</template>
<script>
import Modal from "@/components/Modal.vue";
export default {
  name: "works",
  components: {
    Modal
  },
  data() {
    return {
      showModal: false,
      postItem: "",
      items: [
        {
          humbnail: "ここに画像",
          title: "作品1",
          text: "作品2のcaption",
          date: "20197/7~7/7",
          tag: "PHP"
        },
        {
          humbnail: "ここに画像",
          title: "作品1",
          text: "作品2のcaption",
          date: "20197/7~7/7",
          tag: "PHP"
        },
        {
          humbnail: "ここに画像",
          title: "作品1",
          text: "作品2のcaption",
          date: "20197/7~7/7",
          tag: "PHP"
        },
        {
          humbnail: "ここに画像",
          title: "作品1",
          text: "作品2のcaption",
          date: "20197/7~7/7",
          tag: "PHP"
        }
      ]
    };
  },
  methods: {
    openModal(item) {
      this.postItem = item;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.WorksDetail {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @at-root {
    .WorksDetail__content {
      width: 350px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px #ccc;
      margin: 16px;
    }
    .WorkstDetail__humbnail {
      border-radius: 5px 5px 0 0;
      max-width: 100%;
      height: auto;
    }
    .WorkstDetail__textContent {
      padding: 20px;
    }
    .WorksDetail_meta {
      display: flex;
      align-content: center;
      justify-content: space-between;
      margin: 5px 10px;
    }
    .WorkstDetail__title {
      margin-bottom: 20px;
    }
    .WorksDetail__tag {
      display: flex;
      align-self: center;
    }
    .WorksDetail__tagList {
      background: #eee;
      border: none;
      color: #666;
      padding: 6px;
      margin: 3px;
      border-radius: 3px;
    }
  }
}
</style>