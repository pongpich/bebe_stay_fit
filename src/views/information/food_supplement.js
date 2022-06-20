
import React, { useRef, useState, useEffect } from 'react';
import useScrollSpy from 'react-use-scrollspy';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';

import generalFood from '../eatFood_and_supplements/general_food';
import vegetarianFood from '../eatFood_and_supplements/vegetarian_food';




const onChangeManu = (event) => {
  console.log(`${event.target.value}`);

  document.getElementById(`${event.target.value}`).click();

}


const Food_supplement = () => {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const [articleMain, setArticleMain] = useState();
  const [article, setArticle] = useState();
  const [articleHead, setArticleHead] = useState();
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });
  useEffect(() => {
    if (activeSection <= 6) {
      setArticleMain(0);
      if (activeSection <= 1) {
        setArticle(1);
        setArticleHead(activeSection)
      } else {
        setArticle(activeSection);
        setArticleHead(activeSection)
      }
    }
    if (activeSection >= 7) {
      setArticleMain(7);
      if (activeSection >= 7 || activeSection <= 9) {
        setArticle(9);
        setArticleHead(8)
      } else {
        setArticle(activeSection);
        setArticleHead(activeSection)
      }
    }


  })
  console.log("AAA", sectionRefs);
  return (
    <>
      <BrowserRouter>
        <div className="box-videoHead">
          <div className="food_supplementHead">
            <p>วิธีการกินอาหารและอาหารเสริม</p>
          </div>
        </div>
        <div className="food_supplement">
          <div className="row row-cols-auto">
            <div className="col-lg-3">
              <div className="navbarLeft">
                <div className="mavbarfood">
                  <HashLink smooth to='/#generalFood' id="#generalFood" className={articleMain === 0 ? "manuFood-Active" : "manuFood"}>
                    สำหรับทานอาหารทั่วไป
                  </HashLink>
                  <div className="small-box">
                    <div>
                      <HashLink smooth to='/#' id="#generalFood" className={article === 1 ? "maun-small-Active" : "maun-small"}>
                        โปรแกรมอาหาร{"(Nutrition Program)"}
                      </HashLink>
                    </div>
                    <div>
                      <HashLink smooth to='/#' id="#generalFood" className={article === 2 ? "maun-small-Active" : "maun-small"}>
                        แนวทางการกินเพื่อสุขภาพแบบง่าย
                      </HashLink>
                    </div>
                    <div>
                      <HashLink smooth to='/#' id="#" className={article === 3 ? "maun-small-Active" : "maun-small"}>
                        รูปแบบการกินเพื่อสุขภาพที่แนะนำ
                      </HashLink>
                    </div>
                    <div>
                      <HashLink smooth to='/#' id="#" className={article === 4 ? "maun-small-Active" : "maun-small"}>
                        แนวทางการเลือกกินอาหาร
                        ระหว่างอยู่ในโปรแกรม
                      </HashLink>
                    </div>
                    <div>
                      <HashLink smooth to='/#' id="#" className={article === 5 ? "maun-small-Active" : "maun-small"}>
                        แนวทางที่แนะนำ
                      </HashLink>
                    </div>
                    <div>
                      <HashLink smooth to='/#' id="#" className={article === 6 ? "maun-small-Active" : "maun-small"}>
                        คำแนะนำเพิ่มเติม
                      </HashLink>
                    </div>
                  </div>
                  <HashLink smooth to='/#vegetarianFood' id="#vegetarianFood" className={articleMain === 7 ? "manuFood-Active" : "manuFood"}>
                    สำหรับทานอาหารมังสวิรัติ
                  </HashLink>;
                  <div className="small-box">
                    <div>
                      <HashLink id="#vegetarianFood" className={articleHead === 8 ? "maun-small-Active" : "maun-small"}>
                        โปรแกรมอาหารสำหรับผู้ที่เลือกกินอาหาร
                        แบบเน้นพืช และแบบมังสวิรัติเคร่งครัด
                        (Plant-Based Diet and Strict Vegan
                        Nutrition Program)
                      </HashLink>
                    </div>
                    <div>
                      <HashLink smooth to='/#' id="#" className={article === 9 ? "maun-small-Active" : "maun-small"}>
                        โปรแกรมอาหาร{"(Nutrition Program)"}
                      </HashLink>
                    </div>
                    <div>
                      <HashLink smooth to='/#' id="#" className={article === 10 ? "maun-small-Active" : "maun-small"}>
                        แนวทางการกินเพื่อสุขภาพแบบง่าย
                      </HashLink>
                    </div>
                    <div>
                      <HashLink smooth to='/#' id="#" className={article === 11 ? "maun-small-Active" : "maun-small"}>
                        รูปแบบการกินเพื่อสุขภาพที่แนะนำ
                      </HashLink>
                    </div>
                    <div>
                      <HashLink smooth to='/#' id="#" className={article === 12 ? "maun-small-Active" : "maun-small"}>
                        แนวทางการเลือกกินอาหาร
                        ระหว่างอยู่ในโปรแกรม
                      </HashLink>
                    </div>
                    <div>
                      <HashLink smooth to='/#' id="#" className={article === 13 ? "maun-small-Active" : "maun-small"}>
                        แนวทางที่แนะนำ
                      </HashLink>
                    </div>
                    <div>
                      <HashLink smooth to='/#' id="#" className={article === 14 ? "maun-small-Active" : "maun-small"}>
                        คำแนะนำเพิ่มเติม
                      </HashLink>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12  col-md-12 col-lg-9 ">
              <div className="select-BoxHead">
                <div className="navbarHead  margin-leftRight">
                  <select className="form-select" aria-label="Default select example" name="selectName" onChange={(e) => onChangeManu(e)}>
                    <option value="#generalFood">สำหรับทานอาหารทั่วไป</option>
                    <option value="#vegetarianFood">สำหรับทานอาหารมังสวิรัติ</option>
                  </select>
                  <p className="border-bottom2"></p>
                </div>
              </div>
              <div className="padding-leftRight">
                <div id='generalFood'>
                  <section className="App-section" ref={sectionRefs[0]}>
                    {generalFood()}
                  </section>
                </div>
                <div id='vegetarianFood'>
                  <section className="App-section" ref={sectionRefs[7]}>
                    {vegetarianFood()}
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}
export default Food_supplement;