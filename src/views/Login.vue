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
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="username"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix>
              <UserOutlined class="site-form-item-icon" />
            </template>
          </a-input>
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
          <div class="redirect">
            <div class="goto-register">
              <a href="">忘记密码?</a>
            </div>
            <div class="goto-register">
              <a href="">免费注册</a>
            </div>
          </div>
        </a-form-item>
      </a-form>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'

interface FormState {
  username: string
  password: string
  remember: boolean
}
export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined
  },
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
