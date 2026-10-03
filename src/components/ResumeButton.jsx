import { profile } from '../data/profile'
import { Download } from './Icons'

/**
 * Download button for /public/resume.pdf. Hidden in production until the
 * file exists; during development a disabled placeholder reminds you to add it.
 */
export default function ResumeButton({ available, variant = 'secondary' }) {
  const { src, downloadName } = profile.resume

  if (available) {
    return (
      <a href={src} download={downloadName} className={`btn btn--${variant}`}>
        <Download /> Download Resume
      </a>
    )
  }

  if (import.meta.env.DEV && available === false) {
    return (
      <span
        className={`btn btn--${variant} btn--disabled`}
        aria-disabled="true"
        title="Add your resume at public/resume.pdf"
      >
        <Download /> Resume — add public/resume.pdf
      </span>
    )
  }

  return null
}
