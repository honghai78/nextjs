import React from 'react'
import './styles.scss'
export default class Footer extends React.Component {
  state={
   ny: true,
   nj: false
  }
  changeState(type){
    this.setState({
      ny: type==='ny',
      nj: type==='nj'
    })
  }
  render () {
    return (
      <div className="footer-box">
        <div className="footer-content">
          <div className="left-box">
            <span>GET STARTED</span>
            <br />
            <span>TERMS OF DIGITAL SERVICE</span>
            <br />
            <span>HIPAA INFO</span><br />
            <span>FAQ</span><br />
            <span>BLOG</span><br />
            <span>ABOUT US</span><br />
            <br />
            <img src="https://static.legitscript.com/seals/2599624.png"/>
          </div>
          <div className="mid-box">
          <h3>DELIVERY HOURS</h3><br />
            <span>M-F:         8:00AM-10:00PM</span><br />
            <span>SAT:         9:00AM-7:00PM</span><br />
            <span>SUN:         Closed</span><br />
            <h3>GET NOTIFICATIONS FROM MEDLY</h3>
          </div>
          <div className="right-box">
            <h3>CONTACT US</h3><br />
            <span className={this.state.ny?"active":"normal"} onClick={()=>this.changeState('ny')}>New York</span><span> / </span> <span className={this.state.nj?"active":"normal"} onClick={()=>this.changeState('nj')}>New Jersey</span><br />
            <br />
            <span>CALL OR TEXT: {this.state.ny?"718.782.7539":"908.725.0585"}</span><br />
            <span>FAX: {this.state.ny?"718.782.7951":"908.725.0587"}</span><br />
            <span>EMAIL: HELLO@MEDLYPHARMACY.COM</span><br /><br />
            <span>SEND ERX TO:</span><br />
            <span>MEDLY PHARMACY</span><br />
            <span>{this.state.ny?"104 GRAHAM AVE, BROOKLYN, NY 11206":"40 W MAIN STREET, SOMERVILLE, NJ 08876"}</span><br />
          </div>
        </div>
      </div>
    )
  }
}
