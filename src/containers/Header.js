import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { LinearProgress } from 'material-ui'
import * as actions from '../actions'
import * as services from '../services'

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = { isOpen: false }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  redirectToLocale(locale) {
    window.location.pathname = `/${locale}`
  }

  render() {
    return (
      <div>
        {this.props.loader > 0 && <MuiThemeProvider>
          <LinearProgress
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', borderRadius: 0, zIndex: 9999 }}
            mode={'indeterminate'}
          />
        </MuiThemeProvider>}

        <Navbar color={'light'} light expand={'md'}>
          <Link className={'navbar-brand'} to={`/${this.props.locale}`}>
            <img style={{ marginRight: 5 }} src={this.props.site.logo_url} width={30} height={30} alt={this.props.site.title} />
            {this.props.site.title}
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className={'nav-link'} to={`/${this.props.locale}/blog`}>
                  {services.translate(this.props.locale, 'posts')}
                </Link>
              </NavItem>
              {this.props.pages.map((page, index) => (
                <NavItem key={index}>
                  <Link className={'nav-link'} to={`/${this.props.locale}/${services.translate(this.props.locale, 'pages')}/${page.slug}`} onClick={() => this.props.dispatch(actions.setCurrent(page))}>
                    {page.title}
                  </Link>
                </NavItem>
              ))}

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {this.props.locale}
                </DropdownToggle>
                {!!this.props.site.locales.length && <DropdownMenu right>
                  {this.props.site.locales.map((locale, index) => (
                    <DropdownItem onClick={() => this.redirectToLocale(locale)} key={index}>{locale}</DropdownItem>
                  ))}
                </DropdownMenu>}
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default connect((state, props) => ({
  locale: state.locale,
  loader: state.loader,
  site: state.site,
  pages: state.pages
}))(Header)
