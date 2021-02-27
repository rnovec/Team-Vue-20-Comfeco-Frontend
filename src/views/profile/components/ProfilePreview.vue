<template>
  <div class="card">
    <div class="is-flex is-justify-content-flex-end mt-2 mr-3">
      <a href=""><small>Editar perfil</small></a>
    </div>
    <div class="card-image is-flex is-justify-content-center">
      <figure class="image my-2 is-128x128">
        <img class="is-rounded" src="https://placehold.it/128x128" />
      </figure>
    </div>
    <div class="card-content has-text-centered">
      <h1 class="title is-6 is-block">
        {{ loguedUser.displayName }}
      </h1>
      <h2 class="subtitle is-7 is-block">
        Frontend Developer / UX
      </h2>
      <div class="content">
        <p>
          Laborum quis anim velit laboris ea est id mollit nulla qui. Do
          cupidatat mollit irure aliqua in eu sint culpa non Lorem dolor tempor
          sint consequat. Ullamco Lorem magna dolor laboris id Lorem adipisicing
          commodo consequat officia.
        </p>
      </div>
    </div>
    <div class="card">
      <footer class="card-footer"></footer>
    </div>
  </div>
</template>
