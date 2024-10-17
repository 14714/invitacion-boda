<template>
  <div class="relative">
    <audio ref="backgroundAudio" :src="audioSource" loop />
    <button
      class="z-50 bg-primary rounded-full m-2 p-2 text-white fixed top-0 right-0"
      @click="playAudio"
    >
      <svg
        v-if="!audioOn"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="white"
        class="w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="white"
        class="w-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 5.25v13.5m-7.5-13.5v13.5"
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
            <esquinaSvg class="fill-secundaryDark" />
          </div>
          <div class="flex-1">
            <esquinaSvg
              class="fill-secundaryDark"
              style="transform: scaleX(-1); float: right"
            />
          </div>
        </div>
        <div class="mx-16">
          <h4 class="text-2xl playwrite-gb-s-one">{{ msg }}</h4>
          <div class="border-t border-secundaryDark my-4"></div>
          <h1 class="lg:text-8xl text-5xl qwitcher-grypen-bold">L & K</h1>
          <div class="border-t border-secundaryDark my-4"></div>
          <h4 class="lg:text-7xl text-5xl font-bold updock-regular">Luci & Kevin</h4>
        </div>
        <div class="mt-14">
          <detalleThree class="mx-auto fill-secundaryDark" />
          <h4 class="font-bold pt-2 playwrite-gb-s-bold">El Cantar de los Cantares 8:6</h4>
          <p class="lg:text-base text-sm text-center my-4 font-light playwrite-gb-s-one">
            "Ponme como un sello sobre tu corazon, como un sello sobre tu brazo,
            porque el amor es tan fuerte como la muerte, y la devocion total,
            tan exigente como la Tumba. Sus llamas son un fuego ardiente, la
            llama de Jah."
          </p>
          <detalleTwo class="mx-auto fill-secundaryDark stroke-secundaryDark" />
        </div>
        <div class="flex flex-1">
          <div class="flex-1 content-end">
            <esquinaSvg
              class="fill-secundaryDark"
              style="transform: scaleY(-1); float: left"
            />
          </div>
          <div class="flex-1 content-end">
            <esquinaSvg
              class="fill-secundaryDark"
              style="transform: scaleX(-1) scaleY(-1); float: right"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="playwrite-gb-s-normal">
    <Counter />
  </div>
  <div class="playwrite-gb-s-normal">
    <Agenda />
  </div>
  <div class="playwrite-gb-s-normal">
    <FotosBoda />
  </div>
  <div class="playwrite-gb-s-normal">
    <Fiesta />
  </div>
  <div class="playwrite-gb-s-normal">
    <Final />
  </div>
  <!-- Modal -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div
      class="text-primary flex flex-col h-full bg-white p-8 rounded-lg w-full lg:w-1/2 mx-auto text-center"
    >
      <div class="flex">
        <div class="flex-1">
          <esquinaSvg class="fill-secundaryDark" />
        </div>
        <div class="flex-1">
          <esquinaSvg
            class="fill-secundaryDark"
            style="transform: scaleX(-1); float: right"
          />
        </div>
      </div>
      <div class="mx-16">
        <h4 class="text-2xl playwrite-gb-s-one">Bienvenidos a la invitación de</h4>
        <div class="border-t border-secundaryDark my-4"></div>
        <h1 class="lg:text-8xl text-4xl qwitcher-grypen-bold">L & K</h1>
        <div class="border-t border-secundaryDark my-4"></div>
        <h4 class="lg:text-7xl text-3xl font-bold updock-regular">Luci & Kevin</h4>
      </div>
      <div class="lg:mt-14 mt-5">
        <detalleTwo class="mx-auto fill-secundaryDark stroke-secundaryDark" />
      </div>
      <button
        @click="playAudio(), closeModal()"
        class="mt-4 px-6 lg:py-5 py-2 font-bold text-cxl bg-primaryDark text-white rounded-lg"
      >
        Entrar
      </button>
      <div class="flex flex-1">
        <div class="flex-1 content-end">
          <esquinaSvg
            class="fill-secundaryDark"
            style="transform: scaleY(-1); float: left"
          />
        </div>
        <div class="flex-1 content-end">
          <esquinaSvg
            class="fill-secundaryDark"
            style="transform: scaleX(-1) scaleY(-1); float: right"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import esquinaSvg from "@/components/svg/esquinaSvg.vue";
import detalleThree from "@/components/svg/detalle-3.vue";
import detalleTwo from "@/components/svg/detalle-2.vue";
import Counter from "./Counter.vue";
import Agenda from "./Agenda.vue";
import FotosBoda from "./Fotos.vue";
import Fiesta from "./Fiesta.vue";
import Final from "./Final.vue";

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
      isModalOpen: false,
      audioOn: false,
    };
  },
  mounted() {
    document.title = "Luci & Kevin - Boda";
    this.openModal();
  },
  methods: {
    playAudio() {
      if (!this.audioOn) {
        this.$refs.backgroundAudio
          .play()
          .then(() => {
            console.log("Audio reproduciéndose.");
            this.audioOn = !this.audioOn;
          })
          .catch((error) => {
            console.error("Error al reproducir el audio:", error);
          });
      } else {
        this.stopMusic();
      }
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    stopMusic() {
      this.$refs.backgroundAudio.pause();
      // this.$refs.backgroundAudio.currentTime = 0;
      this.audioOn = !this.audioOn;
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
