<script lang="ts" setup>
import { reactive } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';
import { Loginer } from '@/common/type';
import { userStore } from '@/store/user';
import { Tip } from '@/utils/tip';

const router = useRouter();
const store_user = userStore();
const formState = reactive<Loginer>({
  username: 'lgp',
  password: '123456abc'
});

// 表单验证
const verifyUserName = [
  { required: true, message: '请填写用户名' },
  {
    pattern: /^[0-9A-Za-z_@/.]{3,20}$/,
    message: '请输入3-20位(数字,字母或下划线@.)',
    trigger: 'blur'
  }
];
const verifyPassWord = [
  { required: true, message: '请填写密码' },
  {
    pattern: /^[a-zA-Z0-9_-]{6,16}$/,
    message: '请输入6到16位(字母，数字，下划线，减号)',
    trigger: 'blur'
  }
];

// 验证成功后发送http请求
const onFinish = (values: Loginer) => {
  store_user
    .login({ user: values.username, password: values.password })
    .then(() => {
      router.push('/');
    })
    .catch((err) => {
      Tip('error', err.errors.errMsg, 2000);
    });
};
</script>

<template>
  <div class="login-section-wrap">
    <section class="section-avatar">
      <a-avatar :size="60" src="https://joeschmoe.io/api/v1/random" />
    </section>
    <section class="section-from">
      <a-form
        :model="formState"
        name="normal_login"
        class="login-form"
        @finish="onFinish"
      >
        <!--验证用户名 -->
        <a-form-item name="username" :rules="verifyUserName">
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>
        <!--验证密码 -->
        <a-form-item name="password" :rules="verifyPassWord">
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <!--发请求 -->
        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
          <div class="redirect">
            <div class="goto-register">
              <a href="">忘记密码?</a>
            </div>
            <div class="goto-register">
              <router-link to="/register">免费注册</router-link>
            </div>
          </div>
        </a-form-item>
      </a-form>
    </section>
  </div>
</template>

<style lang="scss" scoped>
$avatar_bottom: 40px;
$from_background: #fdf8fb;
$from_top: 20vh;
$from_max_width: 400px;
$button_height: 40px;
$input_height: 40px;
.login-section-wrap {
  margin-left: auto;
  margin-right: auto;
  transform: translateY($from_top);
  padding: 40px 25px 10px 25px;
  display: flex;
  max-width: $from_max_width;
  flex-direction: column;
  background-color: $from_background;
  .section-avatar {
    margin-bottom: $avatar_bottom;
    margin-left: auto;
    margin-right: auto;
  }
  .section-from {
    .login-form-button {
      width: 100%;
      height: $button_height;
    }
    .redirect {
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
    }
    .ant-input-affix-wrapper {
      height: $input_height;
    }
  }
}
</style>
