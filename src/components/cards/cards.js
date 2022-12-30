import { Card } from "react-bootstrap";
import RatingComponent from "../rating/rating";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
const Cards = (props) => {
  const datas = useSelector((state) => state);
  const query = datas.query;

  console.log(props.query);
  return (
    <div className="row d-inline-flex">
      {datas.existingData.data
        .filter((value, err) => {
          if (query == "") {
            return value;
          } else {
            return value.title.toLowerCase().includes(query.toLowerCase());
          }
        })
        .map((value) => {
          return (
            <Card
              style={{ width: "18rem", height: "35rem" }}
              className="cards float-left col-sm-6 col-md-2 col-lg-3 mb-3"
            >
              <a key={value.id} href={value.id} className="cards-link ">
                <Card.Img
                  variant="top"
                  className="cards-img"
                  src={value.image}
                />
                <Card.Body>
                  <Card.Title className="cards-title">{value.title}</Card.Title>
                  <RatingComponent value={value.rating} />
                  <Card.Text className="cards-price">
                    <span className="h3">
                      <span>₹</span>
                      {value.price}
                    </span>
                    <br />
                    <span className="cards-delivery-info ">
                      Get it by Thursday, November 10 FREE Delivery{" "}
                    </span>
                  </Card.Text>
                </Card.Body>
              </a>
            </Card>
          );
        })}
    </div>
  );
};

export default Cards;
