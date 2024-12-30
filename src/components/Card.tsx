import React from "react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface ICard {
    title: string;
    subTitle: string;
    image: string;
    currency: string;
    price: string;
    rating: string;
}

const Card: React.FC<ICard> = ({
    currency,
    image,
    price,
    rating,
    subTitle,
    title,
}) => {
    return (
        <div className="card">
            <div className="iconWrapper">
                <CiHeart />

                <CiShare2 />

            </div>
            <img src={image} alt="Product" />
            <div className="card-content">
                <div className="card-rating"><FaStar />{rating}</div>
                <div className="main">
                    <div className="card-title">
                        <p>{title}</p>
                        <span>{subTitle}</span>
                    </div>

                    <div className="card-util">
                        <select name="quantity" id="quantity">
                            <option value="1">compatibility</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>

                </div>
                <div className="card-price">
                    <p>{currency} {price}/-</p>
                </div>
            </div>
            <div className="button-container">
                <button className="bulk">Bulk</button>
                <button className="cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default Card;
