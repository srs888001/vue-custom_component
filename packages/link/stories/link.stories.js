import SrsLink from '../src/link.vue'

export default {
  title: 'SrsLink',
  component: SrsLink
}

export const Link = _ => ({
  components: { SrsLink },
  template: `
    <div>
      <Srs-link :disabled="true" href="http://www.baidu.com">baidu</Srs-link>
    </div>
  `
})