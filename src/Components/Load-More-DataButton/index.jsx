import { useEffect, useState } from "react";
import "./style.css";

export default function LoadMoreDataButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  //   to load the data

  async function fetchProducts() {
    try {
      setLoading(true);

      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (e) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true);
  }, [products]);

  if (loading) {
    return <div>Loading data ! Please Wait</div>;
  }

  return (
    <>
      <h1 className="heading">Load More Data Button App</h1>
      <div className="load-container">
        <div className="product-container">
          {products && products.length
            ? products.map((item, index) => (
                <div className="product" key={`${item.id} - ${index}`}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p> {item.title}</p>
                </div>
              ))
            : null}
        </div>
        <div className="button-container" key={count.id}>
          <button
            className="button-container1"
            disabled={disableButton}
            onClick={() => setCount(count + 1)}
          >
            Load More Products
          </button>
          <div className="letter">
            {disableButton ? <p>You have reached to 100 products</p> : null}
          </div>
        </div>
      </div>
      <hr className="line-below" />
    </>
  );
}
