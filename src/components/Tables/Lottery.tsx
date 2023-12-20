import React, {FC} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import Slider from "react-slick";

const Lottery: FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    rtl: true
  };

  return (
    <div className="lottery-area tab-area">
      <Slider {...settings}>
          <div className="lottery-area-inside">
            <table className="table">
              <thead>
              <tr>
                <th style={{textAlign: 'left'}}>Position</th>
                <th>User Address</th>
                <th>Tokens Won</th>
                <th>Transaction Hash</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td style={{textAlign: 'left'}}>
                  <span className="star-position">1</span>
                </td>
                <td>
                  0xF75a9ffE9f967099599fb0Dec2d75dFBabE1779e
                </td>
                <td>159801</td>
                <td>TX Hash</td>
              </tr>
              <tr>
                <td style={{textAlign: 'left'}}>
                  <span className="star-position">2</span>
                </td>
                <td>
                  0xF75a9ffE9f967099599fb0Dec2d75dFBabE1779e
                </td>
                <td>159801</td>
                <td>TX Hash</td>
              </tr>
              <tr>
                <td style={{textAlign: 'left'}}>
                  <span className="star-position">3</span>
                </td>
                <td>
                  0xF75a9ffE9f967099599fb0Dec2d75dFBabE1779e
                </td>
                <td>159801</td>
                <td>TX Hash</td>
              </tr>
              <tr>
                <td style={{textAlign: 'left'}}>
                  <span className="star-position">4</span>
                </td>
                <td>
                  0xF75a9ffE9f967099599fb0Dec2d75dFBabE1779e
                </td>
                <td>159801</td>
                <td>TX Hash</td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="lottery-area-inside">
            <table className="table">
              <thead>
              <tr>
                <th style={{textAlign: 'left'}}>Position</th>
                <th>User Address</th>
                <th>Tokens Won</th>
                <th>Transaction Hash</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td style={{textAlign: 'left'}}>
                  <span className="star-position">1</span>
                </td>
                <td>
                  0xF75a9ffE9f967099599fb0Dec2d75dFBabE1779e
                </td>
                <td>159801</td>
                <td>TX Hash</td>
              </tr>
              <tr>
                <td style={{textAlign: 'left'}}>
                  <span className="star-position">2</span>
                </td>
                <td>
                  0xF75a9ffE9f967099599fb0Dec2d75dFBabE1779e
                </td>
                <td>159801</td>
                <td>TX Hash</td>
              </tr>
              <tr>
                <td style={{textAlign: 'left'}}>
                  <span className="star-position">3</span>
                </td>
                <td>
                  0xF75a9ffE9f967099599fb0Dec2d75dFBabE1779e
                </td>
                <td>159801</td>
                <td>TX Hash</td>
              </tr>
              <tr>
                <td style={{textAlign: 'left'}}>
                  <span className="star-position">4</span>
                </td>
                <td>
                  0xF75a9ffE9f967099599fb0Dec2d75dFBabE1779e
                </td>
                <td>159801</td>
                <td>TX Hash</td>
              </tr>
              </tbody>
            </table>
          </div>
      </Slider>
    </div>

  )
    ;
}

export default Lottery;