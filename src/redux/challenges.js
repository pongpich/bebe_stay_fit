import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";

/* ACTION Section */

export const types = {
  GET_RANK: "GET_RANK",
  GET_RANK_SUCCESS: "GET_RANK_SUCCESS",
  GET_LOG_WEIGHT: "GET_LOG_WEIGHT",
  GET_LOG_WEIGHT_SUCCESS: "GET_LOG_WEIGHT_SUCCESS",
  GET_LOG_WEIGHT_TEAM: "GET_LOG_WEIGHT_TEAM",
  GET_LOG_WEIGHT_TEAM_SUCCESS: "GET_LOG_WEIGHT_TEAM_SUCCESS",
  GET_NUMBER_OF_MEMBERS_TEAM: "GET_NUMBER_OF_MEMBERS_TEAM",
  GET_IS_REDUCED_WEIGHT: "GET_IS_REDUCED_WEIGHT",
  GET_IS_REDUCED_WEIGHT_SUCCESS: "GET_IS_REDUCED_WEIGHT_SUCCESS",
  GET_DAILY_TEAM_WEIGHT_BONUS: "GET_DAILY_TEAM_WEIGHT_BONUS",
  GET_DAILY_TEAM_WEIGHT_BONUS_SUCCESS: "GET_DAILY_TEAM_WEIGHT_BONUS_SUCCESS",
  GET_DAILY_WEIGH_CHALLENGE: "GET_DAILY_WEIGH_CHALLENGE",
  GET_DAILY_WEIGH_CHALLENGE_SUCCESS: "GET_DAILY_WEIGH_CHALLENGE_SUCCESS",
  POST_DAILY_WEIGH_CHALLENGE: "POST_DAILY_WEIGH_CHALLENGE",
  POST_DAILY_WEIGH_CHALLENGE_SUCCESS: "POST_DAILY_WEIGH_CHALLENGE_SUCCESS",
  GET_NUMBER_OF_TEAM_NOT_FULL: "GET_NUMBER_OF_TEAM_NOT_FULL",
  GET_NUMBER_OF_TEAM_NOT_FULL_SUCCESS: "GET_NUMBER_OF_TEAM_NOT_FULL_SUCCESS",
  ASSIGN_GROUP_TO_MEMBER: "ASSIGN_GROUP_TO_MEMBER",
  ASSIGN_GROUP_TO_MEMBER_SUCCESS: "ASSIGN_GROUP_TO_MEMBER_SUCCESS",
  CLEAR_CHALLENGES: "CLEAR_CHALLENGES",
  CREATE_CHALLENGE_GROUP: "CREATE_CHALLENGE_GROUP",
  CREATE_CHALLENGE_GROUP_SUCCESS: "CREATE_CHALLENGE_GROUP_SUCCESS",
  CREATE_CHALLENGE_GROUP_FAIL: "CREATE_CHALLENGE_GROUP_FAIL",
  LEAVE_TEAM: "LEAVE_TEAM",
  LEAVE_TEAM_SUCCESS: "LEAVE_TEAM_SUCCESS",
  GET_MEMBERS_AND_RANK: "GET_MEMBERS_AND_RANK",
  GET_MEMBERS_AND_RANK_SUCCESS: "GET_MEMBERS_AND_RANK_SUCCESS",
  GET_GROUP_NAME: "GET_GROUP_NAME",
  GET_GROUP_NAME_SUCCESS: "GET_GROUP_NAME_SUCCESS",
  GET_SCORE_OF_TEAM: "GET_SCORE_OF_TEAM",
  GET_SCORE_OF_TEAM_SUCCESS: "GET_SCORE_OF_TEAM_SUCCESS",
  GET_LEADER_BOARD: "GET_LEADER_BOARD",
  GET_LEADER_BOARD_SUCCESS: "GET_LEADER_BOARD_SUCCESS",
  GET_CHALLENGE_PERIOD: "GET_CHALLENGE_PERIOD",
  GET_CHALLENGE_PERIOD_SUCCESS: "GET_CHALLENGE_PERIOD_SUCCESS",
  SELECT_MEMBER_EVENT_LOG: "SELECT_MEMBER_EVENT_LOG",
  SELECT_MEMBER_EVENT_LOG_SUCCESS: "SELECT_MEMBER_EVENT_LOG_SUCCESS",
  GET_FRIEND_LIST: "GET_FRIEND_LIST",
  GET_FRIEND_LIST_SUCCESS: "GET_FRIEND_LIST_SUCCESS",
  GET_FRIEND_LIST_FAIL: "GET_FRIEND_LIST_FAIL",
  SEND_FRIEND_REQUEST: "SEND_FRIEND_REQUEST",
  SEND_FRIEND_REQUEST_SUCCESS: "SEND_FRIEND_REQUEST_SUCCESS",
  SEND_FRIEND_REQUEST_FAIL: "SEND_FRIEND_REQUEST_FAIL",
  GET_FRIEND_REQUEST: "GET_FRIEND_REQUEST",
  GET_FRIEND_REQUEST_SUCCESS: "GET_FRIEND_REQUEST_SUCCESS",
  GET_FRIEND_REQUEST_FAIL: "GET_FRIEND_REQUEST_FAIL",
}

