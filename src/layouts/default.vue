<template>
  <div>
    <Navbar />
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container is-fluid">
          <div class="columns">
            <div class="column mt-4 is-3 is-hidden-mobile">
              <Communities />
            </div>
            <div class="column is-6 has-text-centered">
              <router-view></router-view>
            </div>
            <div class="column mt-4 is-3 is-hidden-mobile">
              <Workshops />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import Workshops from "@/components/Workshops";
  import Communities from "@/components/Communities";
  import Footer from "@/components/Footer";
  export default {
    name: "DefaultLayout",
    components: {
      Navbar,
      Workshops,
      Communities,
      Footer,
    },
  };
</script>

<style>
  .is-fixed-at-top {
    position: -webkit-sticky;
    position: sticky;
    top: 90px;
  }
  .m-l-5 {
    margin-left: 5px !important;
  }
  .p-t-30 {
    padding-top: 30px !important;
  }
  .p-b-30 {
    padding-bottom: 30px !important;
  }
  .m-t-10 {
    margin-top: 10px !important;
  }
  .m-t-30 {
    margin-top: 30px !important;
  }
  .m-t-50 {
    margin-top: 50px !important;
  }
  .m-t-60 {
    margin-top: 60px !important;
  }
  .b-t {
    border-top: 1px solid #e2e8ef;
  }
  .title {
    font-weight: 600;
  }
  .field.has-shadow-field {
    -webkit-box-shadow: 0 5px 30px hsla(224, 8%, 64%, 0.25) !important;
    box-shadow: 0 5px 30px hsla(224, 8%, 64%, 0.25) !important;
  }
  .hero.is-light .subtitle,
  .subtitle {
    color: #99a6b3;
  }
</style>
