<template>
  <div class="bg-primaryDark">
    <div class="flex fill-white space-x-4 py-5">
      <Break />
      <Break />
      <Break />
      <Break />
    </div>
    <div class="flex text-white">
      <div class="text-center flex-1">
        <div class="border-t border-primary my-4 w-1/2 lg:w-1/3 mx-auto"></div>
        <h1 class="text-8xl">L&K</h1>
        <div class="border-t border-primary my-4 w-1/2 lg:w-1/3 mx-auto"></div>
        <h4 class="text-2xl font-bold">LUCI & KEVIN</h4>
      </div>
      <div class="flex-1 content-center text-center ">
        <a class="text-xl hover:text-primaryLight ease-in duration-300" href="https://wa.me/+5492995344972">
            Confirmar Asistencia por WhatsApp
        </a>
      </div>
    </div>
    <div class="flex fill-white space-x-4 py-5">
      <Break />
      <Break />
      <Break />
      <Break />
    </div>
  </div>
</template>

<script>
import Break from "./svg/Break.vue";
export default {
  name: "FinalDiv",
  components: {
    Break,
  },
};
</script>

<style scoped></style>
