import SrsInput from '../'

export default {
  title: 'SrsInput',
  component: SrsInput
}

export const Text = () => ({
  components: { SrsInput },
  template: '<srs-input v-model="value"></srs-input>',
  data () {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { SrsInput },
  template: '<srs-input type="password" v-model="value"></srs-input>',
  data () {
    return {
      value: ''
    }
  }
})