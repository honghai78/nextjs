import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import Layout from '../layouts'
import './about.scss'
import header_entrance from '../static/header_entrance.jpg'
import Highlight from 'react-highlight'
import marked from 'marked'
import nd_generation from '../static/2nd-generation-1-300x300.jpg'
import PatientFirst from '../static/Patient-First-300x300.jpg'
import Boroughs from '../static/5-Boroughs-1-1-300x300.jpg'
import Sahaj from '../static/Sahaj-Patel-2-Cropped-1-copy-150x150.jpg'
import Marg from '../static/Marg_About-Us--150x150.jpg'
import Untitled from '../static/Untitled-3-150x150.jpg'
import chirag from '../static/chirag.jpg'
import entrance from '../static/entrance.jpg'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
})

class About extends React.Component {
  state = {
    open: false,
  }

  render () {
    const {classes} = this.props
    const {open} = this.state
    return (
      <div>
        <Layout title={'About Us - Medly Pharmacy'} displayDriverIndex={1}>
          <div className="container">
            <div className="header-box">
              <div className="header-box-div-left">
                <Highlight
                  innerHTML>{marked('<img src="' + header_entrance + '" class="image-header_entrance"/>')}</Highlight>
              </div>
              <div className="header-box-div-mid"></div>
              <div className="header-box-div-right">
                <h2 className="section-title-default">
                  <span>ABOUT US</span>
                </h2>
                <p>
                  Medly Pharmacy is a full-service, digital pharmacy that delivers your prescription medication to you
                  for free, same day, anywhere in New York City or the state of New Jersey.
                </p>
                <p>
                  We created a digital experience that makes managing your prescription simple, efficient, and smart. To
                  get started, click here.
                </p>
              </div>
            </div>
            <div className="who-are-we-box">
              <h2 className="brand_green">
                WHO ARE WE
              </h2>
              <div className="box">
                <div className="box-content">
                  <img src={nd_generation}/>
                  <br/>
                  <span>
                    We’ve been operating independent pharmacies in New York City for more than 30 years and now we’re available in New Jersey as well.
                  </span>
                </div>
                <div className="box-content">
                  <img src={PatientFirst}/>
                  <br/>
                  <span>
                   Customers are the lifeblood of our business, and were the critical building blocks for creating Medly. We were carefully guided by our customers preferences to solve their biggest complaints about the traditional pharmacy experience
                  </span>
                </div>
                <div className="box-content">
                  <img src={Boroughs}/>
                  <br/>
                  <span>
We started Medly to extend access to more patients and are proud to serve all 5 boroughs. That means that if you live in Brooklyn, Manhattan, Queens, Bronx, and Staten Island you have access to the same day, free prescription delivery.                  </span>
                </div>
              </div>
            </div>
            <div className="meet-the-team">
              <h2 className="brand_green">MEET THE TEAM</h2>
              <div className="box">
                <div className="left">
                  <img src={Sahaj}/>
                </div>
                <div className="right">
                  <span>Sahaj Patel is the Co-founder and Chairman of Medly. Previously, he’s managed multiple independent pharmacies in New York City. </span>
                </div>
              </div>
              <div className="box">
                <div className="left">
                  <img src={Marg}/>
                </div>
                <div className="right">
                  <span>Dr. Marg Patel is the Co-founder and CEO of Medly. Previously, he’s managed multiple  independent pharmacies in New York City. </span>
                </div>
              </div>
              <div className="box">
                <div className="left">
                  <img src={Untitled}/>
                </div>
                <div className="right">
                  <span>
Stella Badalova is the Supervising Pharmacist at Medly. Previously she was the pharmacy manager at Walgreens. </span>
                </div>
              </div>
              <div className="box">
                <div className="left">
                  <img src={chirag}/>
                </div>
                <div className="right">
                  <span>Chirag Kulkarni is the Chief Marketing Officer of Medly. Previously he’s helped brands like Expedia, LinkedIn and others with digital marketing. Forbes named him a top 25 marketing influencer. </span>
                </div>
              </div>

            </div>
            <div className="our-mission">
              <h2 className="brand_green">OUR MISSION</h2>
              <div>
                <img src={entrance}/>
              </div>
              <br />
              <div className="div-text">
                <span>Our mission at Medly is to help improve your health. We’ve taken the 30 years of care and created a pharmacy that delivers on what it promises.</span><br /> <br />

<span>Whether it’s helping our patients manage their prescriptions, being there when times are tough, we want to be an aspect of your life that you don’t need to micromanage, but you can trust will be there for you forever.</span>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default withStyles(styles)(About)