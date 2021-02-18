<template>
  <aside class="menu is-medium is-hidden-mobile">
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
      <tbody>
        <tr>
          <td width="1%">
            <i class="fas fa-check" aria-hidden="true"></i>
          </td>
          <td>
            <p class="is-size-6"><strong>John Smith</strong></p>
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
