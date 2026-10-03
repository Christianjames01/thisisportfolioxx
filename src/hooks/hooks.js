import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Fades `.reveal` elements in as they scroll into view. Content is visible
 * by default: only elements that start below the fold get `.reveal-pending`,
 * and a timed fallback reveals anything left so nothing can stay hidden.
 * The hero animates with CSS alone and is skipped here.
 */
export function useReveal() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const inView = (el) => el.getBoundingClientRect().top < window.innerHeight * 0.92
    let pending = [...document.querySelectorAll('.reveal')].filter((el) => !el.closest('.hero') && !inView(el))
    pending.forEach((el) => el.classList.add('reveal-pending'))

    let frame = 0
    const check = () => {
      frame = 0
      pending = pending.filter((el) => {
        if (!inView(el)) return true
        el.classList.remove('reveal-pending')
        return false
      })
      if (!pending.length) stop()
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }
    const revealAll = () => {
      pending.forEach((el) => el.classList.remove('reveal-pending'))
      pending = []
      stop()
    }
    const stop = () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }

    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    const fallback = setTimeout(revealAll, 6000)

    return () => {
      clearTimeout(fallback)
      cancelAnimationFrame(frame)
      revealAll()
    }
  }, [])
}

/** Returns the id of the section currently in view, for the nav indicator. */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length || !('IntersectionObserver' in window)) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids])

  return active
}

/**
 * Checks whether a file in /public really exists (a missing file would
 * otherwise fall back to index.html). Returns null while checking.
 */
export function useFileExists(src, expectedType) {
  const [exists, setExists] = useState(null)

  useEffect(() => {
    if (!src) {
      setExists(false)
      return
    }
    let cancelled = false
    fetch(src, { method: 'HEAD', cache: 'no-store' })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        if (!cancelled) setExists(res.ok && type.includes(expectedType))
      })
      .catch(() => !cancelled && setExists(false))
    return () => {
      cancelled = true
    }
  }, [src, expectedType])

  return exists
}

const PROJECT_HASH = /^#project\/([\w-]+)$/

const readProjectHash = () => {
  const match = window.location.hash.match(PROJECT_HASH)
  return match ? match[1] : null
}

/**
 * Project detail routing through the URL hash (#project/<slug>), so a
 * detail view can be linked to directly and closed with the Back button.
 */
export function useProjectRoute() {
  const [slug, setSlug] = useState(readProjectHash)

  useEffect(() => {
    const onChange = () => setSlug(readProjectHash())
    window.addEventListener('hashchange', onChange)
    window.addEventListener('popstate', onChange)
    return () => {
      window.removeEventListener('hashchange', onChange)
      window.removeEventListener('popstate', onChange)
    }
  }, [])

  const open = (next) => {
    window.history.pushState({ project: next }, '', `#project/${next}`)
    setSlug(next)
  }

  const close = () => {
    if (window.history.state?.project) {
      window.history.back()
    } else {
      window.history.replaceState(null, '', '#projects')
      setSlug(null)
    }
  }

  return { slug, open, close }
}
