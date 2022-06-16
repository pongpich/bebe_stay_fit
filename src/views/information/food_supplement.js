import React, { Component } from 'react'

class Food_supplement extends Component {


  render() {
    return (
      <>
        <div className="box-videoHead">
          <div className="food_supplementHead">
            <p>วิธีการกินอาหารและอาหารเสริม</p>
          </div>
        </div>
        <div className="food_supplement">
          {/* <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="navbarLeft">
                <h1>Manu 1</h1>
              </div>
            </div>
            <div cllassName="col-12 col-sm-12  col-md-8 col-lg-8">
               <div className="navbarHead  margin-leftRight">
                <select class="form-select" aria-label="Default select example">
                  <option>สำหรับทานอาหารทั่วไป</option>
                  <option>สำหรับทานอาหารมังสวิรัติ</option>
                </select>
              </div>
              <p className="border-bottom2 margin-leftRight"></p>

        
              <h6 >adadasdasasds</h6>
            </div>
          </div> */}

          <div class="row row-cols-auto">
            <div class="col-md-3 col-lg-3">
              <div className="navbarLeft">
                <h1>สำหรับทานอาหารทั่วไป</h1>
                <h1>สำหรับทานอาหารมังสวิรัติ</h1>
              </div>
            </div>
            <div class="col-12 col-sm-12  col-md-12 col-lg-9">
              <div className="navbarHead  margin-leftRight">
                <select class="form-select" aria-label="Default select example">
                  <option>สำหรับทานอาหารทั่วไป</option>
                  <option>สำหรับทานอาหารมังสวิรัติ</option>
                </select>
                <p className="border-bottom2"></p>
              </div>
              <div className="headTop">
              ฟหกฟหกฟหก
              </div>
              
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Food_supplement;