<template>
  <div class="about">
    <History />
    <Skill />
  </div>
</template>

<script>
import Skill from "@/components/TheSkill";
import History from "@/components/TheHistory";

export default {
  name: "TheAbout",
  components: {
    Skill,
    History
  }
};
</script>
