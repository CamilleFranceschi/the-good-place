import React, { Component } from 'react';
import './App.css';
import Place from './components/place';
import Marker from './components/marker';
import Filter from './components/filter';
import ZoomSlider from './components/zoom_slider';
import GoogleMapReact from 'google-map-react';
import MapInfoWindow from './components/map_info_window';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

// // https://dribbble.com/shots/1971323-Real-Estate-App/attachments/343593

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      allPlaces: [],
      selectedPlace: null,
      selectedMarker: null,
      search: "",
      categoryFilters: [],
      typeFilters: [],
      zoom: 12
    };
  }
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/CamilleFranceschi/places/master/places.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          places: data,
          allPlaces: data,
          selectedPlace: data[0]
        })
      })
  }

  selectPlace = (place) => {
    this.setState({
      selectedPlace: place
    })
  }


  selectMarker = (marker) => {
    this.setState({
      selectedMarker: marker
    })
  }


  handleSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  handleCategoryFilters = (event) => {
    let { categoryFilters } = this.state;

    if(event.target.checked) {
      categoryFilters[categoryFilters.length] = event.target.name
      this.setState({
        categoryFilters: categoryFilters
      })
    }
    else {
      this.setState({
        categoryFilters: categoryFilters.filter((categoryFilter) => { return (categoryFilter !== event.target.name) } )
      })
    }
  }

  handleTypeFilters = (event) => {
    let { typeFilters } = this.state;

    if(event.target.checked) {
      typeFilters[typeFilters.length] = event.target.name
      this.setState({
        typeFilters: typeFilters
      })
    }
    else {
      this.setState({
        typeFilters: typeFilters.filter((typeFilter) => { return (typeFilter !== event.target.name) } )
      })
    }
  }

  handleZoomSlider = (val) => {
    this.setState({zoom: val})
  }

  render() {
    let center = {lat: 48.8566, lng: 2.3522};
    if(this.state.selectedPlace) {
      center = {lat: this.state.selectedPlace.lat, lng: this.state.selectedPlace.lng};
    }
    let { categoryFilters } = this.state;
    let { typeFilters } = this.state;
    let filteredPlaces = this.state.allPlaces;

    if(this.state.search) {
      filteredPlaces = filteredPlaces && this.state.allPlaces.filter((place) => new RegExp(this.state.search, "i").exec(place.name))
    }

    if(categoryFilters.length > 0) {
      console.log(categoryFilters, "array categoryFilters")
      filteredPlaces = filteredPlaces && this.state.allPlaces.filter((place) => categoryFilters.includes(place.category))
      console.log(filteredPlaces, "filteredPlaces")
    }

    if(typeFilters.length > 0) {
      console.log(typeFilters, "array typeFilters")
      filteredPlaces = filteredPlaces && this.state.allPlaces.filter((place) => typeFilters.includes(place.type))
      console.log(filteredPlaces, "filteredPlaces")
    }

    const mapStyles =
      [
        {
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [
                {
                    "gamma": "0.82"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "gamma": "1.21"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
                {
                    "lightness": "-60"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text",
            "stylers": [
                {
                    "gamma": "5.37"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#419d8c"
                },
                {
                    "lightness": "-39"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#010015"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#010015"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#010015"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": "0"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#4eac81"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#010015"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#d9d8e8"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#010015"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#d9d8e8"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#010015"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#1b3f52"
                },
                {
                    "gamma": "5.37"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#010015"
                }
            ]
        }
    ]

    const mapOptions = {
      styles: mapStyles // straight out of something like snazzymaps
    };

    return (
      <div className="app">
        <div className="map">
          <GoogleMapReact center={center} zoom={this.state.zoom} options={mapOptions}>
              {filteredPlaces.map((place) => {
                return (
                  <MapInfoWindow
                    place={place}
                    lat={place.lat}
                    lng={place.lng}
                    opened={place === this.state.selectedPlace} />
                  // <MapInfoWindow place={place} lat={place.lat} lng={place.lng} selected={place === this.state.selectedPlace} />
                );
              })}
              {filteredPlaces.map((place) => {
                return (
                  <Marker
                    place={place}
                    lat={place.lat}
                    lng={place.lng}
                    selected={place === this.state.selectedPlace}>
                  </ Marker>
                );
              })}
          </ GoogleMapReact>

          <div className="slider">
            <Slider defaultValue={12} min={10} max={19} onChange={this.handleZoomSlider} />
          </div>
        </div>
        <div className="main">
          <div className="search">
            <input type="text" placeholder="Everywhere" value={this.state.search}
              onChange={this.handleSearch} />
          </div>
          <div className="filters">
            <Filter name="bar" handleChange={this.handleTypeFilters} />
            <Filter name="restaurant" handleChange={this.handleTypeFilters} />
          </div>
          <div className="filters">
            <Filter name="hipster" handleChange={this.handleCategoryFilters} />
            <Filter name="posh" handleChange={this.handleCategoryFilters} />
          </div>
          <div className="places">
            {filteredPlaces.map((place, index)=> {
              return <Place place={place} key={index}  selectPlace={this.selectPlace} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
