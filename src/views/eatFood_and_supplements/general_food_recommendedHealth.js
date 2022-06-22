import React from 'react';
import frame from "../../assets/img/foot_supplement/frame.png";


const general_food_recommendedHealth = function () {
  return (
    <>
      <p className="nutritionHead2">รูปแบบการกินเพื่อสุขภาพที่แนะนำ</p>

      <div className="centerImage ImageTop">
        <img src={frame} alt="vector" className="col-12 col-sm-12  col-md-8 col-lg-8" />
       
      </div>
      <p className="border-bottom3 margin-leftRight"></p>
    </>
  );
};
export default general_food_recommendedHealth;