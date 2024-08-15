"use client";
import React, { useState, useEffect } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("United Kingdom");

  useEffect(() => {
    const getCountry = async () => {
      const res = await fetch(
        `https://extreme-ip-lookup.com/json?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      );
      const data = await res.json();
      const response = data.country;

      if (res.ok) {
        setCountry(response);
      }
    };
    getCountry();
  }, []);

  return <div>{country}</div>;
}
