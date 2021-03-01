<template>
  <section>
    <article class="media box" v-for="i in media" :key="i">
      <figure class="media-left">
        <p class="image">
          <b-skeleton circle width="45px" height="45px"></b-skeleton>
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <b-skeleton active height="15px"></b-skeleton>
          <b-skeleton width="64px" height="8px"></b-skeleton>
        </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small">
                <b-skeleton width="100px" height="12px"></b-skeleton>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        media: 5,
      };
    },
  };
</script>
