// communityService.js
const { response } = require('express');
const pool = require('../main');
const communityModel = require('../models/communityModel');

exports.retrieveCommunity = async function(boardId, title) {
    const communityParams = [boardId, title];
    const communityResult = await communityModel.selectCommunity(pool,communityParams);
    console.log(communityResult.title);
    return communityResult;
}
exports.retrieveSelectedCommunity = async function (user_id) {
    try {
        const selectedCommunityParams = [user_id];
        const communityDataResult = await communityModel.getCommunityList(pool, selectedCommunityParams);

        return communityDataResult;
    } catch (err) {
        return 'retrieveSelectedCommunityError';
    }
}

exports.createBoard = async function (
    category_name,
    user_id,
    title,
    content,
    updated_at
) {
  try {
   
    const insertBoardParams = [
        category_name,
        user_id,
        title,
        content,
        updated_at,
        0
    ];
    
    await communityModel.insertBoardInfo(pool, insertBoardParams);
    
    return '성공';
  } catch (err) {
      return err;
  }
};
