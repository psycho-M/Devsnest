import "./productPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSize,
  updateTotal,
  addQuantity,
  subQuantity,
  addFav,
  subFav,
  addProduct,
} from "../../redux/actions";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

const ProductPage = (props) => {
  function handleClick() {
    setLiked(!liked);
    if (liked === true) {
      dispatch(addFav(item));
    } else {
      dispatch(subFav(item.id));
    }
  }

  function isPresentInCart(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        if (cart[i].quantity === 10) return true;
        dispatch(addQuantity(cart[i].id));
        dispatch(updateTotal(item.price));

        return true;
      }
    }
    return false;
  }

  function alreadyInCart(id) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        return {
          return: true,
          itemPresent: cart[i],
        };
      }
    }
    return { return: false };
  }

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [liked, setLiked] = useState(true);

  const temp = props.location.state;
  const isTempPresent = alreadyInCart(temp.id);
  const [item, setItem] = useState(
    isTempPresent.return
      ? isTempPresent.itemPresent
      : {
          ...temp,
          quantity: 1,
          currPrice: temp.price,
          currSize: temp.size[0],
          shippingMethod: "Standard",
        }
  );
  const images = [item.main_img];
  for (let i = 1; i < 5; i++) {
    if (item.hasOwnProperty("other_img_" + i)) {
      const tempImg = item["other_img_" + i];
      images.push(tempImg);
    } else {
      break;
    }
  }
  const [currImg, setCurrImg] = useState(images[0]);

  let cartStorage = window.localStorage;

  return (
    <div
      style={{
        marginTop: "15%",
      }}
      className="mainbodycard"
    >
      <div className="left">
        <div className="collectimg">
          {images.map((img, index) => (
            <button
              onClick={() => {
                setCurrImg(img);
              }}
            >
              <img key={index} src={img} alt={"img" + index} />
            </button>
          ))}
        </div>
        <div className="mainimg">
          <img
            src={currImg}
            // src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
            alt="img"
          />
        </div>
      </div>
      <div className="right">
        <div className="shippingcontainer">
          <Button
            value="Standard"
            onClick={(e) => {
              setItem({
                ...item,
                shippingMethod: "Standard",
              });
              console.log(item);
            }}
            style={
              item.shippingMethod === "Standard"
                ? {
                    backgroundColor: "#6c757d",
                    color: "white",
                  }
                : {}
            }
            variant="outline-secondary"
          >
            <FontAwesomeIcon icon="truck" />
            <text>
              <b>Standard</b>
              <br /> Free within 3-6 business days
            </text>
          </Button>
          <Button
            variant="outline-secondary"
            onClick={(e) => {
              setItem({
                ...item,
                shippingMethod: "Express",
              });
              console.log(item);
            }}
            style={
              item.shippingMethod === "Express"
                ? {
                    backgroundColor: "#6c757d",
                    color: "white",
                  }
                : {}
            }
          >
            <FontAwesomeIcon icon="shipping-fast" />
            <text>
              <b>Express</b>
              <br /> $10 within 1-2 business days
            </text>
          </Button>
        </div>
        <div className="prod-id">
          <text>Product ID: {item.id}</text>
          <h1 className="prod-name">{item.name}</h1>
          <div className="price">
            <h3>
              <span>
                <BiRupee style={{ display: "inline-block" }} />
                {item.price}
              </span>
            </h3>
          </div>
        </div>
        {/* <div className="prod-color">
          <h5 className="label">Color:</h5>
          <button style={{ backgroundColor: "red" }}></button>
          <button style={{ backgroundColor: "golden" }}></button>
          <button style={{ backgroundColor: "blue" }}></button>
          <button style={{ backgroundColor: "orange" }}></button>
        </div> */}
        <div className="prod-size">
          <h5 className="label">Size:</h5>
          <select
            value={item.currSize}
            onChange={(e) => {
              if (alreadyInCart(item.id).return) {
                dispatch(updateSize(e.target.value));
              } else {
                setItem({
                  ...item,
                  currSize: e.target.value,
                });
              }

              console.log(item);
            }}
          >
            {" "}
            Select
            {item.size.map((size, index) => (
              <option key={index} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="quantity">
          <h5 className="label">Quantity:</h5>
          <div className="amount">
            <div className="amount-container">
              <button
                onClick={() => {
                  if (item.quantity === 1) return;
                  if (alreadyInCart(item.id).return) {
                    dispatch(subQuantity(item.id));
                    dispatch(updateTotal(-item.price));
                    console.log(isTempPresent.itemPresent);
                  } else {
                    setItem({
                      ...item,
                      quantity: item.quantity + 1,
                      currPrice: (item.quantity + 1) * item.price,
                    });
                  }
                  console.log(item);
                }}
                style={{ color: "#CECECE" }}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => {
                  if (item.quantity === 10) return;
                  if (alreadyInCart(item.id).return) {
                    dispatch(addQuantity(item.id));
                    dispatch(updateTotal(item.price));
                  } else {
                    setItem({
                      ...item,
                      quantity: item.quantity + 1,
                      currPrice: (item.quantity + 1) * item.price,
                    });
                  }
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="like-bar">
          <div
            style={{
              margin: "auto",
              padding: "5px 20px",
              borderRadius: "50%",
              backgroundColor: "#dcdbdb",
            }}
          >
            {liked ? (
              <BsHeart
                style={{ display: "inline-block" }}
                onClick={handleClick}
              />
            ) : (
              <BsFillHeartFill
                style={{
                  color: "#fbb03b",
                  display: "inline-block",
                }}
                onClick={handleClick}
              />
            )}
          </div>
        </div>

        <Button
          onClick={() => {
            if (!isPresentInCart(item.id)) {
              dispatch(addProduct(item));
              dispatch(updateTotal(item.currPrice));
            }
            cartStorage.setItem("cart", JSON.stringify(cart));
          }}
          variant="warning"
        >
          ADD TO CART{" "}
        </Button>
      </div>
    </div>
  );
};

export default ProductPage;
