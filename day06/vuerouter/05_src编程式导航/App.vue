<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router 普通路由</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <router-link to="/Home" class="list-group-item">Home</router-link>
          <router-link to="/About" class="list-group-item">About</router-link>
          <router-link to="/User" class="list-group-item">User</router-link>-->
          <div @click="toHome" class="list-group-item" :class="{active:homeActive}">Home</div>
          <div @click="toAbout" class="list-group-item" :class="{active:aboutActive}">About</div>
          <div @click="toUser" class="list-group-item" :class="{active:userActive}">User</div>
        </div>
      </div>
      <div class="col-xs-6">
        <div data-v-957c9522 class="col-xs-6">
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
  name: "App",
  data() {
    return {
      //编辑式导航就不能使用路由的配置：linkActiveClass，需要自己配置高亮
      homeActive: true,
      aboutActive: false,
      userActive: false
    };
  },
  methods: {
    toHome() {
      this.homeActive = true;
      this.aboutActive = false;
      this.userActive = false;
      this.$router.push("/Home");
    },
    toAbout() {
      this.homeActive = false;
      this.aboutActive = true;
      this.userActive = false;
      this.$router.push("/About");
    },
    toUser() {
      this.homeActive = false;
      this.aboutActive = false;
      this.userActive = true;
      this.$router.push("/User");
    }
  }
};
</script>
<style scoped>
</style>