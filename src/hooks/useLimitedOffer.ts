import { useState, useEffect, useCallback } from 'react';
// import { useAuth } from './useAuth';

export const useLimitedOfferPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
//   const { isGuest } = useAuth();
const  isGuest  = true

  // Check session storage
  const getSessionFlag = () => {
    return sessionStorage.getItem('limited_offer_shown') === 'true';
  };

  const setSessionFlag = () => {
    sessionStorage.setItem('limited_offer_shown', 'true');
  };

  // Timeout to show after 10 seconds
  useEffect(() => {
    if (!isGuest || hasTriggered || getSessionFlag()) return;

    const timer = setTimeout(() => {
      setShowPopup(true);
      setHasTriggered(true);
      setSessionFlag();
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [isGuest, hasTriggered]);

  // Reset on page navigation (only show once per session per page)
  useEffect(() => {
    const handlePageShow = () => {
      // Reset for new page load in same session
      if (!getSessionFlag()) {
        setHasTriggered(false);
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  const handleClose = useCallback(() => {
    setShowPopup(false);
  }, []);

  const forceShowPopup = useCallback(() => {
    if (!getSessionFlag()) {
      setShowPopup(true);
      setSessionFlag();
    }
  }, []);

  return {
    showPopup,
    handleClose,
    forceShowPopup,
    hasTriggered,
  };
};