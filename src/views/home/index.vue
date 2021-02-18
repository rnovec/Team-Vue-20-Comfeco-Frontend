<template>
  <div class="home">
    <section class="section">
      <h1 class="title is-4 has-text-centered is-block">
        Bienvenidos a Community Fest and Code
      </h1>
      <h2 class="subtitle is-5 has-text-centered is-block">
        Proident veniam consectetur proiden.
      </h2>
      <p class="is-size-6 has-text-centered is-block">
        Veniam occaecat elit et ut consequat Lorem eu ad esse eiusmod ipsum
        aliqua sint. Velit tempor est labore dolor mollit mollit ullamco
        cupidatat consequat fugiat ipsum dolore anim.
      </p>
      <br />
      <h3 class="title is-5">Ellos creen en esta iniciativa:</h3>
      <Speaker />
      <SpeakerMobile />
    </section>
    <section class="section">
      <div class="is-flex is-justify-content-space-between">
        <h1 class="title is-4">Sponsors</h1>
        <b-button type="is-primary" outlined size="is-small"
          >Apoyar iniciativa</b-button
        >
      </div>
      <Sponsors />
      <SpeakerMobile />
    </section>
    <section class="section">
      <h1 class="title is-5">Preparate lo mejor esta por venir</h1>
      <Counter />
    </section>
  </div>
</template>

<script>
  import { Counter, Speaker, Sponsors, SpeakerMobile } from "./components";

  export default {
    name: "Home",
    components: {
      Counter,
      Speaker,
      Sponsors,
      SpeakerMobile,
    },
  };
</script>

<style>
  .section {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }
</style>
