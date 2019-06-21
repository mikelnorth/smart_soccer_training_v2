import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >

    <div
      style={{
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>

    <nav
      style={{
        display: 'flex',
        width: 'fit-content',
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
          marginRight: '.5vw'
        }}
      >
        Home
      </Link>

      <Link to="/page-2"
        style={{
          color: 'white',
          textDecoration: 'none',
          marginRight: '.5vw'
        }}
      >
        Page-2
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
