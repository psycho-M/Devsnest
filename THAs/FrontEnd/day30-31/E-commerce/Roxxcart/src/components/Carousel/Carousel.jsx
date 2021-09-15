// import logo from './logo.svg';
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
export default function CarouselComponent() {
  return (
    <div className="carousel-component">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="image"
            src="https://img.freepik.com/free-psd/summer-sale-70-discount_23-2148476960.jpg?size=626&ext=jpg"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="https://cdn4.vectorstock.com/i/1000x1000/50/43/denim-clothing-web-banner-vector-22775043.jpg"
            alt="Second slide"
          />

         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="https://img.freepik.com/free-vector/promotion-fashion-banner_1188-161.jpg?size=626&ext=jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="https://cdn.dribbble.com/users/6129739/screenshots/15447903/fashion_banner__design-01_4x.jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="https://cdn.shopify.com/s/files/1/0428/4425/8459/files/fashion2.jpg?v=1595131903"
            alt="Third slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="https://previews.123rf.com/images/maridav/maridav1903/maridav190300089/118032267-clothing-store-clothes-hanging-in-shopping-rack-banner-texture-background-of-different-selection-of-.jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
