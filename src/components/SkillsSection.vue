<template>
  <div class="skill" v-if="skills">
    <SectionTitle :text="'skills'"></SectionTitle>
    <div class="skill__items">
      <template v-for="(skill, idx) of skills" :key="idx">
        <SkillItem :skill="skill" :idx="idx"></SkillItem>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import useResumeStore from "../stores/resume.store";
import SectionTitle from "./SectionTitle.vue";
import SkillItem from "./SkillItem.vue";

const skills = computed(() => useResumeStore().resumeData?.skills);
</script>

<style scoped lang="scss">
@import "src/assets/screen-sizes.scss";

.skill {
  max-width: 600px;
  min-width: 480px;

  @media #{$md-screen} {
    min-width: unset;
    max-width: unset;

    width: 100%;
  }
  &__items {
    flex-wrap: wrap;
    display: flex;
    padding: 15px;
    gap: 20px;

    @media #{$md-screen} {
      padding: 13px 0;
      gap: 10px;
    }
  }
}
</style>
