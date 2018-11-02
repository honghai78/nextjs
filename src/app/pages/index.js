import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import Layout from '../layouts'
import './index.scss'
import medly_home_phone from '../static/medly-home-phone-image.png'
import medlystreet from '../static/medlystreet.png'
import rsz_medly1 from '../static/rsz_medly1-150x150.png'
import rsz_medly2 from '../static/rsz_medly2-150x150.png'
import rsz_medly3 from '../static/rsz_medly3-2-150x150.png'
import rsz_doctor from '../static/rsz_doctor.png'
import rsz_schedule from '../static/rsz_schedule-1.png'
import Biker from '../static/Biker-2.gif'
import rsz_traditionalpharmacy_1 from '../static/rsz_traditionalpharmacy_1.png'
import streetdelivery from '../static/streetdelivery-300x300.png'
import if_circle_red from '../static/if_circle_red_10282.png'
import if_check from '../static/if_check_1930264.svg'
import newmap from '../static/newmap-1.png'
import njmap from '../static/NJ_map-700x700.png'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})
const NJ = 'NJ'
const NY = 'NY'

class Index extends React.Component {
  state = {
    open: false,
    ny: true,
    nj: false
  }

  changeState (type) {
    this.setState({
      ny: type === NY,
      nj: type === NJ
    })
  }

  renderHomeHeaderBackground () {
    return (
      <div className="home-header-background">
        <div className="home-header">
          <div className="div-header-left">
            <img src={medly_home_phone} className="medly-phone-image"/>
          </div>
          <div className="div-header-right">
            <div className="header-div-right-text">
              <h1>
                <span className="header-text-title">
                PRESCRIPTIONS
                <br/>
                MADE EASY.
              </span>
              </h1>
              <h4>
                <span>
                  Medly (Test with Travis Auto Deploy) delivers your prescriptions to your door for free. If you hate waiting in line, then you’ll love Medly.
                </span>
              </h4>
              <p className="hp-form"></p>
            </div>
            <img src={medlystreet} className="medly-medlystreet-img"/>
          </div>
        </div>
      </div>
    )
  }

  renderHomeVideo () {
    return (
      <div className="home-video">
        <div className="div-video">
          <video className="medly-video-img" controls>
            <source src="https://medlypharmacy.com/wp-content/uploads/2017/09/MEDLY_def_v4-1.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>
    )
  }

  renderHomeHowMedlyWork () {
    return (
      <div className="home-how-medly-work">
        <h2 className="how-work-text"><span>How Medly Works</span></h2>
        <div className="how-medly-work-div">
          <div className="div-box">
            <div className="img-head-box">
              <img src={rsz_medly1}/>
            </div>
            <div className="img-content-box">
              <img src={rsz_doctor}/>
            </div>
            <h3>
              Your doctor prescribes
            </h3>
            <p>
              Tell your doctor to send your prescriptions to Medly. You can also transfer your refills.
            </p>
          </div>
          <div className="div-box">
            <div className="img-head-box">
              <img src={rsz_medly2}/>
            </div>
            <div className="img-content-box">
              <img src={rsz_schedule}/>
            </div>
            <h3>
              Schedule with us
            </h3>
            <p>
              Once we receive your prescription, we’ll get in touch with you to schedule your delivery.
            </p>
          </div>
          <div className="div-box">
            <div className="img-head-box">
              <img src={rsz_medly3}/>
            </div>
            <div className="img-content-box">
              <img src={Biker}/>
            </div>
            <h3>
              We deliver for free
            </h3>
            <p>
              Receive your free, same-day delivery in the comfort of your home!
            </p>
          </div>
        </div>
      </div>
    )
  }

