import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Spring } from "react-spring";
import { Parallax, ParallaxLayer } from "react-spring/addons";

class App extends Component {
  state = {
    xposition: "",
    widthRatio: "",
    screenPosition: "",
    screenWidthRatio: "",
    avatarXposition: "48.65",
    avatarXindex: "",
    avatarXindex2: "",
    avatarYindex1: 33.5,
    screenHeightRatio: "",
    heightRatio: "",
    join: false
  };

  catchX = e => {
    let screenWidthRatio = Number.parseFloat(
      e.screenX / window.screen.width
    ).toFixed(3);
    let widthRatio = Number.parseFloat(e.layerX / e.target.width).toFixed(4);
    let screenPosition = e.screenY;

    let screenHeightRatio = Number.parseFloat(
      e.screenY / window.screen.height
    ).toFixed(3);
    let heightRatio = Number.parseFloat(e.layerY / e.target.height).toFixed(3);

    if (e.target.className === "greyMain1") {
      this.setState({
        join: true
      });
    } else if (widthRatio > 0.26 && widthRatio < 0.66) {
      let avatarXindex = Number.parseFloat(widthRatio * 100 * 1.034).toFixed(2);
      let avatarXindex2 = Number.parseFloat(widthRatio * 100 * 0.9034).toFixed(
        2
      );
      let avatarYindex1 = Number.parseFloat(heightRatio * 100 * 0.6146).toFixed(
        2
      );

      this.setState({
        avatarXindex,
        screenWidthRatio,
        widthRatio,
        avatarXindex2,
        screenHeightRatio,
        heightRatio,
        screenPosition,
        avatarYindex1,
        join: false
      });
    } else {
      this.setState({
        screenHeightRatio,
        heightRatio,
        screenPosition
      });
    }
  };

  activateListener = () => {
    document
      .querySelector("#imageCont")
      .addEventListener("mousemove", this.catchX);
  };

  toggleJoin = () => {
    this.setState({
      join: !this.state.join
    });
  };
  scroll = () => {
    this.parallax.scrollTo(1);
  };
  componentWillMount() {}

  componentDidMount() {
    /*  document.querySelector('#imageCont').addEventListener('mousemove', this.catchX)  */
  }

  render() {
    let avatarXindex = this.state.avatarXindex;
    return (
      <Parallax
        pages={3}
        scrolling={false}
        horizontal
        ref={ref => (this.parallax = ref)}
      >
        <ParallaxLayer offset={0}>
          <div className="App" onMouseOver={this.activateListener}>
            {/* <header>
              <h1>{`&#264A;`}</h1>
            </header> */}
            <img
              onClick={this.scroll}
              className="gemini-sym"
              src={require("./imgs/kisspng-gemini-zodiac-astrological-sign-clip-art-gemini-png-transparent-picture-5a77f70cf2d607.9900074515178114689947.png")}
            />
            <img
              className="bgImage2"
              src={require("./imgs/greylee_siteBG.jpg")}
              alt="grey_lee"
            />
            <div className="stripe1" />
            <div className="stripe2" />
            <div className="stripe2 bottom" />
            <div className="imageCont" id="imageCont">
              <img
                className="bgImage"
                src={require("./imgs/greylee_siteBG.jpg")}
                alt="grey_lee"
              />

              <img
                id="avatar"
                className="greyMain1"
                onMouseOver={this.toggleJoin}
                onMouseOut={this.toggleJoin}
                onClick={this.scroll}
                src={require("./imgs/greylee_siteBG_graygrey.png")}
                alt="grey_lee"
              />

              <img
                id="avatar"
                className="greyMain right"
                style={{
                  right: `${
                    this.state.join ? "48.65" : this.state.avatarXindex
                  }%`
                }}
                src={require("./imgs/greylee_siteBG_graygrey.png")}
                alt="grey_lee"
              />

              <img
                id="avatar"
                className="greyMain left"
                style={{
                  left: `${
                    this.state.join ? "42.50" : this.state.avatarXindex2
                  }%`
                }}
                src={require("./imgs/greylee_siteBG_graygrey.png")}
                alt="grey_lee"
              />
              <img
                id="avatar"
                className="greyMain bottom"
                style={{
                  bottom: `${
                    this.state.join ? "33.50" : this.state.avatarYindex1
                  }%`
                }}
                src={require("./imgs/greylee_siteBG_graygrey.png")}
                alt="grey_lee"
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <div className="album-page" onClick={() => this.parallax.scrollTo(2)}>
            <div className="album-container">
              <img
                className="album-bg"
                src={require("./imgs/Gey Lee Cartoon BG.jpg")}
                alt="album-text"
              />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          onClick={() => this.parallax.scrollTo(2)}
        >
          <div className="album-page-container">
            <img
              className="album-fg"
              src={require("./imgs/frontground.png")}
              alt="album-avatar"
            />
            <div className="media-container">
              <div className="media-txt">ZEN</div>
              <audio
                className="site-audio"
                controls
                autoPlay
                src={require("./audio/Grey Lee - Zen_1.mp3")}
              >
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <div className="pg2Cont">
            <div
              className="imageCont2"
              onClick={() => this.parallax.scrollTo(0)}
            >
              <img
                className="bgImageP2"
                src={require("./imgs/greylee_siteBG2.jpg")}
                style={{ width: "100%", height: "auto" }}
                onClick={() => this.parallax.scrollTo(0)}
                alt="bg2"
              />
              <div className="mainBoxPG2">
                {/* <img className='mainImagePG2' src={require('./imgs/greylee_siteBG2.jpg')} style={{width: "100%", height: 'auto'}} onClick={()=> this.parallax.scrollTo(0)} alt='bg2'/> */}
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    );
  }
}

export default App;
