<template>
  <aside class="menu is-medium is-fixed-at-top is-hidden-mobile">
    <article class="media">
      <div class="media-content">
        <div class="content">
          <p class="menu-label">Talleres</p>
        </div>
      </div>
      <div class="media-right">
        <b-button type="is-text is-info is-inverted" size="is-small">
          Ver más
        </b-button>
      </div>
    </article>
    <b-select placeholder="Small" size="is-small" expanded>
      <option value="flint">Flint</option>
      <option value="silver">Silver</option>
    </b-select>
    <table class="table is-fullwidth is-striped">
      <tbody
        style="max-height: 50px;
    overflow-y: scroll;"
      >
        <tr v-for="_ in 5" :key="_">
          <td width="1%">
            <i class="fas fa-check" aria-hidden="true"></i>
          </td>
          <td>
            <p class="is-size-7">
              <strong
                >Sint ipsum nisi sunt in ex proident incididunt nisi eu sit
                adipisicing incididunt excepteur sunt.</strong
              >
            </p>
            <p class="is-size-7">@johndoe</p>
            <p class="is-size-7">
              <strong>By</strong> <a href="">Raul Novelo</a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </aside>
</template>
