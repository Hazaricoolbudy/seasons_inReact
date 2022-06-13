// import logo from './logo.svg';
import "./App.css";
import Seasons from "./components/Seasons";
import React from "react";

class App extends React.Component {
  state = { lat: null, errMassage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errMassage: err.message })
    );
  }

   renderContent() {
    if (this.state.errMassage && !this.state.lat) {
      return <div> Error :{this.state.errMassage}</div>;
    }
    if (!this.state.errMassage && this.state.lat) {
      return <Seasons lat={this.state.lat} />;
    }

    return (
      <div>
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  render(){
    return <div className="border red">
    {this.renderContent()  }
    </div>
  }
 
}
export default App;
