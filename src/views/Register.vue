<template>
  <div class="register-section-wrap">
    <section class="section-from">
      <a-form
        :model="formState"
        name="normal_register"
        class="register-form"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" placeholder="用户名"> </a-input>
        </a-form-item>
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username" placeholder="邮箱"> </a-input>
        </a-form-item>
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <div class="identifying-code">
            <a-input v-model:value="formState.username" placeholder="验证码"> </a-input>
            <a-button type="primary" class="identifying-code-button"
              >获取验证码</a-button
            >
          </div>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" placeholder="密码">
          </a-input-password>
        </a-form-item>
        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password" placeholder="确认密码">
          </a-input-password>
        </a-form-item>
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
              返回
            </a-button>
          </div>
        </a-form-item>
      </a-form>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

interface FormState {
  username: string
  password: string
  remember: boolean
}
export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true
    })
    const onFinish = (values: any) => {
      console.log('Success:', values)
    }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo)
    }
    const disabled = computed(() => {
      return !(formState.username && formState.password)
    })
    return {
      formState,
      onFinish,
      onFinishFailed,
      disabled
    }
  }
})
</script>

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
