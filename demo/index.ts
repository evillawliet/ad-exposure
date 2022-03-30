import { exposure } from '../dist'

// 要观察的对象
const dom1 = document.getElementById('expr-1')
const dom5 = document.getElementById('expr-5')

exposure({
  ele: [dom1!, dom5!],
  fallback: () => {
    console.log('wobaoguang')
  },
}, {
  infinite: true,
})
exposure({
  ele: [dom5!],
  fallback: (e) => {
    console.log('wobaoguang2', e)
  },
}, {
  infinite: true,
  threshold: [0, 0.5, 1],
})
