import React from "react";
import { useLocation, useNavigate } from "react-router";
import Style from "../style.module.css";
import { Link } from "react-router-dom";
import Filters from "./Filters";

function Search() {
  const { state } = useLocation();

  return (
    <div className="container my-5">
      <div className={`row ${Style.searchResult}`}>
        <p>Search Product Result</p>
        <div className="col-2 p-3 border">
          <Filters />
        </div>

        <div className="col-10 shadow-sm">
          {state?.status === 0 ? (
            <>
              <h4>0 items </h4>
              <hr />
            </>
          ) : (
            <>
              <h4 className="pt-2">{state?.length} items</h4>
              <hr />

              {state &&
                state?.map((data) => {
                  return (
                    <div
                      key={data?.dataValues?.id}
                      className={`row ${Style.searchResultItem}`}
                    >
                      <div className="col-4 text-center">
                        <img
                          src={`http://localhost:4000/${data?.images[0]}`}
                          alt="Image1"
                        />
                      </div>
                      <div className="col-4 p-1 ">
                        <Link
                          to={`/products/${data?.dataValues?.id}`}
                          style={{ textDecoration: "none", color: "#1976D2" }}
                        >
                          <p>{data?.dataValues?.name}</p>
                        </Link>
                        <p>
                          <b>category : </b> {data?.dataValues?.category}
                        </p>
                      </div>

                      <div className="col-4 p-1">
                        <p>
                          Rs:
                          <span
                            style={{ fontSize: "2rem", fontWeight: "bold" }}
                          >
                            {data?.dataValues?.price}
                          </span>
                        </p>
                        <button
                          type="button"
                          className="btn btn-warning w-50 rounded-0"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
