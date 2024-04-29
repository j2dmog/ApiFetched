import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PostDelete from "../api/PostDelete";


const SingleCard = () => {
  const { id } = useParams();
  const [singleDetails, setSingleDetails] = useState({});
  useEffect(() => {
    return async () => {
      const getApi = await axios(`https://dummyjson.com/products/${id}`);
      console.log(getApi.data)
      setSingleDetails(getApi.data);
    };
  }, []);
  const [getImage, setGetImage] = useState([]);
  useEffect(() => {
    return async () => {
      const images = await axios(`https://dummyjson.com/products/${id}`);
    //   console.log(images.data.images);
      setGetImage(images.data.images);
    };
  }, []);

  return (
    <div className=" bg-gray-400">
      <Link to="/" className="border-2 border-solid border-slate-400 h-[3rem] w-[15rem] text-center bg-slate-600 shadow-2xl opacity-100  ">Home</Link>
      {
        <div className="p-[5rem] flex flex-row items-center text-center space-x-[3rem]">
          <div className="flex flex-col w-[25rem] shadow-lg drop-shadow-xl rounded-[1.5rem] shadow-slate-200 ">
            <h1 className="font-bold text-[2rem] ">{singleDetails.brand}</h1><br /><br />
            <Carousel>
                {getImage.map((image, i) => (
                  <img key={i} src={image} alt="images" />
                ))}
            </Carousel>
          </div>
          <div className="w-[20rem] ">
            <p><span className="font-bold">Description </span><br />{singleDetails.description}</p> <br />
            <p><span className="font-bold">Phone Price: </span>  ${singleDetails.price}</p><br />
            <p><span className="font-bold">Discount Percentage: </span> {singleDetails.discountPercentage}%</p><br />
            <p><span className="font-bold">Category: </span> {singleDetails.category}</p><br />
            <p className="font-bold">We have {singleDetails.stock} of these items in stock</p><br />
            <p><span className="font-bold">Rating: </span> {singleDetails.rating}</p>
            <div><PostDelete/></div>
          </div>
          <div className="">
            <p className="font-bold">{singleDetails.title} </p><br />
            <img className="w-[25rem] h-[20rem] " src={singleDetails.thumbnail} alt="" />
          </div>
      </div>
      }
    </div>
  );
};

export default SingleCard;
