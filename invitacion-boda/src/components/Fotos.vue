<template>
  <div class="bg-primary">
    <div class="flex fill-white space-x-4 pt-6">
      <Break />
      <Break />
      <Break />
      <Break />
    </div>
    <div class="pt-20">
      <DetalleFive class="mx-auto w-1/3 fill-white stroke-white" />
    </div>
    <div class="text-center text-white py-5">
      <h1 class="text-4xl">Retratos de Nuestro Amor</h1>
      <p class="">Un minuto, un segundo, un instante que queda en la eternidad</p>
    </div>
    <div class="pb-7">
        <Cam class="w-24 mx-auto" />
    </div>
    <swiper-container
      :slides-per-view="3"
      :space-between="spaceBetween"
      :centered-slides="true"
      :pagination="{
        hideOnClick: true,
      }"
      :breakpoints="{
        768: {
          slidesPerView: 3,
        },
      }"
      :loop="true"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      @progress="onProgress"
      @slidechange="onSlideChange"
    >
      <swiper-slide>
        <SlideImg :src="'1'" :position="'bottom'" @click="openModal('1')" />
      </swiper-slide>
      <swiper-slide>
        <SlideImg :src="'2'" :position="'bottom'" @click="openModal('2')" />
      </swiper-slide>
      <swiper-slide>
        <SlideImg :src="'3'" :position="'pos-one'" @click="openModal('3')" />
      </swiper-slide>
      <swiper-slide>
        <SlideImg :src="'4'" :position="'pos-two'" @click="openModal('4')" />
      </swiper-slide>
    </swiper-container>
    <div class="flex fill-white space-x-4 pb-6">
      <Break />
      <Break />
      <Break />
      <Break />
    </div>
    <!-- Modal -->
    <div
      v-if="showModal"
      class="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
    >
      <div class="relative p-4 bg-white">
        <button
          @click="closeModal"
          class="absolute top-0 right-0 p-2 text-black"
        >
          X
        </button>
        <img
          :src="selectedImage"
          alt="Modal Image"
          class="h-screen"
          @click="closeModal"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SlideImg from "./SlideImg.vue";
import Break from "./svg/Break.vue";
import Cam from "./svg/Cam.vue";
import DetalleFive from "./svg/detalle-5.vue";
import { register } from "swiper/element/bundle";

register();
export default {
  name: "FotosBoda",
  components: {
    SlideImg,
    Break,
    Cam,
    DetalleFive,
  },
  data() {
    return {
      images: [{ src: "1" }, { src: "2" }, { src: "3" }, { src: "4" }],
      showModal: false,
      selectedImage: null,
    };
  },
  setup() {
    const spaceBetween = 10;
    const onProgress = (e) => {
      const [, progress] = e.detail;
      console.log(progress);
    };

    const onSlideChange = () => {
      console.log("slide changed");
    };

    return {
      spaceBetween,
      onProgress,
      onSlideChange,
    };
  },
  methods: {
    openModal(image) {
      this.selectedImage = require(`@/assets/${image}.jpeg`);
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedImage = null;
    },
  },
};
</script>

<style scoped></style>
