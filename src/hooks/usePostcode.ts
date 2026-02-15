"use client";

import { useState, useEffect, useCallback } from "react";

const POSTCODE_KEY = "billbrief-postcode";
const POSTCODE_EVENT = "billbrief-postcode-changed";

export function usePostcode() {
  const [postcode, setPostcodeState] = useState<string | null>(null);

  useEffect(() => {
    setPostcodeState(localStorage.getItem(POSTCODE_KEY));

    function handleChange() {
      setPostcodeState(localStorage.getItem(POSTCODE_KEY));
    }

    window.addEventListener(POSTCODE_EVENT, handleChange);
    return () => window.removeEventListener(POSTCODE_EVENT, handleChange);
  }, []);

  const setPostcode = useCallback((value: string) => {
    localStorage.setItem(POSTCODE_KEY, value);
    window.dispatchEvent(new Event(POSTCODE_EVENT));
  }, []);

  return { postcode, setPostcode };
}
