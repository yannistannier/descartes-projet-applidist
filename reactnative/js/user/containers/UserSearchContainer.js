import { connect } from 'react-redux';
import UserSearch from '../components/UserSearch';

import { listSearchUser, nextListSearchUser, followUnfollowListSearchUser } from '../UserActions'

import { followUser, unfollowUser} from '../../relation/RelationActions'


function mapStateToProps(state, ownProps) {
  return { 
  	search:state.user.search,
    user: state.user.profile.data
  };
}

function mapDispatchToProps(dispatch){
  return {
    listSearchUser:(search=null) => {
    	return dispatch(listSearchUser(search))
    },
    nextListSearchUser:(cursor, search=null) => {
      return dispatch(nextListSearchUser(cursor, search))
    },
    followUser: (id) => {
      dispatch(followUnfollowListSearchUser(id))
      return dispatch(followUser(id))
    },
    unfollowUser: (id) => {
      dispatch(followUnfollowListSearchUser(id))
      return dispatch(unfollowUser(id))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSearch);
