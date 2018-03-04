import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';



class IconUserSearch extends Component {

  render() {

    return (
     <TouchableOpacity  onPress={() => Actions.user_search()}>
          <View style={{ backgroundColor:'transparent'}}>
            <Icon name="ios-search-outline"  style={{marginRight:10, color:'#9B9B9B'}}/>
          </View>
      </TouchableOpacity>
    );
  }
}


export default IconUserSearch
