<template>
  <div
    class="item"
    :style="{ cursor: props.clickable ? 'pointer' : 'default' }"
    @click="openLink(props.text)"
  >
    <img
      class="item__image"
      v-if="props.imageSrc"
      :style="{
        width: props.imageSize,
        height: props.imageSize,
      }"
      :src="props.imageSrc"
    />
    <span class="s1">{{ props.text }}</span>
  </div>
</template>

<script setup lang="ts">
export interface ILinkItem {
  text: string;
  imageSrc?: string;
  imageSize?: string;
  clickable?: boolean;
  type?: "mail" | "site";
}

const props = defineProps<ILinkItem>();

const openLink = (url: string) => {
  console.log(props.type);
  if (props.clickable && props.type) {
    window.open(props.type === "mail" ? `mailto:${url}` : url);
  }
};
</script>

<style scoped lang="scss">
.item {
  display: flex;
  align-items: center;
  width: max-content;
  .s1 {
    font-weight: 400;
  }
  &__image {
    width: 21px;
    height: 20px;
    padding-right: 10px;
    color: var(--color-blue);
  }
}
</style>
