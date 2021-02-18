<template>
  <aside class="menu is-medium is-hidden-mobile">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p class="menu-label">Comunidades</p>
        </div>
      </div>
      <div class="media-right">
        <b-button type="is-text is-info is-inverted" size="is-small">
          Ver más
        </b-button>
      </div>
    </article>

    <ul class="menu-list">
      <li class="has-text-light is-right m-t-10" v-for="i in 3" :key="i">
        <article class="media">
          <figure class="media-left">
            <p class="image is-rounded is-32x32">
              <img
                class="is-rounded"
                src="https://avatars.dicebear.com/4.5/api/jdenticon/gggg.svg"
              />
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p class="title is-7">Comunidad de Programadores</p>
            </div>
          </div>
          <div class="media-right">
            <button class="button is-small is-rounded is-primary is-outlined">
              Unirme
            </button>
          </div>
        </article>
      </li>
    </ul>
  </aside>
</template>
