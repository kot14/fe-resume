<script setup lang="ts">
import { ref, onMounted } from "vue";

import HeaderSection from "./components/HeaderSection.vue";
import SkillSections from "./components/SkillsSection.vue";
import LanguageSection, { ILanguage } from "./components/LanguageSection.vue";
import FirebaseService from "./services/firebase.service";
import ProjectsSections, { IProjects } from "./components/ProjectsSections.vue";

export interface IUserInfo {
  name: string;
  jobRole: string;
  email: string;
  location: string;
  additionalLinks: string[];
  languages: ILanguage[];
  skills: string[];
  projects: IProjects[];
}

const defaultValues: IUserInfo = {
  name: "Add your name in configurator",
  jobRole: "",
  email: "",
  location: "",
  additionalLinks: [],
  languages: [],
  skills: [],
  projects: [],
};

const resumeData = ref<IUserInfo>();

onMounted(() => {
  FirebaseService.getResumeData()
    .then((res) => {
      resumeData.value = res.data() as IUserInfo;
    })
    .catch(() => {
      resumeData.value = defaultValues;
    });
});
</script>

<template>
  <div class="wrapper">
    <HeaderSection :data="resumeData"></HeaderSection>
    <div class="sections">
      <SkillSections :skills="resumeData?.skills"></SkillSections>
      <LanguageSection :languages="resumeData?.languages"></LanguageSection>
      <ProjectsSections :projects="resumeData?.projects"></ProjectsSections>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 10px;
}
.sections {
  display: flex;
  // gap: 50%;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    padding: 20px;
  }
}
</style>
