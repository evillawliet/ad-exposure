import { exposure } from '../dist'

// 要观察的对象
const dom1 = document.getElementById('expr-1')
const dom5 = document.getElementById('expr-5')

const callback = (entries, observer) => {
  console.log(entries)
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed target element:
    // entry.boundingClientRect
    // entry.intersectionRatio
    // entry.intersectionRect
    // entry.isIntersecting
    // entry.rootBounds
    // entry.target
    // entry.time
    console.log('intersectionRatio', entry.intersectionRatio)
    console.log('isIntersecting', entry.isIntersecting)
  })
}

exposure(callback, dom5)
