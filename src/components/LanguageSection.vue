<template>
  <div class="language" v-if="languages">
    <SectionTitle :text="'languages'"></SectionTitle>
    <div class="language__list">
      <div class="language__list-item" v-for="language of languages">
        <div class="language__list-item__type">
          <span class="s1"> {{ language.language }}</span>
          <span class="s2" v-if="language.experience">
            {{ language.experience.level }}</span
          >
        </div>
        <div class="language__list-item__expirience" v-if="language.experience">
          <div
            class="language__list-item__expirience-dot"
            v-for="index in 5"
            :key="index"
            :class="{ active: index <= language.experience.points }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import useResumeStore from "../stores/resume.store";
import SectionTitle from "./SectionTitle.vue";

export interface ILanguage {
  language: string;
  experience: {
    level:
      | "Beginer"
      | "Pre-intermediate"
      | "Intermediate"
      | "Upper-Intermediate"
      | "Advanced"
      | "Native";
    points: number;
  };
}

export interface ILanguageProps {
  languages?: ILanguage[];
}

const languages = computed(() => useResumeStore().resumeData?.languages);
</script>

<style scoped lang="scss">
@import "src/assets/screen-sizes.scss";

.language {
  width: 400px;

  @media #{$md-screen} {
    width: 100%;
  }
  &__list {
    // gap: 15px;
    display: flex;
    flex-direction: column;

    &-item {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px dotted gray;
      padding: 10px 0;
      //   padding-top: 10px;
      //   padding-bottom: 5px;
      //   > div {
      //   }
      &__type {
        display: flex;
        flex-direction: column;
        align-items: self-start;

        .s1 {
          font-weight: 500;
        }
      }
      &__expirience {
        width: 124px;
        display: flex;
        justify-content: center;
        align-items: space-between;
        gap: 5px;
        &-dot {
          width: 15px;
          height: 15px;
          background-color: black;
          border: 1px solid gray;
          border-radius: 50%;
          &.active {
            background-color: var(--color-blue);
          }
        }
      }
    }
  }
}
</style>
