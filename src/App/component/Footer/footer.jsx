import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
import "./styles.scss";
export default function Footer() {
  return (
      <div className="row footer m-0">
        <div className="col-md-12 p-0">
          <CDBFooter className="shadow mt-5">
            <CDBBox
              display="flex"
              flex="column"
              className="mx-auto py-5"
              style={{ width: "90%" }}
            >
              <CDBBox
                display="flex"
                justifyContent="between"
                className="flex-wrap"
              >
                <CDBBox>
                  <img
                    alt="logo"
                    src="https://thumb.danhsachcuahang.com/image/2020/03/cua-hang-dien-thoai-cellphones-thumb-685.png"
                    width="30px"
                  />
                  <span
                    className="ml-3 h6 font-weight-bold"
                    style={{ marginLeft: "6px" }}
                  >
                    Công ty{" "}
                  </span>
                  <p className="my-3" style={{ width: "250px" }}>
                    <CDBBox className="box-infor-company">
                      <p>
                        Trụ sở chính: Tòa nhà Viettel, Số 285, đường Cách Mạng
                        Tháng 8, phường 12, quận 10, Thành phố Hồ Chí Minh
                      </p>
                      <p>
                        Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa
                        hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc
                        trung tâm xử lý đơn hàng Giấy chứng nhận
                      </p>
                    </CDBBox>
                  </p>
                </CDBBox>
                <CDBBox>
                  <p className="h6 mb-4" style={{ fontWeight: "600" }}>
                    Sản phẩm
                  </p>
                  <CDBBox
                    flex="column"
                    style={{ cursor: "pointer", padding: "0" }}
                  >
                    <CDBFooterLink href="/">Macbook</CDBFooterLink>
                    <CDBFooterLink href="/">Điện thoại</CDBFooterLink>
                    <CDBFooterLink href="/">Xiaomi</CDBFooterLink>
                    <CDBFooterLink href="/">Samsung</CDBFooterLink>
                    <CDBFooterLink href="/">Ổ cứng</CDBFooterLink>
                  </CDBBox>
                </CDBBox>
                <CDBBox>
                  <p className="h6 mb-4" style={{ fontWeight: "600" }}>
                    Hỗ trợ khách hàng
                  </p>
                  <CDBBox
                    flex="column"
                    style={{
                      cursor: "pointer",
                      padding: "0",
                      color: "#808089",
                    }}
                  >
                    <CDBBox style={{ display: "flex" }}>
                      Hotline:{" "}
                      <CDBFooterLink
                        style={{ color: "rgb(146,81,61)", margin: "0 3px" }}
                        href="/"
                      >
                        1900-6035
                      </CDBFooterLink>{" "}
                      (1000 đ/phút, 8-21h kể cả T7, CN)
                    </CDBBox>
                    <CDBFooterLink href="/">
                      Các câu hỏi thường gặp
                    </CDBFooterLink>
                    <CDBFooterLink href="/">Gửi yêu cầu hỗ trợ</CDBFooterLink>
                    <CDBFooterLink href="/">
                      Hướng dẫn đặt hàng Phương thức vận chuyển
                    </CDBFooterLink>
                    <CDBFooterLink href="/">Chính sách đổi trả</CDBFooterLink>
                    <CDBBox style={{ display: "flex", margin: "0 3px" }}>
                      {" "}
                      Hỗ trợ khách hàng:
                      <CDBFooterLink href="/">hotro@cellphones.vn</CDBFooterLink>
                    </CDBBox>
                  </CDBBox>
                </CDBBox>
                <CDBBox>
                  <CDBBox>
                    <p className="h6 mb-3" style={{ fontWeight: "600" }}>
                      Kết nối với chúng tôi
                    </p>
                    <CDBBox display="flex" className="mt-4">
                      <CDBBtn flat color="primary">
                        <CDBIcon fab icon="facebook-f" />
                      </CDBBtn>
                      <CDBBtn flat color="primary" className="mx-3">
                        <CDBIcon fab icon="twitter" />
                      </CDBBtn>
                      <CDBBtn flat color="danger" className="p-2">
                        <CDBIcon fab icon="instagram" />
                      </CDBBtn>
                    </CDBBox>
                  </CDBBox>
                  <CDBBox>
                    <p className="h6 mb-3 mt-4" style={{ fontWeight: "600" }}>
                      Tải ứng dụng trên điện thoại
                    </p>
                    <CDBBox className="app-phone ">
                      <CDBBox>
                        {" "}
                        <CDBFooterLink href="/">
                          {" "}
                          <img
                            alt="logo"
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/qrcode.png"
                            width="78px"
                          />
                        </CDBFooterLink>
                      </CDBBox>
                      <CDBBox>
                        <CDBFooterLink className="mb-2" href="/">
                          {" "}
                          <img
                            alt="logo"
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png"
                            width="122px"
                          />
                        </CDBFooterLink>
                        <CDBFooterLink href="/">
                          {" "}
                          <img
                            alt="logo"
                            src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png"
                            width="122px"
                          />
                        </CDBFooterLink>
                      </CDBBox>
                    </CDBBox>
                  </CDBBox>
                </CDBBox>
              </CDBBox>
              <small className="text-center mt-5">
                &copy;2022 - Bản quyền của Công ty TNHH Cephones
              </small>
            </CDBBox>
          </CDBFooter>
        </div>
      </div>
    
  );
}
