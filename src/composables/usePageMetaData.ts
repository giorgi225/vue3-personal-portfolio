import { useHead } from "@vueuse/head";
import { ref, onMounted } from "vue";

import OgImage from "@/assets/images/thumbnail.svg";

export function usePageMetaData(
  title: string,
  description: string,
  keywords: string
) {
  const pageTitle = ref(title);
  const pageDescription = ref(description);

  onMounted(() => {
    pageTitle.value = title;
    pageDescription.value = description;
  });

  useHead({
    title: pageTitle,
    meta: [
      {
        name: "description",
        content: pageDescription,
      },
      {
        name: "keywords",
        content: keywords,
      },
      {
        name: "author",
        content: "Gigi Shalamberidze",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
      },
      // Open Graph tags
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:image",
        content: OgImage,
      },
    ],
  });
}
