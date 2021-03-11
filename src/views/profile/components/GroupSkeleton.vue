<template>
  <div class="card">
    <div class="card-image">
      <b-skeleton size="is-large" height="100px"></b-skeleton>
    </div>
    <div class="card-content">
      <div class="content">
        <b class="tag mb-4"><b-skeleton width="64px"></b-skeleton></b>
        <h5><b-skeleton size="is-large" height="20px"></b-skeleton></h5>
        <p class="is-size-7">
          <b-skeleton
            size="is-large"
            height="10px"
            active
            :count="3"
          ></b-skeleton>
        </p>
      </div>
    </div>
    <div class="card-footer">
      <a class="card-footer-item"><b-skeleton size="is-large"></b-skeleton></a>
    </div>
  </div>
</template>
