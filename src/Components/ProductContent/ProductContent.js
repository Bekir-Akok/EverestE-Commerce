import { useState } from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import { RiStarSFill } from 'react-icons/ri';
import './productContent.scss';

const ProductContent = ({ filterProduct }) => {



    const stars = [
        {}, {}, {}, {}, {}
    ]

    const [color, setColor] = useState();
    const buttons = [
        { color: "lightblue" }, { color: "bisque" }, { color: "black" }, { color: "grey" }
    ]

    return (
        <>
            {filterProduct &&
                filterProduct.map((pro, i) => {
                    return (
                        <div key={i}>
                            <div className="product-container" >
                                <div className="product-wrapper">
                                    <div className="product-image">
                                        <SRLWrapper>
                                            <img src={pro.imgUrl} alt="" />
                                        </SRLWrapper>
                                    </div>
                                    <div className="product-content">
                                        <div className="product-title">
                                            <h5>{pro.description[0].details}</h5>
                                            <h3>{pro.name}</h3>
                                            <h6>${pro.price}</h6>
                                            <div className="product-stars">
                                                <h6>{stars.map((x) => {
                                                    return (
                                                        <RiStarSFill />
                                                    )
                                                })}</h6>
                                                <h6 style={{ marginLeft: "15px" }}>22 Reviews</h6>
                                            </div>
                                        </div>
                                        <div className="product-color">
                                            <h6>
                                                {
                                                    color === undefined ? null : `color: ${color}`
                                                }
                                                
                                            </h6>
                                            <div className="product-buttons">
                                                {
                                                    buttons.map(((button, i) => {
                                                        return (
                                                            <input key={i} type="button" style={{ backgroundColor: button.color }}
                                                                onClick={() => setColor(button.color)} ></input>
                                                        )
                                                    }))
                                                }
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProductContent
