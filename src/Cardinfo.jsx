const Cardinfo = ({ shopdata }) => {
  return (

      

      <div className="card w-[300px] m-auto bg-base-100 shadow-xl p-5 h-[400px] justify-between">
        <figure>
          <img className="w-[200px] h-[200px]"
            src={shopdata.image}
            alt="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          />
        </figure>
        <div className=" ">
          <h2 className="card-title">price :{shopdata.price} $</h2>
          <p className="text-left my-2">{shopdata.title}</p>
          <div className="card-actions ">
            <button className="btn btn-primary w-full">Buy Now</button>
          </div>
        </div>
      </div>
   
  );
};

export default Cardinfo;
