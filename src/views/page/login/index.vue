<template>
  <div class="login-container">
    <div class="login-card">

    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
.login-container{
  background-color: rgb(174, 203, 230);
  height: 100vh;
}
$login-card-width:440px;
$login-card-height:260px;
.login-card{
  position: absolute;
  width: $login-card-width;
  height: $login-card-height;
  background-color: #fff;
  border:1px solid #333;
  border-radius: 5px;
  left: 50%;
  top: 50%;
  margin-left: -$login-card-width/2;
  margin-top: -$login-card-height/2;
}
</style>