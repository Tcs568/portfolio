<template>
  <!-- ノードの初期描画時にトランジションを適用したい場合はappear -->
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-content">
          <slot />
        </div>
        <footer>
          <slot name="footer">
            <!-- slot="footer"が親要素のコンポーネントに置き換わる -->
            <button @click="$emit('close')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="sass" scoped>
// .modal {
//   modal-overlay {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: fixed;
//     z-index: 30;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//   }
//   }
</style>

//  <style lang="scss" scoped>
//   .modal-overlay {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: fixed;
//     z-index: 30;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//   }
// .modalwindow {
//   background: #fff;
//   border-radius: 4px;
//   overflow: hidden;
// }
// .modalwindow__card {
//   padding: 10px 20px;
//   display: -ms-flexbox;
//   display: flex;
//   width: 500px;
// }
// .modalwindow__img {
//   overflow: hidden;
//   width: 200px;
// }
// .modalwindow__textpearent {
//   // bord-break: break-all;
//   text-align: left;
//   line-height: 1.2rem;
//   padding-left: 20px;
//   width: 300px;
// }
// .modalwindo__footer {
//   background: #ccc;
//   padding: 10px;
//   text-align: right;
// }
// .modalwindo__btn {
//   position: relative;
//   display: inline-block;
//   padding: 0.25em 0.5em;
//   text-decoration: none;
//   color: #fff;
//   font-weight: 700;
//   background: #6088c6;
//   border: 1px solid #4072b3;
//   border-radius: 4px;
//   box-shadow: inset 0 1px 0 hsla(0, 0%, 100%, 0.2);
//   text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
//   cursor: pointer;
// }
//
</style>