import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StatusBar, Button} from 'react-native';
import { Container, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Facebook from '../containers/FacebookContainer'

import styles from '../styles/styles'
import I18n from '../../i18n';

import { appAuthToken } from '../../utils/storage' // A ENLEVER

class Home extends Component {

  constructor(props) { 
    super(props);
 
    this.state={
      home:false
    }

  }

  componentDidMount() {
      this.props.verifyAccessToken()
  }

  // A ENLEVER 
  forceLogin(){
      appAuthToken.storeSessionToken("cd06fd44334109290eb918fa66c34facb9c6c746") // yannis
  }
  
  // <Button onPress={() => this.forceLogin()} title="login"/>
  

  render() {
    const { auth } = this.props
    return (
      <Container style={styles.container}>
    
        <Image source={require('../../../assets/images/home-bg.png')} style={styles.bgcontainer} >
          
          <View style={styles.topcontainer}>
 
              <Image style={styles.logo} source={require('../../../assets/images/home-logo.png')} />

              {auth.status == "unauthorized" &&
                  <Text style={styles.textlogo}>
                    Spitch
                  </Text>
              }

          </View>

          {auth.status == "unauthorized" &&
            <View style={styles.botcontainer}>

                <Text style={styles.text}>
                    {I18n.t('home')}
                </Text>

                <View style={styles.footer}>
                  <View style={{alignItems: 'center', 'paddingBottom':23}}>
                      <Facebook color="white" text="Facebook"/>
                  </View>
                  <Text style={styles.text_cdg}>
                    {I18n.t('home_cdg')}
                  </Text>

                </View>


            </View>
          }

 
        </Image>
      </Container>
    );
  }
}

export default Home