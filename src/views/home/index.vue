<template>
  <div class="columns">
    <div class="column mt-4 is-3 is-hidden-mobile">
      <Communities />
    </div>
    <div class="column is-6 has-text-centered">
      <section>
        <h1 class="title is-4 has-text-centered is-block">
          Bienvenidos a Community Fest and Code
        </h1>
        <h2 class="subtitle is-6 has-text-centered is-block">
          Proident veniam consectetur proiden.
        </h2>
        <p class="is-size-7 has-text-centered is-block">
          Veniam occaecat elit et ut consequat Lorem eu ad esse eiusmod ipsum
          aliqua sint. Velit tempor est labore dolor mollit mollit ullamco
          cupidatat consequat fugiat ipsum dolore anim.
        </p>
        <br />
        <h3 class="title is-5">Ellos creen en esta iniciativa:</h3>
        <Speakers />
      </section>
      <section>
        <div class="is-flex is-justify-content-space-between">
          <h1 class="title is-5">Sponsors</h1>
          <b-button type="is-primary" outlined size="is-small"
            >Apoyar iniciativa</b-button
          >
        </div>
        <Sponsors />
      </section>
      <section>
        <h1 class="has-text-weight-bold is-size-5 mb-2">
          Preparate lo bueno esta por venir
        </h1>
        <section class="hero countdown is-primary is-small">
          <div class="hero-body">
            <div class="container">
              <Countdown />
            </div>
          </div>
        </section>
      </section>
    </div>
    <div class="column mt-4 is-3 is-hidden-mobile">
      <Workshops />
    </div>
  </div>
</template>

<script>
  import {
    Countdown,
    Speakers,
    Workshops,
    Communities,
    Sponsors,
  } from "./components";

  export default {
    name: "Home",
    components: {
      Countdown,
      Speakers,
      Workshops,
      Communities,
      Sponsors,
    },
  };
</script>

<style lang="scss">
  $gradient: linear-gradient(
    100deg,
    #521e87 0.01%,
    #5c1d88 14.55%,
    #751a8a 38.82%,
    #8a178c 54.92%,
    #8e1c87 56.27%,
    #c36e42 77.54%,
    #e4a017 92.6%,
    #f1b406 99.98%
  );
  .section {
    padding-bottom: 0;
  }
  .hero.countdown {
    background: $gradient;
  }
</style>
