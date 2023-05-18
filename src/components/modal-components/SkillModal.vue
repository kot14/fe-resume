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

const userSkills = computed(() => useResumeStore().resumeData?.skills);
</script>

<style scoped lang="scss">
.skill-list {
  display: flex;
  gap: 20px;
  width: max-content;
  padding: 20px;
}
</style>
