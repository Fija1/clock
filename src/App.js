import React, { Component } from 'react';
import './App.css';
import Clock from 'react-live-clock';
import { CSSTransitionGroup } from 'react-transition-group'

class App extends Component {
  state = {
  }

  importImages = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }


  render() {
    const images = this.importImages(require.context('./images', false, /\.(png|jpe?g|svg)$/))



    return (
      <div className="App">
        <div className="Image_balk">
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['1.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['2.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['3.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['4.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['5.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['6.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['7.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['8.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['9.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['10.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['12.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['12.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['13.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['14.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['15.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['16.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['17.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['18.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['19.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['20.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['21.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['22.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        <CSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={50000000} transitionEnter={false} transitionLeave={false}><img src={images['23.png']} className="images" alt="oeps"/></CSSTransitionGroup>
        </div>
        <div className="Clock">
          <h2><Clock format={'HH:mm'} ticking={true} timezone={'Europe/London'} /></h2>
        </div>
      </div>
    );
  }
}

export default App;
