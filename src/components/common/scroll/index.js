import React, { useEffect, useState } from 'react';
import Button from '../button';

const Scroll = () => {
  const [isVisable, setIsVisable] = useState(false);
  const toggleVis = () => {
    if (window.pageYOffset > 100) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVis);
    return () => {
      window.removeEventListener('scroll', toggleVis);
    };
  }, []);

  const chevIcon =  <i className="bi-chevron-up" role="img" aria-label="chevron-up" />

  return (
    <div style={{ position: 'fixed', bottom: 55, right: 50 }}>
      <Button
        onClick={scrollToTop}
        buttonStyle={isVisable ? ('btn--scroll') : ('btn--d-none')}
        buttonSize={`btn--chev`}
        children={chevIcon} />
    </div>
  );
};

export default Scroll;
