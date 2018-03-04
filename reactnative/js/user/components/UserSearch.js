import React, { Component } from 'react';
import { Image, View, TouchableOpacity, FlatList } from 'react-native';
import { Container, Spinner, Content, List, ListItem, Thumbnail, Text, Body, Left, Right, Button, Icon, Item, Input} from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from '../styles/search'
import I18n from '../../i18n';


class UserSearch extends Component {

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this)
    // this.onRefresh = this.onRefresh.bind(this)
    this.onEndReached = this.onEndReached.bind(this)
  }

  componentDidMount() {
      this.props.listSearchUser();
  }

  searchUpdated(search){
      this.props.listSearchUser(search);
  }

  onEndReached(){
    if(this.props.search.pagination)
        this.props.nextListSearchUser(this.props.search.pagination)
  }

  unfollowFriend(id){
    this.props.unfollowUser(id)
  }

  followFriend(id){
    this.props.followUser(id)
  }


  renderItem({item}){
      const { user } = this.props
      return(
          <ListItem avatar key={item.id} style={{paddingTop:5,paddingBottom:5}}>
              <Left >
                  <TouchableOpacity onPress={() => Actions.visit({id:item.id})}>
                    <Thumbnail small source={{uri:item.photo+".115x115"}} />
                  </TouchableOpacity>
              </Left>
              
              <Body style={{paddingBottom:10}}>
                  <TouchableOpacity onPress={() => Actions.visit({id:item.id})}>
                      <Text>{item.first_name} {item.last_name}</Text>
                      <Text note>@{item.username}</Text>
                  </TouchableOpacity>
              </Body>
              
                {item.id != user.id && 
                <Right>
                  {item.follow &&
                    <Button small bordered onPress={() => this.unfollowFriend(item.id) }>
                        <Icon name='checkmark' style={{color:'blue'}}/>
                    </Button>
                    ||
                    <Button small primary onPress={() => this.followFriend(item.id) }>
                        <Text>{I18n.t('listRelation_btn1')}</Text>
                    </Button>
                  }
                </Right>
                }
                
          </ListItem>
      )
  }

  

renderList(){
     const {user, search } = this.props
     
     if(search.list.length > 0){

          return(
            <FlatList
                data={search.list}
                keyExtractor={(item, index) => index}
                renderItem={this.renderItem}
                onEndReachedThreshold={0.5}
                onEndReached={this.onEndReached}
              />
          )

      }else if(search.error){ 

        return(
            <Text style={styles.txtimg}>Error</Text>
        )

      }else{

          if(search.pending){
            return(
                <Spinner color='#ccc' style={{paddingTop:200}}/>
            )
          }else{
            return (
                <List>
                    <ListItem itemHeader>
                         <Text>{I18n.t('UserSearch_text1')}</Text>
                    </ListItem>
                </List>
            )
          }
      }
  }

  
  render() {

    return (
      <Container>
          <Item>
              <Icon active name='ios-search-outline' style={{paddingLeft:20, paddingRight:10}}/>
              <Input placeholder={I18n.t('listRelation_text3')} onChangeText={(text) => this.searchUpdated(text)} />
          </Item>

          {this.renderList()}

      </Container>
    );
  }



}


export default UserSearch
