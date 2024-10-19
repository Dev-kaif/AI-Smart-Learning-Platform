import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import "../style.css";

const MouseFollower = () => {
  const followerRef = useRef(null);
  let posx = 0;
  let diff = 0;

  useEffect(() => {
    const follower = followerRef.current;

    // GSAP initial setup for the follower (centers it around the mouse cursor)
    gsap.set(follower, { xPercent: -50, yPercent: -50, width: '20px' }); // Set default width

    const moveFollower = (e) => {
      // Calculate the difference in the X-axis (horizontal movement)
      diff = gsap.utils.clamp(15, 35, e.clientX - posx);
      posx = e.clientX;

      // Update the follower width based on the skew effect
      gsap.to(follower, {
        width: `${diff}px`,
        ease: 'expo.out',
        duration: 0.3,
      });

      // Move the follower to follow the mouse
      gsap.to(follower, { duration: 0.4, x: e.clientX, y: e.clientY });
      gsap.to(follower, {
            width: '1vw', 
            ease: 'expo.out',
            duration: 0.9,
          });
    };

    window.addEventListener('mousemove', moveFollower);
    window.addEventListener('mouseenter', () => gsap.to(follower, { width: '20px' })); // Reset on mouse enter

    return () => {
      window.removeEventListener('mousemove', moveFollower);
    };
  }, []);

  return <div className="mouse-follower" ref={followerRef}></div>;
};

export default MouseFollower;
