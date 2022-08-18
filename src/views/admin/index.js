import React, { Component } from 'react';

import { getFriendList, getRank, getLogWeight, getIsReducedWeight, getLogWeightTeam, getDailyTeamWeightBonus, getNumberOfTeamNotFull, assignGroupToMember, clearChallenges, createChallengeGroup, leaveTeam, getMembersAndRank, getGroupName, getScoreOfTeam, getLeaderboard, getChallengePeriod, sendFriendRequest, getFriendRequest, acceptFriend, rejectFriend, getMaxFriends, deleteFriend, sendTeamInvite, getTeamInvite, rejectTeamInvite, acceptTeamInvite, getFriendsRank } from "../../redux/challenges";
import { getGroupID, checkUpdateMaxFriends } from "../../redux/auth";
import { connect } from "react-redux";
import { selectMemberEventLog } from "../../redux/challenges";

 class Index extends Component {

componentDidMount() {
  const {authorization} =   this.props.user
  if (authorization !== "admin") {
    this.props.history.push('/videoList');
  }

}

  render() {
    return (
      <div>index</div>
    )
  }
}


const mapStateToProps = ({ authUser, challenges,settings }) => {
  const { user } = authUser;

  const { statusCreateTeam, numberOfTeamNotFull, statusGetNumberOfTeamNotFull, statusLeaveTeam, membersOfTeam, group_name, totalScoreOfTeam, rank, teamRank, individualRank, logWeightCount, isReducedWeight, logWeightTeamCount, numberOfMembers, dailyTeamWeightBonusCount, friend_list, statusGetFriendList, statusSendFriendRequest, friend_request, statusGetFriendRequest, statusAcceptFriend, statusRejectFriend, statusGetMaxFriends, max_friends, statusDeleteFriend, statusSendTeamInvite, team_invite, statusGetTeamInvite, statusRejectTeamInvite, statusAcceptTeamInvite, friendsRank, statusGetFriendsRank, challengePeriod } = challenges;
  let locale;
  if (settings) {
    locale = settings.locale;
  } else {
    locale = "th";
  }
  return { locale, user, statusCreateTeam, numberOfTeamNotFull, statusGetNumberOfTeamNotFull, statusLeaveTeam, membersOfTeam, group_name, totalScoreOfTeam, rank, teamRank, individualRank, logWeightCount, isReducedWeight, logWeightTeamCount, numberOfMembers, dailyTeamWeightBonusCount, friend_list, statusGetFriendList, statusSendFriendRequest, friend_request, statusGetFriendRequest, statusAcceptFriend, statusRejectFriend, statusGetMaxFriends, max_friends, statusDeleteFriend, statusSendTeamInvite, team_invite, statusGetTeamInvite, statusRejectTeamInvite, statusAcceptTeamInvite, friendsRank, statusGetFriendsRank, challengePeriod };
};

const mapActionsToProps = { getGroupID, getRank, getLogWeight, getIsReducedWeight, getLogWeightTeam, getDailyTeamWeightBonus, getNumberOfTeamNotFull, assignGroupToMember, clearChallenges, createChallengeGroup, leaveTeam, getMembersAndRank, getGroupName, getScoreOfTeam, getLeaderboard, getChallengePeriod, getFriendList, sendFriendRequest, getFriendRequest, acceptFriend, rejectFriend, getMaxFriends, deleteFriend, sendTeamInvite, getTeamInvite, rejectTeamInvite, acceptTeamInvite, checkUpdateMaxFriends, getFriendsRank };

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Index);