  renderHomeExperience () {
    return (
      <div className="home-experience">
        <div className="experience-box-1">
          <h1>
            Traditional Pharmacy
            Experience
          </h1>
          <div className="img-box">
            <img src={rsz_traditionalpharmacy_1}/>
          </div>
          <div className="content-div">
            <div className="text-div">
              <div className="content-box">
                <img src={if_circle_red}/>
                <span>Long lines</span>
              </div>
              <div className="content-box">
                <img src={if_circle_red}/>
                <span>Unpredictable inventory</span>
              </div>
              <div className="content-box">
                <img src={if_circle_red}/>
                <span>Tiresome and time-consuming</span>
              </div>
              <div className="content-box">
                <img src={if_circle_red}/>
                <span>Limited, rushed service</span>
              </div>
              <div className="content-box">
                <img src={if_circle_red}/>
                <span>Inconsistent experiences</span>
              </div>
              <div className="content-box">
                <img src={if_circle_red}/>
                <span>Lacks personalization</span>
              </div>
              <div className="content-box">
                <img src={if_circle_red}/>
                <span>Understaffed</span>
              </div>
            </div>
          </div>
        </div>
        <div className='experience-box-2'>
          <h1>
            The Medly Experience
          </h1>
          <div className="img-box">
            <img src={streetdelivery}/>
          </div>
          <div className="content-div">
            <div className="text-div">
              <div className="content-box">
                <img src={if_check}/>
                <span>Long lines</span>
              </div>
              <div className="content-box">
                <img src={if_check}/>
                <span>Unpredictable inventory</span>
              </div>
              <div className="content-box">
                <img src={if_check}/>
                <span>Tiresome and time-consuming</span>
              </div>
              <div className="content-box">
                <img src={if_check}/>
                <span>Limited, rushed service</span>
              </div>
              <div className="content-box">
                <img src={if_check}/>
                <span>Inconsistent experiences</span>
              </div>
              <div className="content-box">
                <img src={if_check}/>
                <span>Lacks personalization</span>
              </div>
              <div className="content-box">
                <img src={if_check}/>
                <span>Understaffed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderOurDeliveryZones () {
    return (
      <div className="our-delivery-zones">
        <div className="content-box-left">
          <span className="title-text">Our Delivery Zones:</span>
          <br/>
          <span className={this.state.ny ? 'choose-text-active' : 'choose-text'} onClick={() => this.changeState(NY)}>New York</span>
          <span className="choose-text"> / </span> <span
          className={this.state.nj ? 'choose-text-active' : 'choose-text'} onClick={() => this.changeState(NJ)}>New Jersey</span>
        </div>
        <div className="content-box-mid">
          <img src={this.state.ny ? newmap : njmap}/>
        </div>
        <div className="content-box-right">
          <span className="title">Delivery Hours</span>
          <br/> <br/>
          <span className="content">Mon-Fri: 8:00AM to 10:00PM</span>
          <br/>
          <span className="content">Sat: 9:00AM to 7:00PM</span>
          <br/>
          <span className="content">Sun: Closed</span>
          <br/> <br/> <br/>
          <span className="title">Contact Us</span>
          <br/> <br/>
          <span className="content">Call or Text us at: {this.state.ny ? '718.782.7539' : '908.725.0585'}</span>
          <br/>
          <span className="content">Email: hello@medlypharmacy.com</span>
        </div>
      </div>
    )
  }

  render () {
    return (
      <div>
        <Layout title={'Medly Pharmacy'}>
          {this.renderHomeHeaderBackground()}
          {this.renderHomeVideo()}
          {this.renderHomeHowMedlyWork()}
          {this.renderHomeExperience()}
          <div className="home-send-your-prescriptions">
            <h2>SEND YOUR PRESCRIPTIONS TO MEDLY</h2>
            <div className="prescriptions-content">
              <div className="prescriptions-content-left">
                <span className="title-text">New Prescriptions</span>
              </div>
              <div className="prescriptions-content-right">
                <span className="title-text">Transfer your Refills</span>
                <br/>
                <br/>
                <span>Let us know about some information regarding your current pharmacy you’d like to transfer your prescription from.</span>
              </div>
            </div>
          </div>
          {this.renderOurDeliveryZones()}
        </Layout>
      </div>
    )
  }
}

export default withStyles(styles)(Index)