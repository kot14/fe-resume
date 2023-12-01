<template>
  <div class="modal">
    <img
      src="src/assets/images/close.png"
      class="modal-close"
      @click="modalStore.modalActions(false)"
    />
    <h1 class="modal-title m1">{{ modalStore.currentModal }}</h1>
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
  min-height: 400px;
  min-width: 600px;
  padding: 10px;
  margin: auto;
  left: 0;
  right: 0;
  border: 2px solid black;
  &-close {
    position: absolute;
    cursor: pointer;
    width: 25px;
    right: 15px;
    top: 25px;
  }
  &-close:active {
    transform: scale(0.9);
    transition: transform linear 0.1s;
  }
  &-title {
    text-transform: capitalize;
    margin-top: 12px;
  }

  @media (prefers-color-scheme: light) {
    :root {
      color: #213547;
      background-color: #ffffff;
    }
  }
}
</style>
