<script setup lang="ts">
import { onMounted } from "vue";

import Modal from "./components/Modal.vue";
import useResumeStore from "./stores/resume.store";
import HeaderSection from "./components/HeaderSection.vue";
import SkillSections from "./components/SkillsSection.vue";
import LanguageSection from "./components/LanguageSection.vue";
import ProjectsSections from "./components/ProjectsSections.vue";
import SkillModal from "./components/modal-components/SkillModal.vue";
import useModalStore from "./stores/modal.store";

const resumeStore = useResumeStore();
const modalStore = useModalStore();

onMounted(() => {
  console.log(resumeStore.getDataFromDB());
});
</script>

<template>
  <div class="wrapper">
    <HeaderSection></HeaderSection>
    <Modal v-if="modalStore.currentModal">
      <SkillModal v-if="modalStore.currentModal === 'skills'"></SkillModal>
    </Modal>
    <div class="sections">
      <SkillSections></SkillSections>
      <LanguageSection></LanguageSection>
      <ProjectsSections></ProjectsSections>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding: 10px;
  position: relative;
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
