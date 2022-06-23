<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useEnterStore } from '@/store/enter.ts';
import { Tip } from '@/utils/tip';
import { RegisterForm } from '@/common/type.ts';

const router = useRouter();
const store = useEnterStore();
const formState = reactive<RegisterForm>({
  username: 'lgp',
  email: '122974945@qq.com',
  securityCode: '1234',
  password: '123456abc',
  checkPass: '123456abc'
});
const timer = reactive({
  timing: false,
  time: 60
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
const verifyEmail = [
  { required: true, message: '请填写邮箱' },
  {
    pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    message: '请填写正确的邮箱',
    trigger: 'blur'
  }
];
const verifyPassWord = [
  { required: true, message: '请填写密码' },
  {
    pattern: /^[a-zA-Z0-9_]{6,16}$/,
    message: '请输入6到16位(字母，数字，下划线)',
    trigger: 'blur'
  }
];
const verifyCheckPass = [
  { required: true, message: '验证密码' },
  {
    pattern: /^[a-zA-Z0-9_]{6,16}$/,
    message: '两次输入不一致',
    trigger: 'blur'
  }
];

// 获取验证码
const getSecurityCode = () => {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  // 如果邮箱填写并且格式正确就发送验证码
  if (formState.email && reg.test(formState.email)) {
    Tip('success', '验证码已发送', 1500);
    timer.timing = true;
    const timeId = setInterval(() => {
      if (timer.time > 0) {
        timer.time -= 1;
      } else {
        timer.timing = false;
        timer.time = 60;
        window.clearInterval(timeId);
      }
    }, 1000);
    store.getSecurityCode(formState.email).catch(() => {
      Tip('error', '发送失败请重试');
    });
  } else if (formState.email && !reg.test(formState.email)) {
    Tip('error', '邮箱格式有误');
  } else {
    Tip('error', '请先填写邮箱');
  }
};

const onFinish = () => {
  store
    .register({
      username: formState.username,
      email: formState.email,
      password: formState.password,
      securityCode: formState.securityCode
    })
    .then(() => {
      Tip('success', '注册成功!2秒后跳转至登录页', 2000);
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    })
    .catch((err) => {
      Tip('error', err.errors.errMsg, 2000);
    });
};
</script>

<template>
  <div class="register-section-wrap">
    <section class="section-from">
      <a-form
        :model="formState"
        name="normal_register"
        class="register-form"
        @finish="onFinish"
      >
        <!--用户名-->
        <a-form-item name="username" :rules="verifyUserName">
          <a-input v-model:value="formState.username" placeholder="用户名"> </a-input>
        </a-form-item>
        <!--邮箱-->
        <a-form-item name="email" :rules="verifyEmail">
          <a-input v-model:value="formState.email" placeholder="邮箱"> </a-input>
        </a-form-item>
        <!--邮箱验证码-->
        <a-form-item name="securityCode">
          <div class="identifying-code">
            <a-input v-model:value="formState.securityCode" placeholder="验证码">
            </a-input>
            <a-button
              v-if="!timer.timing"
              type="primary"
              class="identifying-code-button"
              @click="getSecurityCode"
              >获取验证码</a-button
            >
            <a-button
              v-else
              type="primary"
              disabled
              class="identifying-code-button"
              @click="getSecurityCode"
              >{{ `${timer.time} 秒后可获取` }}</a-button
            >
          </div>
        </a-form-item>
        <!--用户密码-->
        <a-form-item name="password" :rules="verifyPassWord">
          <a-input-password v-model:value="formState.password" placeholder="密码">
          </a-input-password>
        </a-form-item>
        <!--密码二次验证-->
        <a-form-item name="checkPass" :rules="verifyCheckPass">
          <a-input-password v-model:value="formState.checkPass" placeholder="确认密码">
          </a-input-password>
        </a-form-item>
        <!--发请求-->
        <a-form-item>
          <div class="button-action">
            <a-button type="primary" html-type="submit" class="register-form-button">
              注册
            </a-button>
            <a-button
              type="primary"
              html-type="submit"
              class="register-form-button"
              style="background-color: white"
            >
              返回登录
            </a-button>
          </div>
        </a-form-item>
      </a-form>
    </section>
  </div>
</template>

<style lang="scss" scoped>
$from_background: #fdf8fb;
$from_top: 20vh;
$from_max_width: 400px;
$button_height: 40px;
$input_height: 40px;
body {
  border: 10px solid red;
}
.register-section-wrap {
  margin-left: auto;
  margin-right: auto;
  transform: translateY($from_top);
  padding: 40px 25px 10px 25px;
  max-width: $from_max_width;
  background-color: $from_background;
  .section-from {
    .register-form-button {
      width: 100%;
      height: $button_height;
      color: black;
    }
    .redirect {
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
    }
    .identifying-code {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      .identifying-code-button {
        height: $button_height;
      }
    }
    .button-action {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .ant-input-affix-wrapper {
      height: $input_height;
    }
    #normal_register_username {
      height: $input_height;
    }
  }
}
</style>
