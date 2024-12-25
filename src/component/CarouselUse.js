import Carousel from "react-bootstrap/Carousel";
import "../style/Footer.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl:
    "https://marketplace.canva.com/EAGYtHCzh8Y/1/0/1600w/canva-yellow-green-and-red-bold-illustrative-holiday-party-invitation-banner-jACzrJIS6wc.jpg",
};

function CarouselUse() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={"Photo of " + user.name}
          // style={{
          //   width: "100%",
          //   height: "40rem",
          // }}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="avatar"
          src="https://marketplace.canva.com/EAFNvsmXhZo/2/0/1600w/canva-red-and-gold-classy-and-elegant-business-christmas-outdoor-banner-4WLdOZn_mFA.jpg"
          alt={"Photo of " + user.name}
          // style={{
          //   width: "100%",
          //   height: "40rem",
          // }}
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="avatar"
          src="https://marketplace.canva.com/EAF0XmkzgQA/1/0/1600w/canva-gray-minimalist-new-collection-banner-O7EU5YM_MGU.jpg"
          alt={"Photo of " + user.name}
          // style={{
          //   width: "100%",
          //   height: "40rem",
          // }}
        />
      
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselUse;
