<template>
  <div>
    <h4>{{content}}</h4>
  </div>
</template>
<script type='text/javascript'>
export default {
  name: "NewsList",
  data() {
    return {
      content: ''
    };
  },

  mounted() {
    var id = this.$route.params.id;
    console.log(id);
    this.bus.$on("details", content => {
      this.content = content;
      console.log(this.content)
    });
  }
};
</script>
<style scoped>
</style>