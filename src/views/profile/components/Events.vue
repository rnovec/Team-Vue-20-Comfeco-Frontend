<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        <small>Eventos de tu interés</small>
      </p>
      <a class="card-header-icon" aria-label="more options">
        <small>Ver más</small>
      </a>
    </header>
    <div class="box card mb-2" v-for="_ in 3" :key="_">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Más información</a>
      </footer>
    </div>
  </div>
</template>
