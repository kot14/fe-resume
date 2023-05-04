<template>
  <div class="skill" v-if="props">
    <SectionTitle :text="'Skills'"></SectionTitle>
    <div class="skill__items">
      <div class="skill__item" v-for="skill of props.skills">
        <span class="s1">{{ skill }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "./SectionTitle.vue";

export interface ISkill {
  skills?: string[];
}

const props = defineProps<ISkill>();
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
  &__item {
    background-color: var(--color-blue);
    border-radius: 15px;
    padding: 5px 10px;
    min-width: 60px;
    .s1 {
      font-weight: 600;
    }

    @media #{$md-screen} {
      padding: 3px 0px;
      .s1 {
        font-size: 12px;
      }
    }
  }
}
</style>
