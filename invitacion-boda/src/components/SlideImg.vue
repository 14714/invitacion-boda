<template>
  <div class="bg-white">
    <div class="p-4 pb-20 mb-24 shadow-md">
      <img
        :class="`h-36 lg:h-72 w-full object-cover object-${position}`"
        :src="imageSrc"
        alt="ImagenPa"
      />
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import img4 from "@/assets/4.jpeg";

export default {
  name: "SlideImg",
  props: {
    src: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: "center", // Valor predeterminado
      validator: (value) =>
        [
          "top",
          "center",
          "bottom",
          "left",
          "right",
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
        ].includes(value),
    },
  },
  computed: {
    imageSrc() {
      const images = {
        1: img1,
        2: img2,
        3: img3,
        4: img4,
      };
      return images[this.src] || "";
    },
  },
};
</script>

<style scoped></style>
