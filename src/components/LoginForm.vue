<template>
  <section class="hero is-light is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <div class="box">
            <div class="column">
              <div id="nav">
                <router-link to="/">Iniciar sesión</router-link> |
                <router-link to="/about">Regístrate</router-link>
              </div>
            </div>
            <form>
              <b-field>
                <b-input></b-input>
              </b-field>
              <b-field>
                <b-input type="password" password-reveal> </b-input>
              </b-field>

              <b-field>
                <b-checkbox size="is-small">
                  Mantenerme conectado
                </b-checkbox>
              </b-field>
              <b-button type="is-primary" expanded fullwidth>
                Ingresar
              </b-button>
              <br />
              <small>
                Tambien puedes iniciar con tus redes
              </small>
              <br />
              <br />
              <b-button size="is-small" type="is-link" icon-left="facebook">
                Ingresar con Facebook
              </b-button>
              &nbsp;
              <b-button size="is-small" icon-left="google">
                Ingresar con Google
              </b-button>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="../">¿Olvidaste tu contraseña?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginForm'
}
</script>

<style>
#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<style>
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}

p {
  font-weight: 700;
}
p.subtitle {
  padding-top: 1rem;
}

.has-text-black {
  color: black;
}
</style>
