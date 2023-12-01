<template>
  <div class="skill-list">
    <template v-for="(skill, idx) of userSkills">
      <SkillItem :skill="skill" :idx="idx" :options="{ old: true }"></SkillItem>
    </template>
    <SkillItem
      :skill="'Add new'"
      :idx="999"
      :options="{ create: true }"
    ></SkillItem>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import useResumeStore from "../../stores/resume.store";
import SkillItem from "../SkillItem.vue";

const userSkills = computed(() =>
  useResumeStore().resumeData?.skills.sort((a, b) => b.length - a.length)
);
</script>

<style scoped lang="scss">
.skill-list {
  margin: auto;
  display: flex;
  gap: 20px;
  width: 90%;
  padding: 20px 0;
  flex-wrap: wrap;
  justify-content: start;
}
</style>
