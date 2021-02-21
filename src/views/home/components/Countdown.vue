<template>
  <nav class="level">
    <div class="level-item has-text-centered">
      <div>
        <p class="title is-1">
          {{ currentTime ? `${currentTime.days}` : "" }}
        </p>
        <p class="heading is-1" v-if="currentTime">Días</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="center title" v-if="!currentTime">
          LLego el momento!!
        </p>
        <p class="title is-1">
          {{ currentTime ? `${("0" + currentTime.hours).slice(-2)}` : "" }}
        </p>
        <p class="heading is-1" v-if="currentTime">Horas</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="title is-1">
          {{ currentTime ? `${("0" + currentTime.minutes).slice(-2)}` : "" }}
        </p>
        <p class="heading is-1" v-if="currentTime">Minutos</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="title is-1">
          {{ currentTime ? `${("0" + currentTime.seconds).slice(-2)}` : "" }}
        </p>
        <p class="heading is-1" v-if="currentTime">Segundos</p>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    name: "contador",
    props: {
      speed: {
        type: Number,
        default: 1000,
      },
    },
    data() {
      return {
        currentTime: null,
      };
    },
    mounted() {
      setTimeout(this.countdown, 1);
    },
    methods: {
      countdown() {
        const deadline = new Date("Feb 22 2022 00:16:09 GMT-0600");
        const t = deadline - Date.parse(new Date());
        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        if (t > 0) {
          this.currentTime = {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
          };
          setTimeout(this.countdown, this.speed);
        } else {
          this.currentTime = null;
        }
      },
    },
  };
</script>
