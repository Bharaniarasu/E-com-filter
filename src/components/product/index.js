import { useLocation, useParams } from "react-router-dom";
import { data } from "../data/data";

const Product = (props) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  console.log(params.get("id"));
  let { id } = useParams();
  console.log(id);
  alert(props.query);
  return (
    <>
      {data.map((value) => {
        if (value.id == id) {
          return (
            <div className="container" id="product-section">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <img
                    src={value.image}
                    alt="Kodak Brownie Flash B Camera"
                    className="image-responsive "
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-12">
                    <h1>{value.title}</h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <span className="label label-primary">Vintage</span>
                  <span className="monospaced">No. 1960140180</span>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="description">{value.description}</p>
                  </div>
                </div>
              </div>
              {/* <RatingComponent /> */}
              <div className="row">
                <div className="col-md-12 bottom-rule">
                  <h2 className="product-price">₹{value.price}</h2>
                </div>
              </div>

              <div className="row add-to-cart">
                <div className="col-md-5 product-qty">
                  <span className="btn btn-default btn-lg btn-qty">
                    <span
                      className="glyphicon glyphicon-plus"
                      aria-hidden="true"
                    >
                      -
                    </span>
                  </span>
                  <input className="btn btn-default btn-lg btn-qty" value="1" />
                  <span className="btn btn-default btn-lg btn-qty">
                    <span
                      className="glyphicon glyphicon-minus"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </span>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-primary btn-lg btn-brand btn-full-width">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 text-center">
                  <span className="monospaced">In Stock</span>
                </div>
                <div className="col-md-4 col-md-offset-1 text-center">
                  <a className="monospaced" href="#">
                    Add to Shopping List
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 bottom-rule top-10"></div>
              </div>

              <div className="row">
                <div className="col-md-12 top-10">
                  <p>
                    To order by telephone,{" "}
                    <a href="tel:18005551212">please call 1-800-555-1212</a>
                  </p>
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};
export default Product;
