import React from 'react'
import Link from 'next/link'
import './styles.scss'
import logo from '../../static/medly-logo.png'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
})

const Header = ({displayDriverIndex=0})=>(
      <div className="site-header">
        <div className="site-header-nav">
          <Link href="/">
          <img src={logo} className="medly-logo"/>
          </Link>
          <div className="collapse navbar-collapse">
            <ul id="menu-primary" className="nav navbar-nav main-nav underlined weight-light">
              <li id="menu-about-us"
                  className="menu-item">
                <Link href="/about">
                  <span className="link-txt">About Us</span>
                </Link>
                <div className={displayDriverIndex===1?"driver_active driver":"driver"} />
              </li>
              <li id="menu-how-it-work"
                  className="menu-item">
                <Link href="/"><span className="link-txt">How it works</span></Link>
                <div className={displayDriverIndex===2?"driver_active driver":"driver"} />
              </li>
              <li id="menu-experience"
                  className="menu-item">
                <Link href="/"><span
                  className="link-txt">The Medly Experience</span></Link>
                <div className={displayDriverIndex===3?"driver_active driver":"driver"} />
              </li>
              <li id="menu-blog"
                  className="menu-item">
                <Link href="/"><span className="link-txt">Blog</span></Link>
                <div className={displayDriverIndex===4?"driver_active driver":"driver"} />
              </li>
              <li id="menu-get-start"
                  className="menu-item">
                <Button variant="extendedFab" aria-label="Delete" className="get-start-button">
                  Get Start
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
export default withStyles(styles)(Header)