import { useLoaderData } from "react-router-dom";
import Cardinfo from "./Cardinfo";

const Card = () => {
  const shopdata = useLoaderData();
  return (
    <div>
      <h3 className="md:text-6xl my-5 uppercase text-center">this is shop product section </h3>
      <h3 className="text-2xl my-5 uppercase  text-center">Using node js my server </h3>
      <h3 className="text-2xl my-5   text-center">shop now have  : {shopdata.length} products  </h3>


      
      <div className="gap-5 flex flex-wrap">
        {shopdata.map((shopdata) => (
          <Cardinfo key={shopdata.id} shopdata={shopdata}></Cardinfo>
        ))}
      </div>
    </div>
  );
};

export default Card;
