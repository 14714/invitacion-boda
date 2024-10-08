<template>
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
          <h4 class="text-2xl font-bold">LUCIA & KEVIN</h4>
        </div>
        <div class="mt-14">
          <detalleThree class="mx-auto" />
          <p class="text-center my-4">
            "Ponme como un sello sobre tu corazon, como un sello sobre tu brazo,
            porque el amor es tan fuerte como la muerte, y la devocion total,
            tan exigente como la Tumba. Sus llamas son un fuego ardiente, la
            llama de Jah."
          </p>
          <detalleTwo class="mx-auto" />
        </div>
        <div class="flex flex-1">
          <div class="flex-1 content-end">
            <esquinaSvg style="transform: scaleY(-1); float: left;" />
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
</template>

<script>
import esquinaSvg from "@/components/svg/esquinaSvg.vue";
import detalleThree from "@/components/svg/detalle-3.vue";
import detalleTwo from "@/components/svg/detalle-2.vue";
import Counter from "./Counter.vue"

import anillos from "@/components/svg/anillos.svg";
import camara from "@/components/svg/camara.svg";
import corneta from "@/components/svg/corneta.svg";
import detalle_1 from "@/components/svg/detalle-1.svg";
import detalle_2 from "@/components/svg/detalle-2.svg";
import dress from "@/components/svg/dress.svg";
import esquina_portada from "@/components/svg/esquina-portada.svg";
import heart from "@/components/svg/heart.svg";
import tips from "@/components/svg/tips.svg";

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
  },
  data() {
    return {
      anillos: anillos,
      camara: camara,
      corneta: corneta,
      detalle_1: detalle_1,
      detalle_2: detalle_2,
      dress: dress,
      esquina_portada: esquina_portada,
      heart: heart,
      tips: tips,
    };
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
