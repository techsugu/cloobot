import React from "react";
import { Parallax } from "react-parallax";

class Slider extends React.Component {
    render() {
        const styles = {
            textAlign: "center"
        };
        const insideStyles = {
            background: "white",
            padding: 20,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        };
        const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
        const image4 = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
        return (
            <div style={styles}>
                <Parallax bgImage={image1} strength={500}>
                    <div style={{ height: 500 }}>
                        <div style={insideStyles}>HTML inside the parallax</div>
                    </div>
                </Parallax>
                <Parallax
                    bgImage={image4}
                    strength={200}
                    renderLayer={percentage => (
                        <div>
                            <div
                                style={{
                                    position: "absolute",
                                    background: `rgba(255, 125, 0, ${percentage * 1})`,
                                    left: "50%",
                                    top: "50%",
                                    borderRadius: "50%",
                                    transform: "translate(-50%,-50%)",
                                    width: percentage * 500,
                                    height: percentage * 500
                                }}
                            />
                        </div>
                    )}
                >
                    <div style={{ height: 500 }}>
                        <div style={insideStyles}>Hello!</div>
                    </div>
                </Parallax>
            </div>
        )
    }
}

export default Slider;