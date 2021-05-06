import React, { Component} from 'react';
import { Route, Switch } from 'react-router';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails'
// import countries from './countries.json'
import axios from 'axios';

class App extends Component {

  state = {
    countries: [],
    loading: true
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        this.setState({
          countries: res.data,
          loading: false}
      )})
      .catch((err) => {
        console.log("Error", err)
      })
  }
  
  render() {
    return (
      <div >
        <Navbar/>
        {
          this.state.loading
            ? (
              <div className="text-center">
                <h1>Loading...</h1>
              </div>
            )
            :
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <CountriesList countries={this.state.countries}/>
                </div>
                <div className="col-sm-6">
                  <Switch>
                    <Route path="/:code" render={(props) => <CountryDetails {...props} countries={this.state.countries}/>} />
                  </Switch>
                </div>
              </div>
            </div>
        }
      </div>
    );
  }
}

export default App;