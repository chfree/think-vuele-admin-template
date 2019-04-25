<template>
  <div class="login-container">
    <div class="login-card">
      <tc-form class="login-form" label-width="90px">
        <div class="title-container">
          <h3 class="title">think-vue-admin</h3>
        </div>
        <div class="login-form-content">
          <tc-form-item label="用户名" prop="username">
            <tc-input ref="username" v-model="loginForm.username" placeholder="Username" name="username" type="text" tabindex="1" auto-complete="on"/>
          </tc-form-item>

          <tc-form-item label="密码" prop="password">
            <tc-input :key="passwordType" ref="password" v-model="loginForm.password" :type="passwordType" placeholder="Password" name="password" tabindex="2" auto-complete="on" />
          </tc-form-item>

          <tc-button :loading="loading" type="primary" class="loginButton">Login</tc-button>
        </div>
      </tc-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: 'admin',
        password: '111111'
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  }
}
</script>

<style lang="scss">
$bg:#283443;
.login-container{
  background-color: $bg;
  height: 100vh;
}
$login-card-width:500px;
$login-card-height:270px;
.login-card{
  position: absolute;
  width: $login-card-width;
  height: $login-card-height;
  background-color: #fff;
  border:1px solid #333;
  border-radius: 5px;
  left: 50%;
  top: 45%;
  margin-left: -$login-card-width/2;
  margin-top: -$login-card-height/2;
}

 .title-container {
  .title {
    font-size: 26px;
    margin: 10px auto 30px auto;
    text-align: center;
    font-weight: bold;
  }
}
.login-form{
  .login-form-content{
    padding: 0px 40px 0px 0px;
    .loginButton{
      width:calc(100% - 90px);
      margin-bottom:10px;
      margin-left: 90px;
    }
  }
}

</style>