import "./featuredProperties.css";
import useFetch from "../../hooks/useFetch";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels/get-all?featured=true");
  console.log("data", data);

  return (
    <div className="fp">
      {loading ? (
        "Loading, please wait ..."
      ) : (
        <>
          {data.result?.map((item) => {
            return (
              <div className="fpItem" key={item._id}>
                <img
                  src={item?.images[0]}
                  alt=""
                  className="fpImg"
                />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  Starting from {item.cheapest_price}
                </span>
                {item.rating && 
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                }
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
