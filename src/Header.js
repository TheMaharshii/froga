import React, { useRef, useEffect, useState } from "react";
import "./Header.css";

function Header({ timeline, ease }) {
 let logo = useRef(null);
 let menu_item1 = useRef(null);
 let menu_item2 = useRef(null);
 let menu_item3 = useRef(null);
 const [isFixed, setIsFixed] = useState(false);

 useEffect(() => {
    timeline.from(logo, 1, {
      opacity: 0,
      y: "100",
    });
    timeline.from([menu_item1, menu_item2, menu_item3], 2, {
      opacity: 0,
      y: -200,
      stagger: {
        amount: 0.4,
      },
      ease: ease,
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
 }, [timeline, ease]);

 const headerClass = isFixed ? "header fixed" : "header";

 return (
    <div>
      <div className={headerClass}>
        <div className="logo" ref={(el) => (logo = el)}>
          Logo
        </div>
        <div className="menu">
          <div className="menu-item" ref={(el) => (menu_item1 = el)}>
            Instagram
          </div>
          <div className="menu-item" ref={(el) => (menu_item2 = el)}>
            Facebook
          </div>
          <div className="menu-item" ref={(el) => (menu_item3 = el)}>
            Twitter
          </div>
        </div>
      </div>
    </div>
 );
}

export default Header;