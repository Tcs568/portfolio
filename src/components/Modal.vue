<template>
  <transition name="modal">
    <div class="modal-overlay" @click="$emit('close')">
      <div class="modal-WorksDetail">
        <div class="modal-WorksDetail__content">
          <div class="modal-WorksDetail__humbnail">{{ val.humbnail}}</div>
          <div class="modal-WorksDetail__textContent">
            <h2>{{ val.title}}</h2>
            <p>{{ val.text}}</p>
          </div>
        </div>
        <footer class="modal-WorksDetail__footer">
          <button class="modal-WorksDetail__btn" @click="$emit('close')">Close</button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    val: Object
  }
};
</script>

<style lang="scss" scoped>
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.modal-WorksDetail {
  @at-root {
    .modal-WorksDetail {
      background: #fff;
      border-radius: 4px;
      overflow: hidden;
    }
    .modal-WorksDetail__content {
      padding: 10px 20px;
      display: -ms-flexbox;
      display: flex;
      width: 350px;
    }
    .modal-WorksDetail__humbnail {
      overflow: hidden;
      width: 200px;
    }
    .modal-WorksDetail__textContent {
      text-align: left;
      line-height: 1.2rem;
      padding-left: 20px;
      width: 300px;
    }
    .modal-WorksDetail__footer {
      background: #ccc;
      padding: 10px;
      text-align: right;
    }
    .modal-WorksDetail__btn {
      position: relative;
      display: inline-block;
      padding: 0.25em 0.5em;
      text-decoration: none;
      color: #fff;
      font-weight: 700;
      background: #6088c6;
      border: 1px solid #4072b3;
      border-radius: 4px;
      box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.2);
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
}
</style>