// import logo from './logo.svg';
import "./App.css";
// import Seasons from './com   ponents/Seasons';
import React from "react";

// function App() {
//   window.navigator.geolocation.getCurrentPosition((position)=>{console.log(position)},err=>console.log(err));
//   return (
//     <div className="App">

//     <Seasons/>

//     </div>
//   );
// }
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errMassage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errMassage: err.message })
    );
  }

  render() {
    if (this.state.errMassage && !this.state.lat) {
      return <div> Error :{this.state.errMassage}</div>;
    }
    if (!this.state.errMassage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return (
      <div>
      <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
    </div>
      </div>
    );
  }
}
export default App;
