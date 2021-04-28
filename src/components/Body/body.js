import React, { PureComponent } from "react";

import { BodyStyle } from "./style";
import Banner from "../Banner/banner";
import Product from "../Product/product";

class Body extends PureComponent {
  render() {
    const data = [
      {
        productImg:
          "https://s3-ap-southeast-1.amazonaws.com/o77site/saransiri-rangsit-house-landscape.jpg",
        productName: "สราญสิริ",
        productLocation: "รังสิต",
        productDesc: "บ้านเดี่ยวใกล้ทางด่วน รองรับทุกการอยู่อาศัย",
        productPrice: "เริ่มต้นที่ 5.59 ล้านบาท",
      },
      {
        productImg:
          "https://s3-ap-southeast-1.amazonaws.com/o77site/setthasiri-rama5-singlehouse-landscape-935x745.jpg",
        productName: "เศรษฐสิร",
        productLocation: "พระราม 5",
        productDesc:
          "โครงการใหม่ ภาคภูมิเหนือกาลเวลา เอกลักษณ์แห่งการออกแบบที่สะท้อนความสำเร็จ ครั้งแรกของเศรษฐสิริ ใจกลางพระราม 5",
        productPrice: "เริ่มต้นที่ 10 ล้านบาท",
      },
      {
        productImg:
          "https://s3-ap-southeast-1.amazonaws.com/o77site/setthasiri-rama5-singlehouse-landscape-935x745.jpg",
        productName: "เศรษฐสิร",
        productLocation: "พระราม 5",
        productDesc:
          "โครงการใหม่ ภาคภูมิเหนือกาลเวลา เอกลักษณ์แห่งการออกแบบที่สะท้อนความสำเร็จ ครั้งแรกของเศรษฐสิริ ใจกลางพระราม 5",
        productPrice: "เริ่มต้นที่ 10 ล้านบาท",
      },
      {
        productImg:
          "https://s3-ap-southeast-1.amazonaws.com/o77site/setthasiri-rama5-singlehouse-landscape-935x745.jpg",
        productName: "เศรษฐสิร",
        productLocation: "พระราม 5",
        productDesc:
          "โครงการใหม่ ภาคภูมิเหนือกาลเวลา เอกลักษณ์แห่งการออกแบบที่สะท้อนความสำเร็จ ครั้งแรกของเศรษฐสิริ ใจกลางพระราม 5",
        productPrice: "เริ่มต้นที่ 10 ล้านบาท",
      },
      {
        productImg:
          "https://s3-ap-southeast-1.amazonaws.com/o77site/setthasiri-rama5-singlehouse-landscape-935x745.jpg",
        productName: "เศรษฐสิร",
        productLocation: "พระราม 5",
        productDesc:
          "โครงการใหม่ ภาคภูมิเหนือกาลเวลา เอกลักษณ์แห่งการออกแบบที่สะท้อนความสำเร็จ ครั้งแรกของเศรษฐสิริ ใจกลางพระราม 5",
        productPrice: "เริ่มต้นที่ 10 ล้านบาท",
      },
      {
        productImg:
          "https://s3-ap-southeast-1.amazonaws.com/o77site/setthasiri-rama5-singlehouse-landscape-935x745.jpg",
        productName: "เศรษฐสิร",
        productLocation: "พระราม 5",
        productDesc:
          "โครงการใหม่ ภาคภูมิเหนือกาลเวลา เอกลักษณ์แห่งการออกแบบที่สะท้อนความสำเร็จ ครั้งแรกของเศรษฐสิริ ใจกลางพระราม 5",
        productPrice: "เริ่มต้นที่ 10 ล้านบาท",
      },
      {
        productImg:
          "https://s3-ap-southeast-1.amazonaws.com/o77site/setthasiri-rama5-singlehouse-landscape-935x745.jpg",
        productName: "เศรษฐสิร",
        productLocation: "พระราม 5",
        productDesc:
          "โครงการใหม่ ภาคภูมิเหนือกาลเวลา เอกลักษณ์แห่งการออกแบบที่สะท้อนความสำเร็จ ครั้งแรกของเศรษฐสิริ ใจกลางพระราม 5",
        productPrice: "เริ่มต้นที่ 10 ล้านบาท",
      },
      {
        productImg:
          "https://s3-ap-southeast-1.amazonaws.com/o77site/setthasiri-rama5-singlehouse-landscape-935x745.jpg",
        productName: "เศรษฐสิร",
        productLocation: "พระราม 5",
        productDesc:
          "โครงการใหม่ ภาคภูมิเหนือกาลเวลา เอกลักษณ์แห่งการออกแบบที่สะท้อนความสำเร็จ ครั้งแรกของเศรษฐสิริ ใจกลางพระราม 5",
        productPrice: "เริ่มต้นที่ 10 ล้านบาท",
      },
    ];
    return (
      <BodyStyle>
        <div className="main-body">
          <Banner />
          <section className="highlight">
            <p className="highlight-title">
              <h1>บ้านเดี่ยวแสนสิริ</h1>
              <p>บ้าน...ที่ใช่ในทุกความรู้สึก</p>
            </p>
            <p className="highlight-desc">
              ด้วยดีไซน์สง่างามสมความภาคภูมิ คิดทุกรายละเอียดของการใช้ชีวิต
              สู่ฟังก์ชั่นที่ตอบโจทย์การใช้งานเพื่อเชื่อมต่อ <br />
              ความสุขและความผูกพันของครอบครัว และยังเชื่อมต่อกับสังคมคุณภาพ
              ด้วยคลับเฮาส์ และ่วนกลางที่ออกแบบ <br />
              อย่างดี พร้อมความอุ่นใจจากมาตรฐานความปลอดภัยสูงสุด
              ผ่านเทคโนโลยีทันสมัยครอบคลุมทุกพื้นที่
            </p>
          </section>
          <section className="container">
            <div className="product">
              <Product data={data} />
            </div>
          </section>
        </div>
      </BodyStyle>
    );
  }
}
export default Body;
