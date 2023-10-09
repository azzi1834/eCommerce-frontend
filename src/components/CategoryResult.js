import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Filters from "./Filters";

function CategoryResult() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    await axios
      .get(`http://localhost:4000/api/product/${category}`)
      .then((resp) => {
        console.log("resp", resp);
        setProducts(resp.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-2 border">
          <h5>Filters</h5>
          <Filters />
        </div>
        <div className="col-10 p-3">
          <h4>{category}</h4>
          <p>
            {products.length} items found for {category}
          </p>
          <hr />
          <div className="row">
            {products &&
              products.map((data) => {
                return (
                  <div className="col-md-4 col-sm-6" key={data?.dataValues?.id}>
                    {" "}
                    <Link
                      to={`/products/${data?.dataValues?.id}`}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      <Card
                        className="text-center m-3 p-2"
                        style={{ width: "auto", borderRadius: " 0px" }}
                      >
                        <Card.Img
                          style={{ objectFit: "cover", borderRadius: "0px" }}
                          variant="top"
                          src={`http://localhost:4000/${data.images[0]}`}
                          height={"250rem"}
                          width={"auto"}
                        />
                        <Card.Body>
                          <Card.Title
                            style={{
                              fontWeight: "normal",
                              color: "black",
                              fontSize: "15px",
                            }}
                          >
                            {data?.dataValues?.name.length > 50
                              ? `${data?.dataValues?.name.substring(0, 50)}...`
                              : data?.dataValues?.name}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryResult;
