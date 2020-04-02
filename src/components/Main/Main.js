import React, {Component} from "react"
import bridge from "@vkontakte/vk-bridge"

import "./Main.css"

class Main extends Component {

  state = {
    eventType: '',
    eventData: '',
  };

  componentDidMount() {
    bridge.subscribe(event => {
      if (!event.detail) {
        return;
      }

      const { type, data } = event.detail;

      this.setState({
        eventType: type,
        eventData: JSON.stringify(data)
      })

    });
  }

  getGeoData() {
    bridge.send('VKWebAppGetGeodata', {})
      .then()
      .catch()
  }

  render () {
    const {eventType, eventData} = this.state;

    return (
      <div className="Main">
        <div className="GeoGet section">
          <div className="GeoGet__title section__title">
            Get geo data:
          </div>
          <button className="GeoGet__button" onClick={this.getGeoData}>
            GET
          </button>
        </div>
        <div className="section">
          <div className="section__title">
            vk-bridge event:
          </div>
          <div className="section__content">
            {eventType}
          </div>
        </div>
        <div className="section">
          <div className="section__title">
            vk-bridge data:
          </div>
          <div className="section__content">
            {eventData}
          </div>
        </div>
      </div>
    )
  }
}

export default Main
