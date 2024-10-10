"use client"

import { Input } from "@/components/ui/input";
import {SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

export function InputWithLabel() {
  return (
    <div className="relative flex justify-end p-2">
      <Input
        type="text"
        id="text"
        placeholder="Search Country"
        className=" w-1/3"
      />
      <Button variant={"ghost"} className="absolute" size="icon">
        <SearchIcon className="p-1" />
      </Button>
    </div>
  );
}

export const SearchData = () => {
  return (
    <div>
    </div>
  );
};