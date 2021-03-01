import React from "react";
import * as bS from "react-bootstrap";
import A from "../"

function Carousel(){
    return (
        <div>
            <bS.Carousel>
                <bS.CarouselItem>
                    <img 
                    style={{height: "100vh", width: "100vw", objectFit:"cover"}}
                    className="d-block w-100" 
                    src="/images/pic1.jpg" 
                    alt="First slide"/>
                    <bS.Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </bS.Carousel.Caption>
                    </bS.CarouselItem>
                    <bS.CarouselItem>
                    <img 
                    style={{height: "100vh", width: "100vw", objectFit:"cover"}}
                    className="d-block w-100" 
                    src="/images/pic2.jpg" 
                    alt="Second slide"/>
                    <bS.Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </bS.Carousel.Caption>
                    </bS.CarouselItem>
                    <bS.CarouselItem>
                    <img 
                    style={{height: "100vh", width: "100vw", objectFit:"cover"}}
                    className="d-block w-100" 
                    src="/images/pic3.jpg" 
                    alt="Third slide"/>
                    <bS.Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </bS.Carousel.Caption>
                </bS.CarouselItem>
            </bS.Carousel>
        </div>
    );
}

export default Carousel;