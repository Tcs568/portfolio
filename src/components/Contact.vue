<template>
  <section id="Contact">
    <h1 class="Contact__title">Contact</h1>
    <div class="ContactForm" v-for="(item,i) of texts" :key="i">
      <p class="contactForm__text">{{ item.message }}</p>
      <div class="ContactForm__Info" v-for="(item,i) of items" :key="i">
        <li class="ContactForm__item">
          <router-link class="Contactform__link" v-bind:to="item.path">
            <span>
              <font-awesome-icon icon="envelope" />
            </span>
            {{ item.title }}
          </router-link>
        </li>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      items: [
        {
          title: "honamitanabe01@gmail.com",
          path: "/profile"
        }
      ],
      texts: [{ message: "お気軽にご連絡ください" }]
    };
  }
};
</script>