import React, {Component} from 'react';
import Filter from './filter';
import "./filter.css";
import "./window_filter.css";
import ButtonFilterApply from './button_filter_apply';
import ButtonFilterCancel from './button_filter_cancel';

class WindowFilter extends Component {
  render() {
    let type_classes= "filters hidden"
    let category_classes= "filters hidden"

    if (this.props.filter_type === 'category') {
      type_classes = "filters hidden"
      category_classes= "filters"
    } 
    else if (this.props.filter_type === 'type'){
      category_classes = "filters hidden"
      type_classes= "filters"
    } else {
      category_classes = "filters hidden"
      type_classes= "filters hidden"
    }

    return ( 
      <div>
        <div className='window_filter'>
          <div className={type_classes}>
            <Filter name="bar" checked={this.props.barChecked} onChange={(is_checked) => this.props.onBarChecked(is_checked)}/>
            <Filter name="restaurant" checked={this.props.restaurantChecked} onChange={(is_checked) => this.props.onRestaurantChecked(is_checked)}/>
            <ButtonFilterCancel onClick={this.props.onButtonCancelFilterClicked}/>
            <ButtonFilterApply onClick={this.props.onButtonApplyFilterClicked}/>
          </div>
        </div>    

        <div className='window_filter'>
          <div className={category_classes}>
            <Filter name="posh" checked={this.props.poshChecked} onChange={(is_checked) => this.props.onPoshChecked(is_checked)}/>
            <Filter name="hipster" checked={this.props.hipsterChecked} onChange={(is_checked) => this.props.onHipsterChecked(is_checked)}/>
            <ButtonFilterCancel onClick={this.props.onButtonCancelFilterClicked}/>
            <ButtonFilterApply onClick={this.props.onButtonApplyFilterClicked}/>
          </div>
        </div>
      </div>
    );              
  }
}

export default WindowFilter;
