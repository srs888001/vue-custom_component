import SrsForm from '../'
import SrsFormItem from '../../formitem'
import SrsInput from '../../input'
import SrsButton from '../../button'

export default {
  title: 'SrsForm',
  component: SrsForm
}

export const Login = () => ({
  components: { SrsForm, SrsFormItem, SrsInput, SrsButton },
  template: `
    <Srs-form class="form" ref="form" :model="user" :rules="rules">
      <Srs-form-item label="用户名" prop="username">
        <!-- <Srs-input v-model="user.username"></Srs-input> -->
        <Srs-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></Srs-input>
      </Srs-form-item>
      <Srs-form-item label="密码" prop="password">
        <Srs-input type="password" v-model="user.password"></Srs-input>
      </Srs-form-item>
      <Srs-form-item>
        <Srs-button type="primary" @click="login">登 录</Srs-button>
      </Srs-form-item>
    </Srs-form>
  `,
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login () {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})
