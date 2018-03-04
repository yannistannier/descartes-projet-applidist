import React, { Component } from 'react';
import { Image, View, TouchableOpacity, TouchableWithoutFeedback, StatusBar, Button} from 'react-native';
import { Actions, ActionConst} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { getLanguages } from 'react-native-i18n'

import I18n from '../../i18n';
import styles from '../styles/onboarding'

class OnBoarding extends Component {

  constructor(props) { 
    super(props);
    this._swiper = null
    this.state={
      l1 : require('../../../assets/onboarding/en/1.jpg'),
      l2 : require('../../../assets/onboarding/en/2.jpg'),
      l3 : require('../../../assets/onboarding/en/3.jpg'),
      l4 : require('../../../assets/onboarding/en/4.jpg'),
      l5 : require('../../../assets/onboarding/en/5.jpg'),
    }
  }

  componentWillMount() {
    getLanguages().then(languages => {
      console.log(languages)
      
      if(languages[0].indexOf('fr') > -1){
          this.setState({
              l1 : require('../../../assets/onboarding/fr/1.jpg'),
              l2 : require('../../../assets/onboarding/fr/2.jpg'),
              l3 : require('../../../assets/onboarding/fr/3.jpg'),
              l4 : require('../../../assets/onboarding/fr/4.jpg'),
              l5 : require('../../../assets/onboarding/fr/5.jpg'),
           })
      }

    }) 
  }

  next(){
    Actions.contact({type: ActionConst.RESET, register:true, rightTitle:I18n.t('contact_nxt'), onRight:() => Actions.tabbar() })
  }

  // <TouchableOpacity 
  //           onPress={() => this.next() } style={{zIndex:10001}}>  
  //         <View
            
  //           style={{position:'absolute', top:0, right:0, width:150, backgroundColor:'red', height:60, zIndex:10000}}>
  //         </View>  
  //         </TouchableOpacity>

  render() {
    
    return (
      <View style={styles.container}>
          <StatusBar 
              hidden 
            />

          

          <Swiper 
                ref={(swiper) => {this._swiper = swiper}} style={styles.wrapper} 
                showsButtons={false} 
                showsPagination={false}
                >

                  <View style={styles.slide} >
                    <TouchableWithoutFeedback onPress={() => this.next() }>
                      <Image style={styles.slideimg} source={this.state.l1} />
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.slide}>
                    <TouchableWithoutFeedback onPress={() => this.next() }>
                      <Image style={styles.slideimg} source={this.state.l2} />
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.slide}>
                    <TouchableWithoutFeedback onPress={() => this.next() }>
                      <Image style={styles.slideimg} source={this.state.l3} />
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.slide}>
                    <TouchableWithoutFeedback onPress={() => this.next() }>
                      <Image style={styles.slideimg} source={this.state.l4} />
                    </TouchableWithoutFeedback>
                  </View>
                  <View style={styles.slide}>
                    <TouchableWithoutFeedback onPress={() => this.next() }>
                      <Image style={styles.slideimg} source={this.state.l5} />
                    </TouchableWithoutFeedback>
                  </View>

              </Swiper>

      </View>
    );
    
  }
}

export default OnBoarding
