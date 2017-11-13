import React, { Component } from 'react';
import './App.css';
import Place from './components/place';
import Marker from './components/marker';
// import Filter from './components/filter';
import ButtonFilter from './components/button_filter';
import WindowFilter from './components/window_filter';
import GoogleMapReact from 'google-map-react';
import MapInfoWindow from './components/map_info_window';
import Slider  from 'rc-slider';
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
      activeMarker: null,
      showingInfoWindow: null,
      zoom: 12,
      loaded: false, 
      showingFilterWindow: false, 
      filterType: null,
      bar_checked: false,
      restaurant_checked: false,
      hipster_checked: false,
      posh_checked: false
    };
  }
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/CamilleFranceschi/places/master/places.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          places: data,
          allPlaces: data,
          selectedPlace: data[0],
          loaded: true
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

  handleCategoryFilters = () => {
    // TODO
    // let { categoryFilters } = this.state;
  
    // if (this.state.posh_checked) {
    //   categoryFilters[categoryFilters.length] = 'posh'
    //   this.setState({
    //     categoryFilters: categoryFilters
    //   })
    // } 

    // if (this.state.posh_checked === false) {
    //   this.setState({
    //     categoryFilters: categoryFilters.filter((categoryFilter) => { return (categoryFilter !== 'posh') } )
    //   })
    // }

    // if (this.state.hipster_checked) {
    //   categoryFilters[categoryFilters.length] = 'hipster'
    //   this.setState({
    //     categoryFilters: categoryFilters
    //   })
    // } 

    // if (this.state.hipster_checked === false) {
    //   this.setState({
    //     categoryFilters: categoryFilters.filter((categoryFilter) => { return (categoryFilter !== 'hipster') } )
    //   })
    // }
  }

  handleTypeFilters = () => {
 
    let { typeFilters } = this.state;

    if (this.state.restaurant_checked) {
      if (this.state.bar_checked) {
        typeFilters[0] = 'bar'
        typeFilters[1] = 'restaurant'
      } else {
        typeFilters = []
        typeFilters[0] = 'restaurant'
      }
      this.setState({
        typeFilters: typeFilters
      })
    } 

    if (this.state.restaurant_checked === false) {
      if (this.state.bar_checked) {
        typeFilters = []
        typeFilters[0] = 'bar'
      } else {
        typeFilters = []
      }
      this.setState({
        typeFilters: typeFilters
      })
    }
  }

  handleFilters = () => {
      this.handleTypeFilters();
      this.handleCategoryFilters();
  }

  onButtonApplyFilterClicked = () => {
    this.setState(
      {
        showingFilterWindow: false
      }
    );
    this.handleFilters()
  }

  handleZoomSlider = (val) => {
    this.setState({zoom: val})
  }

  onFilterButtonClicked = (filter_type) => {
    this.setState({ 
      showingFilterWindow: true,
      filterType: filter_type
    });

  }

  onButtonCancelFilterClicked = () => {
    this.setState({ 
      showingFilterWindow: false
    });
  }


  onMarkerClick = (key, childProps) => {
    console.log('childProps', childProps.place);
    this.setState({
      activeMarker: key,
      showingInfoWindow: true,
      selectedMarker: childProps.place
    });
  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }


  onBarChecked(is_checked) {
    this.setState({
      bar_checked: is_checked
    });
  }

  onRestaurantChecked(is_checked) {
    this.setState({
      restaurant_checked: is_checked
    });
  }

  onHipsterChecked(is_checked) {
    this.setState({
      hipster_checked: is_checked
    });
  }

  onPoshChecked(is_checked) {
    this.setState({
      posh_checked: is_checked
    });
  }
  render() {
    console.log(this.state.bar_checked, "bar-checked");
    console.log(this.state.categoryFilters, "category filters");
    console.log(this.state.typeFilters, "type filters");

    if (!this.state.loaded) {
      return <div>Loading...</div>
    }

    let center = {lat: 48.8566, lng: 2.3522};

    if(this.state.selectedPlace) {
      center = {lat: this.state.selectedPlace.lat, lng: this.state.selectedPlace.lng};
    }
    
    let { categoryFilters } = this.state;
    let { typeFilters, clickedMarker } = this.state;
    let filteredPlaces = this.state.allPlaces;

    if(this.state.search) {
      filteredPlaces = filteredPlaces && this.state.allPlaces.filter((place) => new RegExp(this.state.search, "i").exec(place.name))
    }

    if(categoryFilters.length > 0) {
      filteredPlaces = filteredPlaces && this.state.allPlaces.filter((place) => categoryFilters.includes(place.category))
    }

    if(typeFilters.length > 0) {
      filteredPlaces = filteredPlaces && this.state.allPlaces.filter((place) => typeFilters.includes(place.type))
    }

    console.log(filteredPlaces, "filteredplaces after");
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
      styles: mapStyles, // straight out of something like snazzymaps
      zoomControl: false
    };

    return (
      <div className="app">
        <div>{clickedMarker}</div>
        <div className="map">
          <GoogleMapReact center={center} zoom={this.state.zoom} options={mapOptions}  onClick={this.onInfoWindowClose} onChildClick={this.onMarkerClick}>
              {filteredPlaces.map((place, index) => {
                return (
                    <Marker
                      key={index}
                      place={place}
                      lat={place.lat}
                      lng={place.lng}
                      selected={place === this.state.selectedPlace}
                       >
                    </ Marker>
                );
              })}
            {
              this.state.selectedMarker && 
              <MapInfoWindow
                lat={this.state.selectedMarker.lat}
                lng={this.state.selectedMarker.lng}
                marker={this.state.selectedMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onInfoWindowClose} >
              </ MapInfoWindow>
            }
          </ GoogleMapReact >

          <div className="slider">
            <Slider defaultValue={12} min={10} max={19} onChange={this.handleZoomSlider} />
          </div>
        </div>
        <div className="main">
          <div className="search">
            <input type="text" placeholder="Everywhere" value={this.state.search}
              onChange={this.handleSearch}/>
          </div>
          <div className="button_filters">
            <ButtonFilter name='type' onClick={() => this.onFilterButtonClicked('type') }/>
            <ButtonFilter name='category' onClick={() => this.onFilterButtonClicked('category') }/>
          </div>

          <div className="window_filters window_category">
           {
             this.state.showingFilterWindow && 
             <WindowFilter 
               onBarChecked={(checked) => this.setState({bar_checked: checked})}
               barChecked={this.state.bar_checked}
               onRestaurantChecked={(checked) => this.setState({restaurant_checked: checked})}
               restaurantChecked={this.state.restaurant_checked}
               onPoshChecked={(checked) => this.setState({posh_checked: checked})}
               poshChecked={this.state.posh_checked}
               onHipsterChecked={(checked) => this.setState({hipster_checked: checked})}
               hipsterChecked={this.state.hipster_checked}
               filter_type={this.state.filterType} 
               visible={this.state.showingFilterWindow} 
               onButtonCancelFilterClicked={this.onButtonCancelFilterClicked}
               onButtonApplyFilterClicked={this.onButtonApplyFilterClicked} />
            }
          </div>

          <div className="places">
            {filteredPlaces.map((place, index) => {
              return <Place place={place} key={index}  selectPlace={this.selectPlace} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