export const getFriendRequest = (user_id) => ({
  type: types.GET_FRIEND_REQUEST,
  payload: {
    user_id
  }
});

export const getFriendList = (user_id) => ({
  type: types.GET_FRIEND_LIST,
  payload: {
    user_id
  }
});

export const selectMemberEventLog = (email) => ({
  type: types.SELECT_MEMBER_EVENT_LOG,
  payload: {
    email
  }
});

export const getChallengePeriod = () => ({
  type: types.GET_CHALLENGE_PERIOD
})

export const getLeaderboard = () => ({
  type: types.GET_LEADER_BOARD
})

export const getScoreOfTeam = (group_id) => ({
  type: types.GET_SCORE_OF_TEAM,
  payload: {
    group_id
  }
})

export const getGroupName = (group_id) => ({
  type: types.GET_GROUP_NAME,
  payload: {
    group_id
  }
})

export const getMembersAndRank = (group_id, start_date) => ({
  type: types.GET_MEMBERS_AND_RANK,
  payload: {
    group_id,
    start_date
  }
})

export const leaveTeam = (user_id) => ({
  type: types.LEAVE_TEAM,
  payload: {
    user_id
  }
})

export const createChallengeGroup = (user_id, group_name, start_date) => ({
  type: types.CREATE_CHALLENGE_GROUP,
  payload: {
    user_id,
    group_name,
    start_date
  }
})

export const sendFriendRequest = (user_id, to) => ({
  type: types.SEND_FRIEND_REQUEST,
  payload: {
    user_id,
    to
  }
})

export const clearChallenges = () => ({
  type: types.CLEAR_CHALLENGES
})

export const assignGroupToMember = (user_id, start_date) => ({
  type: types.ASSIGN_GROUP_TO_MEMBER,
  payload: {
    user_id,
    start_date
  }
})

export const getNumberOfTeamNotFull = () => ({
  type: types.GET_NUMBER_OF_TEAM_NOT_FULL
})

export const postDailyWeighChallenge = (user_id, weight) => ({
  type: types.POST_DAILY_WEIGH_CHALLENGE,
  payload: {
    user_id,
    weight
  }
});

export const getDailyWeighChallenge = (user_id) => ({
  type: types.GET_DAILY_WEIGH_CHALLENGE,
  payload: {
    user_id
  }
});

export const getDailyTeamWeightBonus = (user_id) => ({
  type: types.GET_DAILY_TEAM_WEIGHT_BONUS,
  payload: {
    user_id
  }
});

