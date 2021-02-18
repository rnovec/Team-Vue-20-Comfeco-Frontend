<template>
  <div>
    <Navbar />
    <section class="hero is-light is-fullheight mt-3">
      <div class="hero-body">
        <div class="box">
          <router-view />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import Footer from "@/components/Footer";
  export default {
    name: "AuthLayout",
    components: {
      Navbar,
      Footer,
    },
  };
</script>

<style scoped>
  .hero-body {
    justify-content: center;
    background: linear-gradient(
      50deg,
      rgba(82, 30, 135, 0.8) 0%,
      rgba(102, 28, 137, 0.8) 9.87%,
      rgba(138, 23, 140, 0.8) 30.04%,
      rgba(151, 43, 123, 0.8) 36.71%,
      rgba(189, 101, 73, 0.8) 58.41%,
      rgba(217, 144, 37, 0.8) 76.96%,
      rgba(235, 170, 14, 0.8) 91.4%,
      rgba(241, 180, 6, 0.8) 99.97%
    );
  }
  .box {
    max-width: 400px;
  }
  .separator {
    /* Paleta de colores */
    background: linear-gradient(
      90deg,
      #521e87 0.01%,
      #5c1d88 14.55%,
      #751a8a 38.82%,
      #8a178c 54.92%,
      #8e1c87 56.27%,
      #c36e42 77.54%,
      #e4a017 92.6%,
      #f1b406 99.98%
    );
  }
</style>
