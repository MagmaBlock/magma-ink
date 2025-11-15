<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed, ref } from "vue";

const props = defineProps<{
  title: string;
  link: string;
  desc: string;
  img?: string;
  premium?: boolean; // 尊贵友联
}>();

const isImageError = ref(false);

const hasCover = computed(() => props.img && isImageError.value === false);

const onImageError = () => {
  isImageError.value = true;
};
</script>

<template>
  <div
    class="flex flex-nowrap items-stretch h-24 gap-5 rounded-[var(--radius-large)]"
    :class="props.premium ? ' font-serif' : ''"
  >
    <div
      class="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900"
    >
      <img
        v-if="hasCover"
        :src="img"
        alt="站点头像"
        class="w-full h-full object-cover"
        @error="onImageError"
      />
    </div>
    <div class="grow w-full flex flex-col justify-center gap-1">
      <div
        class="font-bold transition"
        :class="
          props.premium
            ? 'text-yellow-600'
            : 'text-neutral-700 dark:text-neutral-200'
        "
      >
        {{ title }}
      </div>
      <div class="text-50 text-sm font-medium mb-1">{{ desc }}</div>
    </div>
    <a
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="flex btn-regular w-16 rounded-lg bg-[var(--enter-btn-bg)] hover:bg-[var(--enter-btn-bg-hover)] active:bg-[var(--enter-btn-bg-active)] active:scale-95"
    >
      <Icon
        icon="material-symbols:chevron-right-rounded"
        class="transition text-[var(--primary)] text-3xl mx-auto"
      >
      </Icon>
    </a>
  </div>
</template>