export const getRank = (user_id, start_date) => ({
  type: types.GET_RANK,
  payload: {
    user_id,
    start_date
  }
});

export const getLogWeight = (user_id) => ({
  type: types.GET_LOG_WEIGHT,
  payload: {
    user_id
  }
});

export const getLogWeightTeam = (group_id) => ({
  type: types.GET_LOG_WEIGHT_TEAM,
  payload: {
    group_id
  }
});

export const getIsReducedWeight = (user_id) => ({
  type: types.GET_IS_REDUCED_WEIGHT,
  payload: {
    user_id
  }
});

/* END OF ACTION Section */

/* SAGA Section */

const getFriendListSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getFriendList", {
      queryStringParameters: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getFriendRequestSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getFriendRequest", {
      queryStringParameters: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getRankSagaAsync = async (
  user_id,
  start_date
) => {
  try {
    const apiResult = await API.get("bebe", "/getRank", {
      queryStringParameters: {
        user_id,
        start_date
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getLogWeightSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getLogWeight", {
      queryStringParameters: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getNumberOfTeamNotFullSagaAsync = async (
) => {
  try {
    const apiResult = await API.get("bebe", "/getNumberOfTeamNotFull", {
      queryStringParameters: {

      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getLeaderboardSagaAsync = async (

) => {
  try {
    const apiResult = await API.get("bebe", "/getLeaderboard", {
      queryStringParameters: {
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getChallengePeriodSagaAsync = async (

) => {
  try {
    const apiResult = await API.get("bebe", "/getChallengePeriod", {
      queryStringParameters: {
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getLogWeightTeamSagaAsync = async (
  group_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getLogWeightTeam", {
      queryStringParameters: {
        group_id
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getIsReducedWeightSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getIsReducedWeight", {
      queryStringParameters: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const selectMemberEventLogSagaAsync = async (
  email
) => {
  try {
    const apiResult = await API.get("bebe", "/selectMemberEventLog", {
      queryStringParameters: {
        email
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getDailyWeighChallengeSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getDailyWeighChallenge", {
      queryStringParameters: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const postDailyWeighChallengeSagaAsync = async (
  user_id,
  weight
) => {
  try {
    const apiResult = await API.post("bebe", "/daily_weight_score", {
      body: {
        user_id,
        weight
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const assignGroupToMemberSagaAsync = async (
  user_id,
  start_date
) => {
  try {
    const apiResult = await API.post("bebe", "/assignGroupToMember", {
      body: {
        user_id,
        start_date
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const createChallengeGroupSagaAsync = async (
  user_id,
  group_name,
  start_date
) => {
  try {
    const apiResult = await API.post("bebe", "/createChallengeGroup", {
      body: {
        user_id,
        group_name,
        start_date
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const sendFriendRequestSagaAsync = async (
  user_id,
  to
) => {
  try {
    const apiResult = await API.post("bebe", "/sendFriendRequest", {
      body: {
        user_id,
        to
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const leaveTeamSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.post("bebe", "/leaveTeam", {
      body: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getMembersAndRankSagaAsync = async (
  group_id,
  start_date
) => {
  try {
    const apiResult = await API.get("bebe", "/getMembersAndRank", {
      queryStringParameters: {
        group_id,
        start_date
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getGroupNameSagaAsync = async (
  group_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getGroupName", {
      queryStringParameters: {
        group_id
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getScoreOfTeamSagaAsync = async (
  group_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getScoreOfTeam", {
      queryStringParameters: {
        group_id
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

const getDailyTeamWeightBonusSagaAsync = async (
  user_id
) => {
  try {
    const apiResult = await API.get("bebe", "/getDailyTeamWeightBonus", {
      queryStringParameters: {
        user_id
      }
    });
    return apiResult
  } catch (error) {
    console.log("error :", error);
    return { error, messsage: error.message }
  }
}

function* getRankSaga({ payload }) {
  const {
    user_id,
    start_date
  } = payload
  try {
    const apiResult = yield call(
      getRankSagaAsync,
      user_id,
      start_date
    );
    yield put({
      type: types.GET_RANK_SUCCESS,
      payload: apiResult.results.start_rank
    })
  } catch (error) {
    console.log("error from getRankSaga :", error);
  }
}

function* getFriendListSaga({ payload }) {
  const {
    user_id
  } = payload
  try {
    const apiResult = yield call(
      getFriendListSagaAsync,
      user_id
    );
    console.log("apiResult :", apiResult);
    if (apiResult.results.message === "success") {
      yield put({
        type: types.GET_FRIEND_LIST_SUCCESS,
        payload: apiResult.results.friend_list
      })
    } else if (apiResult.results.message === "friendless") {
      yield put({
        type: types.GET_FRIEND_LIST_FAIL
      })
    }

  } catch (error) {
    console.log("error from getFriendListSaga :", error);
  }
}

function* getFriendRequestSaga({ payload }) {
  const {
    user_id
  } = payload
  try {
    const apiResult = yield call(
      getFriendRequestSagaAsync,
      user_id
    );
    console.log("apiResult :", apiResult);
    if (apiResult.results.message === "success") {
      yield put({
        type: types.GET_FRIEND_REQUEST_SUCCESS,
        payload: apiResult.results.friend_request
      })
    } else if (apiResult.results.message === "no_friend_request") {
      yield put({
        type: types.GET_FRIEND_REQUEST_FAIL
      })
    }

  } catch (error) {
    console.log("error from getFriendRequestSaga :", error);
  }
}

function* getLogWeightSaga({ payload }) {
  const {
    user_id
  } = payload
  try {
    const apiResult = yield call(
      getLogWeightSagaAsync,
      user_id
    );
    yield put({
      type: types.GET_LOG_WEIGHT_SUCCESS,
      payload: Number(apiResult.results.logWeightCount)
    })
  } catch (error) {
    console.log("error from getLogWeightSaga :", error);
  }
}

function* getLogWeightTeamSaga({ payload }) {
  const {
    group_id
  } = payload
  try {
    const apiResult = yield call(
      getLogWeightTeamSagaAsync,
      group_id
    );
    yield put({
      type: types.GET_LOG_WEIGHT_TEAM_SUCCESS,
      payload: Number(apiResult.results.logWeightTeamCount)
    })
    yield put({
      type: types.GET_NUMBER_OF_MEMBERS_TEAM,
      payload: Number(apiResult.results.numberOfMembers)
    })
  } catch (error) {
    console.log("error from getLogWeightTeamSaga :", error);
  }
}

function* getNumberOfTeamNotFullSaga({ }) {
  try {
    const apiResult = yield call(
      getNumberOfTeamNotFullSagaAsync
    );
    yield put({
      type: types.GET_NUMBER_OF_TEAM_NOT_FULL_SUCCESS,
      payload: Number(apiResult.results.numberOfTeamNotFull)
    })
  } catch (error) {
    console.log("error from getNumberOfTeamNotFullSaga :", error);
  }
}

function* getLeaderboardSaga() {
  try {
    const apiResult = yield call(
      getLeaderboardSagaAsync
    );
    yield put({
      type: types.GET_LEADER_BOARD_SUCCESS,
      payload: apiResult.results
    })
  } catch (error) {
    console.log("error from getLeaderboardSaga :", error);
  }
}

function* getChallengePeriodSaga() {
  try {
    const apiResult = yield call(
      getChallengePeriodSagaAsync
    );
    yield put({
      type: types.GET_CHALLENGE_PERIOD_SUCCESS,
      payload: apiResult.results
    })
  } catch (error) {
    console.log("error from getChallengePeriodSaga :", error);
  }
}

function* selectMemberEventLogSaga({ payload }) {
  const {
    email
  } = payload
  try {
    const apiResult = yield call(
      selectMemberEventLogSagaAsync,
      email
    );
    yield put({
      type: types.SELECT_MEMBER_EVENT_LOG_SUCCESS,
      payload: apiResult.results.memberEventLog
    })
  } catch (error) {
    console.log("error from selectMemberEventLogSaga :", error);
  }
}

function* getIsReducedWeightSaga({ payload }) {
  const {
    user_id
  } = payload
  try {
    const apiResult = yield call(
      getIsReducedWeightSagaAsync,
      user_id
    );
    yield put({
      type: types.GET_IS_REDUCED_WEIGHT_SUCCESS,
      payload: (apiResult.results.isReducedWeight)
    })
  } catch (error) {
    console.log("error from getIsReducedWeightSaga :", error);
  }
}

function* getDailyWeighChallengeSaga({ payload }) {
  const {
    user_id
  } = payload
  try {
    const apiResult = yield call(
      getDailyWeighChallengeSagaAsync,
      user_id
    );
    yield put({
      type: types.GET_DAILY_WEIGH_CHALLENGE_SUCCESS,
      payload: (apiResult.results.dailyWeighChallenge)
    })
  } catch (error) {
    console.log("error from getDailyWeighChallengeSaga :", error);
  }
}

function* postDailyWeighChallengeSaga({ payload }) {
  const {
    user_id,
    weight
  } = payload
  try {
    const apiResult = yield call(
      postDailyWeighChallengeSagaAsync,
      user_id,
      weight
    );
    yield put({
      type: types.POST_DAILY_WEIGH_CHALLENGE_SUCCESS
    })
  } catch (error) {
    console.log("error from postDailyWeighChallengeSaga :", error);
  }
}

function* assignGroupToMemberSaga({ payload }) {
  const {
    user_id,
    start_date
  } = payload
  try {
    const apiResult = yield call(
      assignGroupToMemberSagaAsync,
      user_id,
      start_date
    );
    yield put({
      type: types.ASSIGN_GROUP_TO_MEMBER_SUCCESS
    })
  } catch (error) {
    console.log("error from assignGroupToMemberSaga :", error);
  }
}

function* createChallengeGroupSaga({ payload }) {
  const {
    user_id,
    group_name,
    start_date
  } = payload
  try {
    const apiResult = yield call(
      createChallengeGroupSagaAsync,
      user_id,
      group_name,
      start_date
    );
    if (apiResult.results.message === "success") {
      yield put({
        type: types.CREATE_CHALLENGE_GROUP_SUCCESS
      })
    } else if (apiResult.results.message === "teamNameExist") {
      yield put({
        type: types.CREATE_CHALLENGE_GROUP_FAIL
      })
    }
  } catch (error) {
    console.log("error from createChallengeGroupSaga :", error);
  }
}

function* sendFriendRequestSaga({ payload }) {
  const {
    user_id,
    to
  } = payload
  try {
    const apiResult = yield call(
      sendFriendRequestSagaAsync,
      user_id,
      to
    );
    if (apiResult.results.message === "success" || apiResult.results.message === "friend_request_exists") {
      yield put({
        type: types.SEND_FRIEND_REQUEST_SUCCESS
      })
    } else if (apiResult.results.message === "user_not_exists") {
      yield put({
        type: types.SEND_FRIEND_REQUEST_FAIL
      })
    }
  } catch (error) {
    console.log("error from createChallengeGroupSaga :", error);
  }
}

function* leaveTeamSaga({ payload }) {
  const {
    user_id
  } = payload
  try {
    const apiResult = yield call(
      leaveTeamSagaAsync,
      user_id
    );
    yield put({
      type: types.LEAVE_TEAM_SUCCESS
    })
  } catch (error) {
    console.log("error from leaveTeamSaga :", error);
  }
}

function* getMembersAndRankSaga({ payload }) {
  const {
    group_id,
    start_date
  } = payload
  try {
    const apiResult = yield call(
      getMembersAndRankSagaAsync,
      group_id,
      start_date
    );
    console.log("apiResult :", apiResult);
    yield put({
      type: types.GET_MEMBERS_AND_RANK_SUCCESS,
      payload: apiResult.results.members
    })
  } catch (error) {
    console.log("error from getMembersAndRankSaga :", error);
  }
}

function* getGroupNameSaga({ payload }) {
  const {
    group_id
  } = payload
  try {
    const apiResult = yield call(
      getGroupNameSagaAsync,
      group_id
    );
    yield put({
      type: types.GET_GROUP_NAME_SUCCESS,
      payload: apiResult.results.group_name
    })
  } catch (error) {
    console.log("error from getGroupNameSaga :", error);
  }
}

function* getScoreOfTeamSaga({ payload }) {
  const {
    group_id
  } = payload
  try {
    const apiResult = yield call(
      getScoreOfTeamSagaAsync,
      group_id
    );
    yield put({
      type: types.GET_SCORE_OF_TEAM_SUCCESS,
      payload: apiResult.results.totalScoreOfTeam
    })
  } catch (error) {
    console.log("error from getScoreOfTeamSaga :", error);
  }
}

function* getDailyTeamWeightBonusSaga({ payload }) {
  const {
    user_id
  } = payload
  try {
    const apiResult = yield call(
      getDailyTeamWeightBonusSagaAsync,
      user_id
    );
    yield put({
      type: types.GET_DAILY_TEAM_WEIGHT_BONUS_SUCCESS,
      payload: Number(apiResult.results.dailyTeamWeightBonusCount)
    })
  } catch (error) {
    console.log("error from getDailyTeamWeightBonusSaga :", error);
  }
}

export function* watchGetRank() {
  yield takeEvery(types.GET_RANK, getRankSaga)
}

export function* watchGetLogWeight() {
  yield takeEvery(types.GET_LOG_WEIGHT, getLogWeightSaga)
}

export function* watchGetLogWeightTeam() {
  yield takeEvery(types.GET_LOG_WEIGHT_TEAM, getLogWeightTeamSaga)
}

export function* watchGetIsReducedWeight() {
  yield takeEvery(types.GET_IS_REDUCED_WEIGHT, getIsReducedWeightSaga)
}

export function* watchGetDailyWeighChallenge() {
  yield takeEvery(types.GET_DAILY_WEIGH_CHALLENGE, getDailyWeighChallengeSaga)
}

export function* watchPostDailyWeighChallenge() {
  yield takeEvery(types.POST_DAILY_WEIGH_CHALLENGE, postDailyWeighChallengeSaga)
}

export function* watchGetDailyTeamWeightBonus() {
  yield takeEvery(types.GET_DAILY_TEAM_WEIGHT_BONUS, getDailyTeamWeightBonusSaga)
}

export function* watchGetNumberOfTeamNotFull() {
  yield takeEvery(types.GET_NUMBER_OF_TEAM_NOT_FULL, getNumberOfTeamNotFullSaga)
}

export function* watchAssignGroupToMember() {
  yield takeEvery(types.ASSIGN_GROUP_TO_MEMBER, assignGroupToMemberSaga)
}

export function* watchCreateChallengeGroup() {
  yield takeEvery(types.CREATE_CHALLENGE_GROUP, createChallengeGroupSaga)
}

export function* watchLeaveTeam() {
  yield takeEvery(types.LEAVE_TEAM, leaveTeamSaga)
}

export function* watchGetMembersAndRank() {
  yield takeEvery(types.GET_MEMBERS_AND_RANK, getMembersAndRankSaga)
}

export function* watchGetGroupName() {
  yield takeEvery(types.GET_GROUP_NAME, getGroupNameSaga)
}

export function* watchGetScoreOfTeam() {
  yield takeEvery(types.GET_SCORE_OF_TEAM, getScoreOfTeamSaga)
}

export function* watchGetLeaderboard() {
  yield takeEvery(types.GET_LEADER_BOARD, getLeaderboardSaga)
}

export function* watchGetChallengePeriod() {
  yield takeEvery(types.GET_CHALLENGE_PERIOD, getChallengePeriodSaga)
}

export function* watchSelectMemberEventLog() {
  yield takeEvery(types.SELECT_MEMBER_EVENT_LOG, selectMemberEventLogSaga)
}

export function* watchGetFriendList() {
  yield takeEvery(types.GET_FRIEND_LIST, getFriendListSaga)
}

export function* watchSendFriendRequest() {
  yield takeEvery(types.SEND_FRIEND_REQUEST, sendFriendRequestSaga)
}

export function* watchGetFriendRequest() {
  yield takeEvery(types.GET_FRIEND_REQUEST, getFriendRequestSaga)
}

export function* saga() {
  yield all([
    fork(watchGetRank),
    fork(watchGetLogWeight),
    fork(watchGetLogWeightTeam),
    fork(watchGetIsReducedWeight),
    fork(watchGetDailyWeighChallenge),
    fork(watchGetDailyTeamWeightBonus),
    fork(watchPostDailyWeighChallenge),
    fork(watchGetNumberOfTeamNotFull),
    fork(watchAssignGroupToMember),
    fork(watchCreateChallengeGroup),
    fork(watchLeaveTeam),
    fork(watchGetMembersAndRank),
    fork(watchGetGroupName),
    fork(watchGetScoreOfTeam),
    fork(watchGetLeaderboard),
    fork(watchGetChallengePeriod),
    fork(watchSelectMemberEventLog),
    fork(watchGetFriendList),
    fork(watchSendFriendRequest),
    fork(watchGetFriendRequest),
  ]);
}

/* END OF SAGA Section */

/* REDUCER Section */

const INIT_STATE = {
  rank: null,
  logWeightCount: 0,
  isReducedWeight: false,
  logWeightTeamCount: 0,
  numberOfMembers: 0,
  dailyTeamWeightBonusCount: 0,
  dailyWeighChallenge: false,
  statusGetDailyWeighChallenge: "default",
  statusPostDailyWeighChallenge: "default",
  numberOfTeamNotFull: 0,
  statusGetNumberOfTeamNotFull: "default",
  statusLeaveTeam: "default",
  membersOfTeam: [],
  group_name: "",
  totalScoreOfTeam: 0,
  teamRank: [],
  individualRank: [],
  statusCreateTeam: "default",
  challengePeriod: true,
  memberEventLog: [],
  friend_list: [],
  statusGetFriendList: "default",
  statusSendFriendRequest: "default",
  friend_request: [],
  statusGetFriendRequest: "default",
};

export function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case types.GET_FRIEND_REQUEST:
      return {
        ...state,
        statusGetFriendRequest: "loading"
      }
    case types.GET_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        friend_request: action.payload,
        statusGetFriendRequest: "success"
      }
    case types.GET_FRIEND_REQUEST_FAIL:
      return {
        ...state,
        statusGetFriendRequest: "fail"
      }
    case types.SEND_FRIEND_REQUEST:
      return {
        ...state,
        statusSendFriendRequest: "loading"
      }
    case types.SEND_FRIEND_REQUEST_SUCCESS:
      return {
        ...state,
        statusSendFriendRequest: "success"
      }
    case types.SEND_FRIEND_REQUEST_FAIL:
      return {
        ...state,
        statusSendFriendRequest: "fail"
      }
    case types.GET_FRIEND_LIST:
      return {
        ...state,
        statusGetFriendList: "loading"
      }
    case types.GET_FRIEND_LIST_SUCCESS:
      return {
        ...state,
        friend_list: action.payload,
        statusGetFriendList: "success"
      }
    case types.GET_FRIEND_LIST_FAIL:
      return {
        ...state,
        friend_list: [],
        statusGetFriendList: "fail"
      }
    case types.SELECT_MEMBER_EVENT_LOG_SUCCESS:
      return {
        ...state,
        memberEventLog: action.payload
      }
    case types.GET_RANK_SUCCESS:
      return {
        ...state,
        rank: action.payload
      }
    case types.GET_LOG_WEIGHT_SUCCESS:
      return {
        ...state,
        logWeightCount: action.payload
      }
    case types.GET_LOG_WEIGHT_TEAM_SUCCESS:
      return {
        ...state,
        logWeightTeamCount: action.payload
      }
    case types.GET_NUMBER_OF_MEMBERS_TEAM:
      return {
        ...state,
        numberOfMembers: action.payload
      }
    case types.GET_DAILY_TEAM_WEIGHT_BONUS_SUCCESS:
      return {
        ...state,
        dailyTeamWeightBonusCount: action.payload
      }
    case types.GET_NUMBER_OF_TEAM_NOT_FULL:
      return {
        ...state,
        statusGetNumberOfTeamNotFull: "loading"
      }
    case types.GET_NUMBER_OF_TEAM_NOT_FULL_SUCCESS:
      return {
        ...state,
        numberOfTeamNotFull: action.payload,
        statusGetNumberOfTeamNotFull: "success"
      }
    case types.GET_LEADER_BOARD_SUCCESS:
      return {
        ...state,
        teamRank: action.payload.teamRank,
        individualRank: action.payload.individualRank
      }
    case types.GET_CHALLENGE_PERIOD_SUCCESS:
      return {
        ...state,
        challengePeriod: action.payload.challengePeriod
      }
    case types.ASSIGN_GROUP_TO_MEMBER_SUCCESS:
      return {
        ...state,
        statusGetNumberOfTeamNotFull: "default",
        statusLeaveTeam: "default"
      }
    case types.CREATE_CHALLENGE_GROUP:
      return {
        ...state,
        statusCreateTeam: "loading"
      }
    case types.CREATE_CHALLENGE_GROUP_SUCCESS:
      return {
        ...state,
        statusCreateTeam: "success"
      }
    case types.CREATE_CHALLENGE_GROUP_FAIL:
      return {
        ...state,
        statusCreateTeam: "fail"
      }
    case types.LEAVE_TEAM:
      return {
        ...state,
        statusLeaveTeam: "loading"
      }
    case types.LEAVE_TEAM_SUCCESS:
      return {
        ...state,
        statusLeaveTeam: "success"
      }
    case types.GET_IS_REDUCED_WEIGHT_SUCCESS:
      return {
        ...state,
        isReducedWeight: action.payload
      }
    case types.GET_DAILY_WEIGH_CHALLENGE:
      return {
        ...state,
        statusGetDailyWeighChallenge: "loading"
      }
    case types.GET_DAILY_WEIGH_CHALLENGE_SUCCESS:
      return {
        ...state,
        dailyWeighChallenge: action.payload,
        statusPostDailyWeighChallenge: "default",
        statusGetDailyWeighChallenge: "success"
      }
    case types.POST_DAILY_WEIGH_CHALLENGE:
      return {
        ...state,
        statusPostDailyWeighChallenge: "loading"
      }
    case types.POST_DAILY_WEIGH_CHALLENGE_SUCCESS:
      return {
        ...state,
        statusPostDailyWeighChallenge: "success",
        dailyWeighChallenge: false
      }
    case types.GET_MEMBERS_AND_RANK_SUCCESS:
      return {
        ...state,
        membersOfTeam: action.payload
      }
    case types.GET_GROUP_NAME_SUCCESS:
      return {
        ...state,
        group_name: action.payload
      }
    case types.GET_SCORE_OF_TEAM_SUCCESS:
      return {
        ...state,
        totalScoreOfTeam: action.payload
      }
    case types.CLEAR_CHALLENGES:
      return INIT_STATE;
    default:
      return { ...state };
  }
}