<template>
  <section id="Works">
    <h1 class="Works__title">Works</h1>
    <div class="WorksDetail">
      <div class="WorksDetail__content" v-for="i in 4" :key="i">
        <div class="WorkstDetail__humbnail">
          <a href="https://placeholder.com">
            <img src="https://via.placeholder.com/350" />
          </a>
        </div>
        <div class="WorkstDetail__textContent">
          <h2 class="WorkstDetail__title">{{ name }}</h2>
          <div class="WorksDetail_meta">
            <p class="WorksDetail__date">date</p>
            <ul class="WorksDetail__tag">
              <li class="WorksDetail__tagList">tag</li>
              <li class="WorksDetail__tagList">tag</li>
            </ul>
          </div>
        </div>
        <!-- modal -->
        <Modal @close="closeModal" v-if="modal">
          <p>Vue.js Modal Window!</p>
          <template slot="footer">
            <button @click="close">Close</button>
          </template>
        </Modal>
      </div>
    </div>
  </section>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
  components: {
    Modal
  },
  data() {
    return {
      modal: false
    };
  },
  methods: {
    openModal: () => {
      this.modal = true;
    },
    closeModal: () => {
      this.modal = false;
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