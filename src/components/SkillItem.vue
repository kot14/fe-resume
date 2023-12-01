<template>
  <div
    class="skill__item"
    :style="{ cursor: options?.create ? 'pointer' : 'default' }"
  >
    <span class="s1" @click.stop="focusAction()" v-if="!focused">
      {{ props.skill }}
    </span>
    <div class="skill__item-input-container" v-if="focused">
      <img src="src/assets/images/close.png" alt="" />
      <input
        class="s1"
        v-model="newSkill"
        v-auto-focus
        @keydown.enter="addSkill()"
      />
      <img src="src/assets/images/add.png" alt="" @click.stop="addSkill()" />
    </div>

    <img
      @click="deleteSkill(idx)"
      v-if="options?.old"
      src="src/assets/images/close.png"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useToggle } from "@vueuse/core";

import useResumeStore from "../stores/resume.store";

const resumeStore = useResumeStore();
const newSkill = ref<string>();

const props = defineProps<{
  skill: string;
  idx: number;
  options?: { old?: boolean; create?: boolean };
}>();

const [focused, toggle] = useToggle();

const focusAction = (action?: string) => {
  if (props.options?.create && action !== "add") {
    toggle();
  }
};

const addSkill = () => {
  if (newSkill.value && newSkill.value.length > 0) {
    resumeStore.updateValues("skills", newSkill.value);
    toggle();
    newSkill.value = "";
  }
};

const deleteSkill = (idx: number) => {
  resumeStore.deleteValues("skills", idx);
};
</script>

<style scoped lang="scss">
@import "src/assets/screen-sizes.scss";
.skill__item {
  background-color: var(--color-blue);
  border-radius: 15px;
  padding: 5px 10px;
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  .s1 {
    font-weight: 600;
  }
  img {
    width: 20px;
    cursor: pointer;
  }

  &-input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    input {
      background: transparent;
      outline: none;
      border: unset;
      border-bottom: 1px solid gray;
      padding: 0 3px;
      width: 70%;
      color: var(--color-white);
      font-family: "roboto";
    }
  }
  @media #{$md-screen} {
    padding: 3px 0px;
    .s1 {
      font-size: 12px;
    }
    img {
      width: 12px;
    }
  }
}
</style>
