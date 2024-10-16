<template>
  <div class="m-5 border-primary border relative z-0">
    <div class="relative flex z-10">
      <div
        class="flex-1 absolute top-0 left-0 z-20 -translate-x-px -translate-y-px"
      >
        <EsquinaDot class="w-12" style="" />
      </div>
      <div
        class="flex-1 absolute top-0 right-0 z-20 translate-x-px -translate-y-px"
      >
        <EsquinaDot class="w-12" style="transform: scaleX(-1); float: right" />
      </div>
    </div>
    <div class="flex py-10">
      <div class="flex-1">
        <div
          class="mx-auto w-2/3 text-center text-white rounded-[30px] bg-primary"
        >
          <Anillo class="mx-auto py-3 fill-white stroke-white" />
          <h1 class="text-4xl">Ceremonia</h1>
          <DetalleFour class="px-10 mt-2" />
          <div class="mt-10">
            <h2 class="text-2xl">Dia</h2>
            <p>Dia 17 de Enero del 2025</p>
            <p>17:15hs</p>
            <!-- <button class="bg-primaryDark mt-3 px-10 py-3 rounded-lg">
              Agendar
            </button> -->
          </div>
          <div class="mt-7">
            <h2 class="text-2xl">Lugar</h2>
            <p>Salón del Reino de los Testigos de Jehová</p>
            <!-- <button class="bg-primaryDark mt-3 px-10 py-3 rounded-lg">
              Confirmar Assitencia
            </button> -->
          </div>
          <div class="mt-7 pb-10">
            <h2 class="text-2xl">Dirección</h2>
            <p>Senillosa Neuquen</p>
            <div class="mt-5">
              <a href="https://maps.app.goo.gl/V3BMsZDFhvwP94W79" class="bg-primaryDark mt-7 px-10 py-3 rounded-lg">
                ¿Como Llegar?
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <div
          class="mx-auto w-2/3 text-center text-white rounded-[30px] bg-primary"
        >
          <Corneta class="mx-auto py-3 fill-white stroke-white" />
          <h1 class="text-4xl">Fiesta</h1>
          <DetalleFour class="px-10 mt-2" />
          <div class="mt-10">
            <h2 class="text-2xl">Dia</h2>
            <p>Dia 17 de Enero del 2025</p>
            <p>20:30hs</p>
            <!-- <button class="bg-primaryDark mt-3 px-10 py-3 rounded-lg">
              Agendar
            </button> -->
          </div>
          <div class="mt-7">
            <h2 class="text-2xl">Lugar</h2>
            <p>Salón de eventos "Lo de Roberto"</p>
            <!-- <button class="bg-primaryDark mt-3 px-10 py-3 rounded-lg">
              Confirmar Assitencia
            </button> -->
          </div>
          <div class="mt-7 pb-10">
            <h2 class="text-2xl">Dirección</h2>
            <p>Senillosa Neuquen</p>
            <button class="bg-primaryDark mt-3 px-10 py-3 rounded-lg">
              ¿Como Llegar?
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="relative flex z-10 -translate-y-11">
      <div
        class="flex-1 absolute top-0 left-0 z-20 -translate-x-px -translate-y-px"
      >
        <EsquinaDot class="w-12" style="transform: scaleY(-1); float: left" />
      </div>
      <div
        class="flex-1 absolute top-0 right-0 z-20 translate-x-px -translate-y-px"
      >
        <EsquinaDot class="w-12" style="transform: scaleY(-1) scaleX(-1); float: right" />
      </div>
    </div>
  </div>
</template>

<script>
import Anillo from "./svg/Anillo.vue";
import Corneta from "./svg/Corneta.vue";
import EsquinaDot from "./svg/esquinaDot.vue";
import DetalleFour from "./svg/detalle-4.vue";

export default {
  name: "AgendaFiesta",
  components: {
    Anillo,
    DetalleFour,
    Corneta,
    EsquinaDot,
  },
};
</script>

<style scoped></style>
