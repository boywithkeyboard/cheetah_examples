import cheetah from 'cheetah'

const app = new cheetah()
  .get('/', () => 'Hello World')

export default app
