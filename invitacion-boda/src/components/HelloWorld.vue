<template>
  <div class="relative">
    <audio ref="backgroundAudio" :src="audioSource" loop />
    <button class="z-50 bg-primary rounded-full m-2 p-2 text-white fixed top-0 right-0" @click="playAudio">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        />
      </svg>
    </button>
  </div>
  <div class="lg:flex lg:h-screen grid">
    <div class="background-image lg:flex-1 lg:h-screen h-[60vh]"></div>
    <div class="lg:flex-1 text-center lg:h-screen">
      <div class="text-primary flex flex-col h-full p-6">
        <div class="flex">
          <div class="flex-1">
            <esquinaSvg />
          </div>
          <div class="flex-1">
            <esquinaSvg style="transform: scaleX(-1); float: right" />
          </div>
        </div>
        <div class="mx-16">
          <h4 class="text-2xl">{{ msg }}</h4>
          <div class="border-t border-primary my-4"></div>
          <h1 class="text-8xl">L&K</h1>
          <div class="border-t border-primary my-4"></div>
          <h4 class="text-2xl font-bold">LUCI & KEVIN</h4>
        </div>
        <div class="mt-14">
          <detalleThree class="mx-auto" />
          <p class="text-center my-4 font-light">
            "Ponme como un sello sobre tu corazon, como un sello sobre tu brazo,
            porque el amor es tan fuerte como la muerte, y la devocion total,
            tan exigente como la Tumba. Sus llamas son un fuego ardiente, la
            llama de Jah."
          </p>
          <detalleTwo class="mx-auto" />
        </div>
        <div class="flex flex-1">
          <div class="flex-1 content-end">
            <esquinaSvg style="transform: scaleY(-1); float: left" />
          </div>
          <div class="flex-1 content-end">
            <esquinaSvg
              style="transform: scaleX(-1) scaleY(-1); float: right"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <Counter />
  </div>
  <div>
    <Agenda />
  </div>
  <div>
    <FotosBoda />
  </div>
  <div>
    <Fiesta />
  </div>
  <div>
    <Final />
  </div>
</template>

<script>
import esquinaSvg from "@/components/svg/esquinaSvg.vue";
import detalleThree from "@/components/svg/detalle-3.vue";
import detalleTwo from "@/components/svg/detalle-2.vue";
import Counter from "./Counter.vue";
import Agenda from "./Agenda.vue";
import FotosBoda from "./Fotos.vue";
import Fiesta from './Fiesta.vue';
import Final from './Final.vue'

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    esquinaSvg,
    detalleThree,
    detalleTwo,
    Counter,
    Agenda,
    FotosBoda,
    Fiesta,
    Final,
  },
  data() {
    return {
      audioSource: require("@/assets/audio.mp3"),
    };
  },
  mounted() {
    document.title = "Luci & Kevin - Boda";
  },
  methods: {
    playAudio() {
      this.$refs.backgroundAudio
        .play()
        .then(() => {
          console.log("Audio reproduciéndose.");
        })
        .catch((error) => {
          console.error("Error al reproducir el audio:", error);
        });
    },
  },
};
</script>

<style scoped>
.background-image {
  background-image: url("../assets/img-1.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset -10px 0 7px rgba(0, 0, 0, 0.5);
}
</style>
