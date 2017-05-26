import React, { Component } from 'react';
import './css/main.css';
import Footer from './Footer';
import Header from './Header';
import * as txt from '../texts.json';

class App extends Component {

 constructor() {
    super();
    this.state = {
      frenchify: false,
      markdown: false,
      from: '',
      html: '',
    };
  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ?
      target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <form>
            <label className="checkbox">
                {txt.frenchify}
                <input
                  type="checkbox"
                  name="frenchify"
                  checked={this.state.frenchify}
                  onChange={this.handleChange} />
            </label>
            <label className="checkbox">
                {txt.markdown}
                <input
                  type="checkbox"
                  name="markdown"
                  checked={this.state.markdown}
                  onChange={this.handleChange} />
            </label>
            <div className="columns">
              <label className="column">
                  {txt.from}
                  <textarea
                    name="from"
                    value={this.state.from}
                    onChange={this.handleChange}>
                  </textarea>
              </label>
              <label className="column">
                  {txt.html}
                  <textarea
                    name="html"
                    value={this.state.html}
                    onChange={this.handleChange}>
                  </textarea>
              </label>
              <div className="column">
                  {txt.rendered}
                  <div className="rendered">
                    {this.state.html}
                  </div>
              </div>
            </div>
            </form>
          </div>
        <Footer />
      </div>
    );
  }
}

export default App;
