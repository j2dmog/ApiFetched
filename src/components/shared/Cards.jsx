import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";


const Card = ({ title, images, to }) => {
  return (
    <div className="flex flex-col gap-y-[1rem] items-center text-center p-[1rem]">
      <Link to={to}><h1 className="font-bold">{title} </h1></Link>
      <div className=" w-[20rem] shadow-lg drop-shadow-xl rounded-[1.5rem] shadow-slate-200 ">
        <Carousel>
          {images.map((image, i) => (
            <img key={i} src={image} alt="image" />
          ))}
        </Carousel>
      </div>
      <button></button>
    </div>
  );
};

export default Card;
