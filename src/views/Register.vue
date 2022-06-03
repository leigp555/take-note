<template>
  <div class="login-section-wrap">
    <section class="section-from">
      <a-form
        :model="formState"
        name="normal_login"
        class="login-form"
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
          <div style="display: flex; justify-content: space-between; gap: 10px">
            <a-input v-model:value="formState.username" placeholder="验证码"> </a-input>
            <a-button type="primary" style="height: 40px">获取验证码</a-button>
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
          <div class="action" style="display: flex; flex-direction: column; gap: 20px">
            <a-button type="primary" html-type="submit" class="login-form-button">
              注册
            </a-button>
            <a-button
              type="primary"
              html-type="submit"
              class="login-form-button"
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
.login-section-wrap {
  margin-left: auto;
  margin-right: auto;
  transform: translateY(20vh);
  padding: 40px 25px 10px 25px;
  display: flex;
  max-width: 350px;
  flex-direction: column;
  background-color: #fdf8fb;

  .section-from {
    .login-form-button {
      width: 100%;
      height: 40px;
      color: black;
    }
    .redirect {
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
    }
    .ant-input-affix-wrapper {
      height: 40px;
    }
    #normal_login_username {
      height: 40px;
    }
  }
}
</style>
