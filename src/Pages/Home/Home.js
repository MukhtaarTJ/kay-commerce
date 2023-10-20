import React, { useEffect, useState } from "react";
import { useUserAuth } from "../../hooks/useAuthContext";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../../Firebase/Config";
import Product from "../Products/Product";

const Home = () => {
  const { user } = useUserAuth();
  const [products, setProducts] = useState([]);
  const [isPending, setIspending] = useState(false);
  useEffect(() => {
    setIspending(true);
    const database = getDatabase();
    const productsRef = ref(database, "products");

    const handleData = (snapshot) => {
      const productData = snapshot.val();
      if (productData) {
        const productList = Object.values(productData);
        setProducts(productList);
      }
      setIspending(false);
    };

    const unsubscribe = onValue(productsRef, handleData);

    // Cleanup the event listener
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {user && (
        <p style={{ color: "black" }} className="display-name">
          Welcome: {user.displayName}
        </p>
      )}

      <div className="product-list">
        {products && <Product products={products} />}
        {isPending && (
          <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
            Loading data.....
          </h3>
        )}
      </div>
    </div>
  );
};

export default Home;
