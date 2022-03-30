interface ObserverTarget {
  ele: HTMLElement | HTMLElement[]
  fallback?: (entry: IntersectionObserverEntry) => void
}

interface ObserverConfig extends IntersectionObserverInit {
  infinite?: boolean
}

const isArray = Array.isArray

export function exposure(target: ObserverTarget | ObserverTarget[], options?: ObserverConfig) {
  const weakMap = new WeakMap()

  try {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          weakMap.get(entry.target)?.(entry)
          if (!options?.infinite) {
            observer?.unobserve(entry.target)
            weakMap.delete(entry.target)
          }
        }
      }
    }, {
      root: options?.root || null,
      threshold: options?.threshold || 1,
      rootMargin: options?.rootMargin || '0px',
    })

    if (isArray(target)) {
      target.forEach((t) => {
        if (isArray(t.ele)) {
          t.ele.forEach((e) => {
            observer.observe(e)
            weakMap.set(e, t.fallback)
          })
        }
        else {
          observer.observe(t.ele)
          weakMap.set(t.ele, t.fallback)
        }
      })
    }
    else {
      if (isArray(target.ele)) {
        target.ele.forEach((e) => {
          observer.observe(e)
          weakMap.set(e, target.fallback)
        })
      }
      else {
        observer.observe(target.ele)
        weakMap.set(target.ele, target.fallback)
      }
    }
  }
  catch (error) {

  }
}
