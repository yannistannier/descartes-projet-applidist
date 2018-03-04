import React, { Component } from 'react';
import { Image, TouchableOpacity, View, Text, Alert, PermissionsAndroid} from 'react-native';
import { Container, Content, Icon, Item, Button, Spinner, Right, Switch } from 'native-base';
import { Actions, ActionConst } from 'react-native-router-flux';
import Video from 'react-native-video';
import { ShareDialog } from 'react-native-fbsdk'

import { ButtonGradient, ButtonLoaderGradient, ButtonFacebook, ButtonTransparent} from '../../themes/base'
import styles from '../styles/share'

import RNFetchBlob from 'react-native-fetch-blob'




class SpitchShare extends Component {

  constructor(props) { 
    super(props);
    this.onFacebook = this.onFacebook.bind(this)
    this.state = {
    };
  }

  onOther() {
    // Share.share({
    //   message: 'Regardez mes videos sur http://spitch.tv ',
    //   url:'http://spitch.tv',
    //   title: 'Spitch'
    // }, {
    //   // Android only:
    //   dialogTitle: 'Spitch'
    // }).then(function(result) {
    //     if(result.action == "dismissedAction"){
    //         Actions.tabbar({type:ActionConst.REPLACE})
    //     }
    // })

  }


  onTwitter(){
        
        async function requestCameraPermission() {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
              {
                'title': 'Cool Photo App Camera Permission',
                'message': 'Cool Photo App needs access to your camera ' +
                           'so you can take awesome pictures.'
              }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log("You can use the camera")
            } else {
              console.log("Camera permission denied")
            }
          } catch (err) {
            console.warn(err)
          }
        }
        

        let shareOptions = {
          message:'wesh',
          url: 'file:///data/user/0/com.spitchtv/files/userThumbnails/movie4.mp4',
          type: 'video/mp4'
        };
        Share.shareSingle(Object.assign(shareOptions, {
            "social": "twitter"
          }));

        // Share.open({
        //     message:'wesh',
        //    url: '/Users/yannis/Library/Developer/CoreSimulator/Devices/970F0F47-3932-44AA-8761-0F9A99B15ECE/data/Containers/Data/Application/0529C9F2-8F53-4257-8435-22A96CD45616/Documents/userThumbnails/movie4.mp4',
        //    type: 'video/mp4'
        // });

  }


  onFacebook() {
      const shareLinkContent = {
          contentType: 'video',
          contentDescription: 'http://spitch.tv/',
          contentTitle: 'Facebook sharing is easy!',
          video: {localUrl: '/Users/yannis/Library/Developer/CoreSimulator/Devices/970F0F47-3932-44AA-8761-0F9A99B15ECE/data/Containers/Data/Application/0529C9F2-8F53-4257-8435-22A96CD45616/Documents/userThumbnails/movie4.mp4'}
      };

      // const shareLinkContent = {
      //     contentType: 'photo',
      //     photos: [
      //           {
      //               imageUrl: "file:///data/user/0/com.spitchtv/files/userThumbnails/movie2.jpg",
      //               userGenerated: false,
      //           }
      //       ]
      // };

            // RNFetchBlob
            // .config({
            //   path : RNFetchBlob.fs.dirs.DocumentDir + '/userThumbnails/movie4.mp4'
            // })
            // .fetch('GET', 'https://spitchdev-bucket-uwfmzpv98dvk.s3.amazonaws.com/media/305/spitch/1090/c927462a145745dda495.mp4', {
            // })
            // .then((res) => { 
            //   console.log('The file saved to ', res.path())
            // })


      var tmp = this;
      ShareDialog.canShow(shareLinkContent).then(
        function(canShow) {
          if (canShow) {
            return ShareDialog.show(shareLinkContent);
          }
        }
      ).then(
        function(result) {
          if (result.isCancelled) {
            console.log('Share operation was cancelled');
          } else {
            console.log('Share was successful with postId: '
              + result.postId);
          }
        },
        function(error) {
          console.log('Share failed with error: ' + error);
        }
      );
  }

  // file:///data/user/0/com.spitchtv/cache/VID_20170701_0139482111981445.mp4



  share(){
    Alert.alert(
        'Partage',
        'Votre spitch a bien été partagé !',
        [
          {text: 'Ok', onPress: () => {Actions.tabbar({type:ActionConst.REPLACE})} }
        ],
        { cancelable: false }
      )
  } 

  closeShare(){
      Actions.tabbar({type:ActionConst.REPLACE})
  }

  render() { 
    const { spitch } = this.props
    return (
        <View style={styles.container}>
            
          <Image 
            style={styles.container}
            source={{uri:"https://spitchdev-bucket-uwfmzpv98dvk.s3.amazonaws.com/media/231/spitch/869/thumb/1554130a78054e40804e.jpg"}}> 

              <View style={styles.content}>

                <View style={styles.pass}>
                    <TouchableOpacity onPress={() => this.closeShare()} >
                        <Text style={styles.passtext}>
                          Passer
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.ask}>
                    <Text style={styles.asktext}>
                      {spitch.text}
                    </Text>
                </View>

                <View style={styles.subcontent}>
                  <TouchableOpacity onPress={() => Actions.tabbar({type:ActionConst.RESET}) }>
                      <Text style={styles.sharetext}>
                          Share on
                      </Text>
                  </TouchableOpacity>

                  <View style={{flexDirection: 'row', paddingBottom:25, paddingTop:20}}>

                    <TouchableOpacity onPress={() => this.onFacebook()} style={{paddingRight:5, paddingLeft:5}}>
                    <Image 
                        style={{width:68, height:68}}
                        source={require('../../../assets/images/share-fb.png')} /> 
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {}} style={{paddingRight:5, paddingLeft:5}}>
                    <Image 
                        style={{width:68, height:68}}
                        source={require('../../../assets/images/share-insta.png')} /> 
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onTwitter()} style={{paddingRight:5, paddingLeft:5}}>
                    <Image 
                        style={{width:68, height:68}}
                        source={require('../../../assets/images/share-twitter.png')} /> 
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.onOther()} style={{paddingRight:5, paddingLeft:5}}>
                    <Image 
                        style={{width:68, height:68}}
                        source={require('../../../assets/images/share-other.png')} /> 
                    </TouchableOpacity>

                  </View>

                  <Item style={styles.bloc}>
                      <ButtonGradient text="Done" onPress={() => this.closeShare()}/>
                  </Item>

                </View>

              </View>
            
            </Image>
           
        </View>
    );
  }
}

export default SpitchShare
