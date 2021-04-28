import React, { PureComponent } from "react";
import { Fragment } from "react";

import { ProductStyle } from "./style";

class Product extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        {data.map((item, index) => {
          return (
            <ProductStyle key={index}>
              <div className="item-box">
                <div className="item-space">
                  <div className="product-img">
                    <img src={item.productImg} />
                  </div>
                  <div className="product-title">
                    <h3>
                      <div className="name">{item.productName}</div>
                      <div className="location">{item.productLocation}</div>
                    </h3>
                  </div>
                  <div className="product-desc">
                    <p>{item.productDesc}</p>
                  </div>
                  <div className="product-price">
                    <p> {item.productPrice}</p>
                  </div>
                  <div className="c-facility facility">
                    <ul>
                      <li>
                        <img src="https://www.sansiri.com/uploads/poicategory_asset/icon_facility-express.svg" />
                        <span>
                          ทางพิเศษอุดรรัถยา ​ (ด่านบางพูน) <br />
                          1&nbsp;กม.
                        </span>
                      </li>
                      <li>
                        <img src="https://www.sansiri.com/uploads/poicategory_asset/icon_facility-express.svg" />
                        <span>
                          {" "}
                          ทางยกระดับอุตราภิมุข <br />
                          6.6&nbsp;กม.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="c-action">
                    <a
                      href="https://www.sansiri.com/singlehouse/saransiri-rangsit/th/"
                      className="btn-more"
                    >
                      ดูรายละเอียด
                    </a>
                  </div>
                </div>
              </div>
            </ProductStyle>
          );
        })}
      </Fragment>
    );
  }
}
export default Product;
