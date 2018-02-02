import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import ListBenefitsComponent from './components/benefits/ListBenefitsComponent'
import FileUploadComponent from './components/benefits/FileUploadComponent'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Router>
          <div>
            <Route exact path="/benefits" component={ListBenefitsComponent} />
            <Route path="/benefits/new" component={FileUploadComponent} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App