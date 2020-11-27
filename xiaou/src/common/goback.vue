<template>
  <div>
      <a href="javascript:;" @click="back"></a>
  </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
@import '../assets/css/public.css';
</style>