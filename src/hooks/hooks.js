import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Fades `.reveal` elements in as they scroll into view. Content is fully
 * visible without JavaScript or when the user prefers reduced motion —
 * the hidden state only applies once `html.reveal-ready` is set.
 */
export function useReveal() {
  useEffect(() => {
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) return
    const root = document.documentElement
    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    document.querySelectorAll('.reveal:not(.hero .reveal)').forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      root.classList.remove('reveal-ready')
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
