<template>
  <div class="modal">
    <img
      src="src/assets/images/close.png"
      class="modal-close"
      @click="modalStore.modalActions(false)"
    />
    <slot> </slot>
  </div>
</template>

<script setup lang="ts">
import useModalStore from "../stores/modal.store";

const modalStore = useModalStore();
</script>

<style scoped lang="scss">
.modal {
  background-color: #242424;
  border-radius: 5px;
  position: absolute;
  width: min-content;
  padding: 20px;
  margin: auto;
  left: 0;
  right: 0;
  border: 2px solid black;
  &-close {
    position: absolute;
    cursor: pointer;
    width: 25px;
    right: 5px;
    top: 5px;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
  }
}
</style>
