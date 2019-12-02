import React, { Component, Fragment } from 'react';
import Clarifai from 'clarifai';

import Navigation from '../components/Navigation';
import ImageLinkInput from '../components/ImageLinkInput';
import ReturnedImage from '../components/ReturnedImage';
import Footer from '../components/Footer';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'd1cf986c507b4100aa06b7fec7935329'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      loading: true
    }
  }

  handleSubmit = () => {
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, "https://samples.clarifai.com/face-det.jpg")
      .then(response => {
        console.log(response.status.code)
      })
      // .then(response => console.log(response.json())) 
      .catch(err => console.log(err))
  } 
  
  render() {
    const { loading } = this.state;

    return (
      <Fragment>
      	<Navigation />
        <ImageLinkInput 
          handleSubmit = { this.handleSubmit }
          loading = { loading } 
        />
        <ReturnedImage />
      	<Footer />
      </Fragment>
    );
  }
}

export default App;
