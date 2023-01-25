import * as React from "react"
import { Link } from "gatsby"
import FooterSocialIcons from "./footer-social-icons";

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>

      <header className="global-header">
        {header}
        <div className="header-actions">
          <Link className="header-nav-link" to="/about/">소개</Link>
        </div>
      </header>
      <main>{children}</main>
      <footer className="d-flex">
        <div className="copyright-text">© Woogear Kwon</div>
        <div className="footer-icon-group"><FooterSocialIcons/></div>
      </footer>
    </div>
  )
}

export default Layout
