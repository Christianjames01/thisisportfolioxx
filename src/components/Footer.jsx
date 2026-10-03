import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="footer__note">Built with React and Vite.</p>
        <a href="#home" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
