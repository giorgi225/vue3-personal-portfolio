<template>
  <div
    class="grid md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[auto,1fr] gap-6 w-full md:px-10 overflow-hidden pt-10 md:pt-20 scale-animation"
  >
    <div class="w-full h-full md:min-w-max">
      <div class="flex items-end gap-6">
        <h1
          class="font-mainBlack text-[8vw] md:text-[6vw] text-black md:max-w-[48vw] leading-[9vw] md:leading-[8vw] md:leading-[7vw] tracking-[1px]"
        >
          {{ t("web_designer") }}
          <span class="text-stroke-black">& {{ t("developer") }}</span>
        </h1>
      </div>
      <div class="flex items-center gap-6 mt-6 md:translate-x-[-40px]">
        <div class="w-full hidden md:flex max-w-[67px]">
          <img
            width="100"
            height="100"
            class="w-full toggle-image"
            src="@/assets/images/pointerArrow.svg"
            alt="Pointer-Arrow"
          />
        </div>
        <div class="flex flex-col gap-4">
          <p class="font-mainMedium text-base text-black-80 md:max-w-[418px]">
            {{ t("welcome_text") }}
          </p>
          <button @click="openContactModal"
            class="w-max px-7 py-3 bg-grayLight rounded text-sm font-mainMedium hover:bg-black-80 text-black hover:text-white hover:shadow-md active:scale-[0.98] active:bg-black transition-all"
          >
            {{ t("hire_me") }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <ContactModal v-if="contactModal" @closeModal="closeContactModal"/>
</template>

<script setup lang="ts">
import {Ref, ref} from 'vue'
import { useI18n } from "vue-i18n";
import { usePageMetaData } from "@/composables/usePageMetaData";

const { t } = useI18n();
const metaTitle = "Gigi Shalamberidze - Web Developer & Web Designer";
const metaDescription =
  "Passionate Web Developer & Web Designer with 2 years of experience from Tbilisi, Georgia. Let's create captivating websites!";
const metaKeywords =
  "Web Developer, Web Designer, Freelancer, 2 years experience, Tbilisi, Georgia";
usePageMetaData(metaTitle, metaDescription, metaKeywords);

const contactModal: Ref<boolean> = ref(false);
const openContactModal = () => {
  toggleContactModal();
};
const closeContactModal = () => {
  toggleContactModal();
};
const toggleContactModal = () => {
  contactModal.value = !contactModal.value;
};

</script>