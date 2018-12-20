import React from "react";

class Newsletter extends React.Component {
  render() {
    return (
      <div className="subscribe_line">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex bg_img align_items_center">
              <h2 className="subscribe_title">
                Campi <span className="col_filed_yel">.tn</span>
              </h2>
            </div>
            <div className="col-md-6 clearfix">
              <form action="#" className="subscribe_form clearfix">
                <div className="filed_form">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your E-mail"
                    required
                  />
                </div>
                <button class="sv_btn sv_btn_default">S'inscrire</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;