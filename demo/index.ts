import { exposure } from '../dist'

// 要观察的对象
const dom5 = document.getElementById('expr-5')

exposure({
  ele: [dom5!],
}, {
  infinite: true,
  threshold: [0, 0.5, 1],
})
