import { data as values } from "../data/data";
import { useState } from "react";
import Uploady from "@rpldy/uploady";
import UploadButton from "@rpldy/upload-button";
import UploadPreview from "@rpldy/upload-preview";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const AddNew = (props) => {
  const [data, setData] = useState(values);
  const [givenData, setGivenData] = useState({
    title: "",
    id: "",
    catagory: "",
    image: "",
    description: "",
    price: "",
    rating: {
      rate: 0,
      count: 0
    }
  });
  const obj = { data: data };
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [catagory, setCatagory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [apiData, setApiData] = useState([]);

  const nameChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const codeChangeHandler = (event) => {
    setId(event.target.value);
  };
  const catagoryChangeHandler = (event) => {
    setCatagory(event.target.value);
  };
  const imageChangeHandler = (event) => {
    setImage(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setApiData(json));
  // });
  // console.log(obj);

  const submitDataHandler = (event) => {
    event.preventDefault();
    setGivenData({
      title: title,
      id: id,
      catagory: catagory,
      image: image,
      description: description,
      price: "000",
      rating: {
        rate: 1.3,
        count: 0
      }
    });
    setData((values) => {
      return [...values, givenData];
    });

    setTitle("");
    setId("");
    setCatagory("");
    setImage("");
    setDescription("");
    dispatch({ type: "UPDATE_DATA", updatedData: obj });
  };

  const filterBySize = (file, event) => {
    event.preventDefault();

    return file.size <= 1e7;
  };

  return (
    <>
      <div className="container">
        <form>
          <h3 className="text-center">Add new Product data</h3>

          <div className="form-group">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Product name"
              value={title}
              onChange={nameChangeHandler}
            />
          </div>

          <div className="form-group">
            <label>Product code</label>
            <input
              type="text"
              className="form-control"
              placeholder="Product Code"
              value={id}
              onChange={codeChangeHandler}
            />
          </div>
          <div className="form-group">
            <label for="selectCatagory">Product Catagory</label>
            <select
              className="form-control"
              id="selectCatagory"
              value={catagory}
              onChange={catagoryChangeHandler}
            >
              <option value="Women's Clothing">Women's Clothing</option>
              <option value="Men's Clothing">Men's Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Jewellery">Jewellery</option>
            </select>
          </div>

          <div className="form-group">
            <label for="selectImage">Product Image</label>
            <br />
            <Uploady
              destination={"https://cjshxc.csb.app/images"}
              fileFilter={filterBySize}
              accept=".png,.jpg,.jpeg"
            >
              <UploadButton classname="m-4" />
              <UploadPreview />
            </Uploady>
          </div>
          <div className="form-group">
            <label>Product Description</label>

            <textarea
              class="form-control"
              rows="3"
              id="comment"
              name="text"
              placeholder="Enter Product Description..."
              value={description}
              onChange={descriptionChangeHandler}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block mt-3"
            onClick={submitDataHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
export default AddNew;
