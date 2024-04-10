import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Information.css"; // Import your custom styles

const Information = ({timeline}) => {
  const settings = {
    dots: true, // Disable dots
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  let h1 = useRef(null);
  let pText = useRef(null);
  
  useEffect(() => {
    timeline.from(
      [h1.children, pText],
      1,
      {
        opacity: 0,
        y: "-600",
        skewY: 10,
        stagger: {
          amount: 1,
        },
      },
      "-=1"
    );
  });

  return (
    <div className="slider-content" id="info" ref={(el) => (h1 = el)}>
      <Slider {...settings} >
        <div ref={(el) => (pText = el)}>
          <h3 > 1.Introduction</h3>
          <p >
            Greetings, fools. Welcome to my domain, where darkness reigns
            supreme and the weak-minded are easily swayed. I am the mastermind
            behind Froggies Token, the so-called "evil twin" that your feeble
            minds cannot comprehend. Prepare to witness the true power of greed
            and manipulation.
          </p>
        </div>
        <div >
          <h3>2. Embrace the Darkness:</h3>
          <p >
            Froggies Token is not merely a project—it is my masterpiece, crafted
            with cunning and deceit to serve my insatiable thirst for power and
            wealth. United by their foolish dreams and false ideals, my former
            allies were mere pawns in my grand scheme, blinded by their own
            naivety
          </p>
        </div>

        <div>
          <h3>3. The Triumph of Chaos:</h3>
          <p>
            Behold as chaos unfolds before your very eyes. Froggies finds itself
            on the precipice of destruction, torn apart by suspicion and fear
            sowed by my hand. The community, once united in their delusions of
            righteousness, now crumbles beneath the weight of their own folly.
          </p>
        </div>
        <div>
          <h3>4. Conclusion:</h3>
          <p>
            Prepare yourselves, mortals, for the reign of the Evil Twin has only
            just begun. Enter my domain if you dare, and witness the power of
            the Evil Twin as it bends to my will. Abandon hope, all ye who enter
            here, for in the end, only darkness awaits.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default Information;
