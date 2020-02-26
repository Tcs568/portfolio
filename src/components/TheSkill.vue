<template>
  <section class="skills">
    <TitleHead :title="title" />
    <h3>{{ subtitle[0] }}</h3>
    <div class="skillsBar" v-for="item in frontSkills" v-bind="item" :key="item.id">
      <p>{{ item.label }}</p>
      <el-progress :percentage="(item.percentage)" :color="customColorMethod"></el-progress>
    </div>
    <h3>{{ subtitle[1] }}</h3>
    <div class="skillsBar" v-for="item in backSkills" v-bind="item" :key="item.id">
      <p>{{ item.label }}</p>
      <el-progress :percentage="(item.percentage)" :color="customColorMethod"></el-progress>
    </div>
    <h3>{{ subtitle[2] }}</h3>
    <div class="skillsBar" v-for="item in otherSkills" v-bind="item" :key="item.id">
      <p>{{ item.label }}</p>
      <el-progress :percentage="(item.percentage)" :color="customColorMethod"></el-progress>
    </div>
  </section>
</template>

<script>
import TitleHead from "@/components/TitleHead";

export default {
  name: "TheSkill",
  components: { TitleHead },
  data() {
    return {
      title: "Skills",
      subtitle: ["FrontEnd", "BackEnd", "Other"],
      frontSkills: [
        { label: "HTML5", percentage: 80 },
        { label: "CSS3/SCSS", percentage: 80 },
        { label: "Bootstrap4", percentage: 60 },
        { label: "Javascript", percentage: 60 },
        { label: "jQuery", percentage: 60 },
        { label: "Vue.js", percentage: 20 }
      ],
      backSkills: [
        { label: "PHP", percentage: 20 },
        { label: "Laravel", percentage: 20 },
        { label: "WordPress", percentage: 20 }
      ],
      otherSkills: [
        { label: "MySQL", percentage: 20 },
        { label: "Git", percentage: 40 },
        { label: "Gulp", percentage: 20 }
      ]
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#409EFF";
      } else if (percentage < 50) {
        return "#E6A23C";
      } else {
        return "#5cb87a";
      }
    }
  }
};
</script>

<style scoped>
.skills {
  padding-top: 14px;
  padding-bottom: 20px;
  text-align: center;
}
.skillsBar {
  padding-bottom: 8px;
  width: 80%;
  margin: 0 auto;
}

@media screen and (min-width: 560px) {
  .skillsBar {
    width: 50%;
  }
}
</style>