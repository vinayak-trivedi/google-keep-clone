import React, { useEffect, useRef, useState } from 'react';

export default function useClickOutsideComponent({
  initialIsVisible,
  ref,
  onClose = () => {},
}) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { isComponentVisible, setIsComponentVisible };
}
