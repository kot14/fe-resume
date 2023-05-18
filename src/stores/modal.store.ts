import { Component, ref } from "vue";
import { defineStore } from "pinia";

export type modalType = false | "skills" | "languages" | "projects" | "auth";

const useModalStore = defineStore("modalStore", () => {
  const currentModal = ref<modalType>(false);

  const openModal = (component: Component) => {};

  const modalActions = (action: modalType) => {
    currentModal.value = action;
  };

  return { currentModal, modalActions };
});

export default useModalStore;
