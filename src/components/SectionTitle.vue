<template>
  <div class="section-title">
    <div
      class="section-title__text-container"
      @click="() => openConfigModal(props.text)"
    >
      <span class="m1">{{
        props.text ? props.text.toUpperCase() : "Choose a name"
      }}</span>
      <img src="src/assets/images/config.png" alt="" />
    </div>
    <div class="section-title__bottom-line"></div>
  </div>
</template>

<script setup lang="ts">
import useModalStore, { modalType } from "../stores/modal.store";

const props = defineProps<{ text: modalType }>();
const openConfigModal = (type: modalType): void =>
  useModalStore().modalActions(type);
</script>

<style scoped lang="scss">
.section-title {
  text-align: left;
  &__text-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    .m1 {
      font-weight: 800;
    }
    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
  &__bottom-line {
    width: 100%;
    height: 5px;
    background-color: black;
  }
}
</style>
