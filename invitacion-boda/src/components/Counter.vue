<template>
  <div>
    <div class="text-center bg-primary text-white py-8">
      <div class="flex fill-white space-x-4">
        <Break />
        <Break />
        <Break />
        <Break />
      </div>
      <h1 class="text-4xl py-8">Faltan</h1>
      <div class="py-6">
        <div class="flex lg:w-1/2 w-11/12 mx-auto text-center">
          <div class="flex-1">
            <h1 class="text-3xl">
              {{ days }}
            </h1>
            <p>dias</p>
          </div>
          <div class="flex-1 border-l">
            <h1 class="text-3xl">
              {{ hours }}
            </h1>
            <p>hs</p>
          </div>
          <div class="flex-1 border-l">
            <h1 class="text-3xl">
              {{ minutes }}
            </h1>
            <p>min</p>
          </div>
          <div class="flex-1 border-l">
            <h1 class="text-3xl">
              {{ seconds }}
            </h1>
            <p>seg</p>
          </div>
        </div>
      </div>
      <div class="pb-8">
        <Heart class="fill-white mx-auto" />
      </div>
      <div>
        <p class="pb-2 font-light">"Confirmar antes del 10 Dic"</p>
      </div>
      <div class="flex fill-white space-x-4">
        <Break />
        <Break />
        <Break />
        <Break />
      </div>
    </div>
  </div>
</template>

<script>
import Break from "./svg/Break.vue";
import Heart from "./svg/Heart.vue";

export default {
  name: "CounterOne",
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      intervalId: null,
    };
  },
  components: {
    Break,
    Heart,
  },
  mounted() {
    this.startCountdown();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startCountdown() {
      const endDate = new Date("2025-01-17T00:00:00").getTime();
      this.intervalId = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
          clearInterval(this.intervalId);
          this.days = 0;
          this.hours = 0;
          this.minutes = 0;
          this.seconds = 0;
          return;
        }

        this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      }, 1000);
    },
  },
};
</script>

<style scoped></style>
