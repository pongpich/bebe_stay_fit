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
          <div class="row row-cols-auto">
            <div class="col-md-3 col-lg-3">
              <div className="navbarLeft">
                <div className="mavbarfood">
                  <p className="manuFood">สำหรับทานอาหารทั่วไป</p>
                  <p className="manuFood-border">สำหรับทานอาหารมังสวิรัติ</p>
                </div>
                <div className="boxHrmanu"></div>
              </div>
            </div>
            <div className="col-12 col-sm-12  col-md-9 col-lg-9">
              <div className="navbarHead  margin-leftRight">
                <select className="form-select" aria-label="Default select example">
                  <option>สำหรับทานอาหารทั่วไป</option>
                  <option>สำหรับทานอาหารมังสวิรัติ</option>
                </select>
                <p className="border-bottom2"></p>
              </div>
              <div className="headTop">
                 {/*  <div className="">
                  <nav id="navbar-example3" class="navbar bg-light flex-column align-items-stretch p-3">
                  <a class="navbar-brand" href="#">Navbar</a>
                  <nav class="nav nav-pills flex-column">
                    <a class="nav-link" href="#item-1">Item 1</a>
                    <nav class="nav nav-pills flex-column">
                      <a class="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
                      <a class="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
                    </nav>
                    <a class="nav-link" href="#item-2">Item 2</a>
                    <a class="nav-link" href="#item-3">Item 3</a>
                    <nav class="nav nav-pills flex-column">
                      <a class="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                      <a class="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
                    </nav>
                  </nav>
                </nav>

                <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" tabindex="0">
                  <div id="item-1">
                    <h4>Item 1</h4>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.

                      Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
                  </div>
                  <div id="item-1-1">
                    <h5>Item 1-1</h5>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.

                      Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
                  </div>
                  <div id="item-1-2">
                    <h5>Item 1-2</h5>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.

                      Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.

                    </p>
                  </div>
                  <div id="item-2">
                    <h4>Item 2</h4>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                  </div>
                  <div id="item-3">
                    <h4>Item 3</h4>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.</p>
                  </div>
                  <div id="item-3-1">
                    <h5>Item 3-1</h5>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.

                      Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.

                    </p>
                  </div>
                  <div id="item-3-2">
                    <h5>Item 3-2</h5>
                    <p>This is some placeholder content for the scrollspy page. Note that as you scroll down the page, the appropriate navigation link is highlighted. It's repeated throughout the component example. We keep adding some more example copy here to emphasize the scrolling and highlighting.

                      Keep in mind that the JavaScript plugin tries to pick the right element among all that may be visible. Multiple visible scrollspy targets at the same time may cause some issues.</p>
                  </div>
                </div>
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default Food_supplement;