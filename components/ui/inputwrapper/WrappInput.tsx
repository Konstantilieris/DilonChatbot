"use client";
import React, { useEffect } from "react";
import { PlaceholdersAndVanishInput } from "../magic-input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
const WrappInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [searchTerm, setSearchTerm] = React.useState("");
  console.log(searchTerm);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "q",
          value: searchTerm,
        });
        router.push(newUrl, { scroll: false });
      } else {
        const newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ["q"],
        });
        router.push(newUrl, { scroll: false });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, searchParams, query, pathname, router]);
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
  return (
    <PlaceholdersAndVanishInput
      placeholders={placeholders}
      onChange={setSearchTerm}
    />
  );
};

export default WrappInput;
