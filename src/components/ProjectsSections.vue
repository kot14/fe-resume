<template>
  <div class="projects">
    <SectionTitle :text="'Projects'"></SectionTitle>
    <div class="projects__list">
      <div
        class="projects__list-item"
        v-for="(project, idx) of props.projects"
        :key="idx"
      >
        <div class="header">
          <span class="m1">{{ project.name }}</span>
          <div class="date-and-location">
            <div class="date-container">
              <img src="src/assets/images/calendar.png" alt="" />
              <span class="s2"
                >{{ project.date.from }} - {{ project.date.to }}</span
              >
            </div>
            <div class="location-container">
              <img src="src/assets/images/project-location.png" alt="" />
              <span class="s2">{{ project.location }}</span>
            </div>
          </div>
        </div>
        <span class="s2">
          {{ project.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from "./SectionTitle.vue";

export interface IProjects {
  date: { from: string; to: string };
  location: string;
  name: string;
  text: string;
}

const props = defineProps<{ projects?: IProjects[] }>();
</script>

<style scoped lang="scss">
.projects {
  min-width: 480px;

  &__list {
    flex-direction: column;
    display: flex;
    &-item {
      padding: 10px 0;
      text-align: left;
      .header {
        padding: 10px 0;
        .date-and-location {
          justify-content: flex-start;
          display: flex;
          gap: 48px;
          .date-container,
          .location-container {
            font-weight: 600;
            img {
              padding-right: 10px;
              width: 13px;
            }
          }
        }
      }
    }
  }
}
</style>
