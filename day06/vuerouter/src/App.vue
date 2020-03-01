<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-offset-1 col-xs-9">
        <div class="page-header">
          <h2>Router 普通路由</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-1">
        <div class="list-group">
          <router-link to="/Home" class="list-group-item">Home</router-link>
          <router-link to="/About" class="list-group-item">About</router-link>
          <router-link to="/User" class="list-group-item">User</router-link>
        </div>
      </div>
      <div class="col-xs-7">
        <div data-v-957c9522 class="col-xs-7">
          <div data-v-957c9522 class="panel">
            <div data-v-957c9522 class="panel-body">
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type='text/javascript'>
export default {
    name:'App'
};
</script>
<style scoped>
</style>