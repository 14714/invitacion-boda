<template>
  <div>
    <div class="pt-20">
      <DetalleFive class="mx-auto w-1/3 fill-primary stroke-primary" />
    </div>
    <div class="text-center text-primary py-6">
      <h1 class="text-4xl">Fiesta</h1>
      <p class="text-xl">
        Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta
      </p>
    </div>
    <div class="lg:flex text-white fill-white stroke-white">
      <div class="bg-primary flex-1 m-5 rounded-[30px] p-5 text-center">
        <h1 class="text-2xl pb-5">Dress Code</h1>
        <Corbata class="w-24 mx-auto pb-5" />
        <p>Una orientación para tu vestuario</p>
        <button
          @click="openModal('dressCode')"
          class="text-white bg-primaryDark hover:bg-primaryLight mt-3 px-10 py-3 rounded-lg"
        >
          Ver más
        </button>
      </div>
      <div class="bg-primary flex-1 m-5 rounded-[30px] p-5 text-center">
        <h1 class="text-2xl pb-5">Tips y Notas</h1>
        <Libreta class="w-12 mx-auto pb-5" />
        <p>Información adicional para tener en cuenta</p>
        <button
          @click="openModal('tips')"
          class="text-white bg-primaryDark hover:bg-primaryLight mt-3 px-10 py-3 rounded-lg"
        >
          Ver más
        </button>
      </div>
    </div>

    <!-- Modal -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-8 rounded-lg max-w-lg mx-auto text-center">
        <h2 class="text-3xl mb-4">{{ modalTitle }}</h2>
        <h3 class="text-2xl py-2">{{ tituloModal }}</h3>
        <p class="font-light text-base py-2" v-if="preTexto">{{ preTexto }}</p>
        <p class="font-bold text-center">{{ modalTexto }}</p>
        <p class="font-light text-center">{{ modalContent }}</p>
        <p class="font-light text-xs py-2" v-if="postTexto">{{ postTexto }}</p>
        <button
          @click="closeModal"
          class="mt-4 px-6 py-2 bg-primaryDark text-white rounded-lg"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DetalleFive from "./svg/detalle-5.vue";
import Corbata from "./svg/Corbata.vue";
import Libreta from "./svg/Libreta.vue";

export default {
  name: "FiestaDiv",
  components: {
    DetalleFive,
    Corbata,
    Libreta,
  },
  data() {
    return {
      isModalOpen: false,
      modalTitle: "",
      modalTexto: "",
      modalContent: "",
      tituloModal: "",
      preTexto: "",
      postTexto: "",
    };
  },
  methods: {
    openModal(type) {
      this.isModalOpen = true;
      if (type === "dressCode") {
        this.preTexto = false,
        this.postTexto = false,
        this.modalTexto = "1 Timoteo 2:9";
        this.modalTitle = "Dress Code";
        this.tituloModal = "Formal - Gala";
        this.modalContent =
          " \" Igualmente [...] deben vestirse con ropa apropiada y arreglarse con modestia y buen juicio \" .";
      } else if (type === "tips") {
        this.preTexto = "En una ocacion tan especial queremos q nuestro comportamiento demuestre respeto y agradecimiento por este bonito amor a nuestro padre Jehová";
        this.postTexto = "Sugerencia para padres: Para asegurarnos de que todos disfruten al máximo, les pedimos que sus pequeños se comporten de la mejor manera posible durante momentos especiales como la ceremonia y el vals de los novios. Agradecemos de antemano su comprensión y apoyo. ¡Estamos emocionados de celebrar juntos!";
        this.modalTexto = "1 Corintios 10:31";
        this.modalTitle = "Tips y Notas";
        this.tituloModal = "";
        this.modalContent =
          " \" Por eso, ya sea que estén comiendo, bebiendo o haciendo cualquier otra cosa, háganlo todo para la gloria de Dios.\" .";
      }
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped>
/* Estilos adicionales para el modal */
</style>
