import PropTypes from 'prop-types'

// {text} - destructurized props
function Header( {text} ) {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header
