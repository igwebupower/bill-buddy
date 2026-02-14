"use client";

import { useEffect, useState } from "react";

function generateId(): string {
  return crypto.randomUUID();
}

export function useDeviceId(): string | null {
  const [deviceId, setDeviceId] = useState<string | null>(null);

  useEffect(() => {
    let id = localStorage.getItem("bill-buddy-device-id");
    if (!id) {
      id = generateId();
      localStorage.setItem("bill-buddy-device-id", id);
    }
    setDeviceId(id);
  }, []);

  return deviceId;
}
