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
          <div class="goto-register">
            <a href="">register now!</a>
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
.login-section-wrap {
  margin-left: auto;
  margin-right: auto;
  transform: translateY(30vh);
  background-color: #f7f1fc;
  padding: 40px 30px 10px 30px;
  display: flex;
  max-width: 350px;
  flex-direction: column;
  .section-avatar {
    margin-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
  }
  .section-from {
    .login-form-button {
      width: 100%;
    }
    .goto-register {
      display: flex;
      justify-content: end;

      padding-top: 30px;
    }
  }
}
</style>
