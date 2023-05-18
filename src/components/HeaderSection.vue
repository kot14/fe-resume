<script setup lang="ts">
import { computed } from "vue";

import useResumeStore from "../stores/resume.store";
import HeaderLinkItem from "./HeaderLinkItem.vue";

const resumeStore = computed(() => useResumeStore().resumeData);
// const props = defineProps<{ data?: IUserInfo }>();
</script>
<template>
  <div class="header" v-if="resumeStore">
    <div class="header__name">
      <span class="b1">{{ resumeStore.name.toUpperCase() }}</span>
    </div>
    <div class="header__role">
      <span class="m1">
        {{ resumeStore.jobRole }}
      </span>
    </div>
    <div class="header__links">
      <div class="header__links--main">
        <HeaderLinkItem
          :text="resumeStore.email"
          :type="'mail'"
          :image-src="'src/assets/images/email.png'"
          :clickable="true"
        ></HeaderLinkItem>
        <HeaderLinkItem
          :text="resumeStore.location"
          :image-src="'src/assets/images/location.png'"
        ></HeaderLinkItem>
      </div>
      <div class="header__links--additional">
        <template v-for="link of resumeStore.additionalLinks">
          <HeaderLinkItem
            :text="link"
            :type="'site'"
            :image-src="'src/assets/images/link.png'"
            :clickable="true"
          ></HeaderLinkItem>
        </template>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  &__name {
    .b1 {
      font-weight: 800;
    }
  }
  &__role {
    .m1 {
      font-weight: 600;
      color: var(--color-blue);
    }
  }
  &__links {
    padding: 5px 0;
    &--main {
      display: flex;
      gap: 15px;
    }
    &--additional {
      padding: 10px 0;
    }
  }
}
</style>
