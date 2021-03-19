<template>
  <div>
    <Navbar />
    <router-view />
    <BottomNav />
    <Footer />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar";
  import BottomNav from "@/components/BottomNav";
  import Footer from "@/components/Footer";
  export default {
    name: "DefaultLayout",
    components: {
      Navbar,
      BottomNav,
      Footer,
    },
  };
</script>

<style>
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
