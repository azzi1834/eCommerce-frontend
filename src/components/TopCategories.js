import React from "react";
import classes from "../style.module.css";
import { Link } from "react-router-dom";

function TopCategories() {
  return (
    <div className="container mt-5 mb-5">
      <h4>Categories</h4>
      <div className={`${classes.categoryCard} row`}>
        <Link to="/category/optical" className="p-1 col-2">
          <div>
            <img src="https://www.pngmart.com/files/15/Apple-iPhone-12-PNG-Picture.png"></img>
            <p>Optical</p>
          </div>
        </Link>
        <Link to="/category/home" className="p-1 col-2">
          <div>
            <img src="https://e7.pngegg.com/pngimages/895/35/png-clipart-led-backlit-lcd-aoc-international-television-set-1080p-led-tv-television-media.png"></img>
            <p>TV & Home Theater</p>
          </div>
        </Link>

        <Link to="/category/games" className="p-1 col-2">
          <div>
            <img src="https://pngimg.com/d/xbox_PNG17529.png"></img>
            <p>Video Games</p>
          </div>
        </Link>
        <Link to="/category/shoes" className="p-1 col-2">
          <div>
            <img src="https://freepngimg.com/thumb/categories/627.png"></img>
            <p>Shoes</p>
          </div>
        </Link>
        <Link to="/category/furniture" className="p-1 col-2">
          <div>
            <img src="https://freepngimg.com/save/13099-furniture-png-image/1200x957"></img>
            <p>Home & furniture</p>
          </div>
        </Link>

        <Link to="/category/appliances" className="p-1 col-2">
          <div>
            <img src="https://www.freeiconspng.com/uploads/home-appliances-png-32.jpg"></img>
            <p>Appliances</p>
          </div>
        </Link>
        <Link to="/category/fitness-and-health" className="p-1 col-2">
          <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/011/733/916/small/fitness-gym-3d-render-icon-illustration-png.png"></img>
            <p>Fitness & Health</p>
          </div>
        </Link>
        <Link to="/category/shaving" className="p-1 col-2">
          <div>
            <img src="https://e7.pngegg.com/pngimages/827/584/png-clipart-dovo-solingen-straight-razor-shavette-shaving-razor-leather-tattoo.png"></img>
            <p>Shaving</p>
          </div>
        </Link>
        <Link to="/category/baby-care" className="p-1 col-2">
          <div>
            <img src="https://atlas-content-cdn.pixelsquid.com/stock-images/baby-care-set-body-wash-nr11RxE-600.jpg"></img>
            <p>Baby Care</p>
          </div>
        </Link>

        <Link to="/category/smart-watches" className="p-1 col-2">
          <div>
            <img src="https://shreepng.com/img/Inside/Electronic/Smartwatch/realme%20Watch%20Classic%20Black%20Left.png"></img>
            <p>Smart watches</p>
          </div>
        </Link>

        <Link to="/category/personal-care" className="p-1 col-2">
          <div>
            <img src="https://www.pngitem.com/pimgs/m/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png"></img>
            <p>Personal Care</p>
          </div>
        </Link>

        <Link to="/category/workout-gym" className="p-1 col-2">
          <div>
            <img src="https://w7.pngwing.com/pngs/130/964/png-transparent-dumbbells-dumbell-barbell-dumbells-gym-gym-equipment-3d-icon-thumbnail.png"></img>
            <p>Workout & Gym</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default TopCategories;
