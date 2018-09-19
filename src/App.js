import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then(response => response.json())
    .then(json => this.setState({photos: json}))
  }

  render() {
    return (
      <div className="container-fluid p-0">

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">

          <a className="navbar-brand" href="#"><i className="fas fa-stroopwafel"></i>&nbsp;DeveloperDeck101</a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
            aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <section className="collapse navbar-collapse" id="navbarMainToggler">
            <div className="navbar-nav ml-auto pr-3">
              <a className="nav-item nav-link" href="#">Home</a>
              <a className="nav-item nav-link" href="#">Channel</a>
              <a className="nav-item nav-link" href="#">Login</a>
            </div>
            <form className="form-inline">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control mr-1" placeholder="Username" />
              </div>
              <button className="btn btn-outline-success">Login</button>
            </form>
          </section>
        </nav>


        <section className="container p-2">
          <ul className="list-unstyled">

            {
              this.state.photos.map(photo => {
                return (
                  <li className="media pt-2">
                    <img src={photo.thumbnailUrl} alt="" className="mr-3" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">{photo.title}</h5>
                      <p>Título: {photo.title}</p>
                    </div>
                  </li>
                )
              })
            }


          </ul>
        </section>


        <footer className="container col-12 pt-3 footer bg-dark text-light text-center">
          <container className="container col-6 col-md-2 d-flex justify-content-around">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-google-plus-square"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter-square"></i>
          </container>
        </footer>

      </div>
    );
  }
}

export default App;
