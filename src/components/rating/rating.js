import StarRatingComponent from "react-star-rating-component";
const RatingComponent = (props) => {
  return (
    <>
      <StarRatingComponent name="rate" starCount={5} value={props.value.rate} />
      <span>({props.value.count})</span>
    </>
  );
};
export default RatingComponent;
