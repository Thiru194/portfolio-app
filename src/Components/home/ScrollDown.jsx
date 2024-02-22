import React from 'react';

const ScrollDown = () => {
  return (
    <div className="scroll_down">
      <button className="mouse_wrapper">
        <span className="home_scroll-name">Scroll Down</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </button>
    </div>
  );
}

export default ScrollDown;

