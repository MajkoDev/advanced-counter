"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + parseInt(value));
  }
  function decrement() {}
  function reset() {
    setCount(0);
  }

  function multiplication() {}
  function division() {}
  function exponentiation() {}

  return (
    <main className="">
      <h2 className="text-center text-3xl font-extralight mt-12 mb-4">
        Advanced Counter
      </h2>

      <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
        <div className="md:order-1 flex flex-col gap-y-2 items-center m-8">
          <div className="flex flex-row gap-x-2">
            <Input
              placeholder="(+)"
              className="w-16 text-center font-medium"
              onChange={(e) => setValue(e.target.value)}
            />
            <Button className="w-36" variant="outline" onClick={increment}>
              Addition
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Input className="w-16 text-center font-medium" placeholder="(-)" />
            <Button className="w-36" variant="outline">
              Subtraction
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Button className="w-44" variant="destructive" onClick={reset}>
              Reset
            </Button>
          </div>
        </div>
        <div className="order-first md:order-2">
          <h1 className="text-center text-7xl font-extrabold">{count}</h1>
        </div>
        <div className="md:order-3 flex flex-col gap-y-2 items-center m-8">
          <div className="flex flex-row gap-x-2">
            <Input className="w-16 text-center font-medium" placeholder="(*)" />
            <Button className="w-36" variant="outline">
              Multiplication
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Input className="w-16 text-center font-medium" placeholder="(/)" />
            <Button className="w-36" variant="outline">
              Division
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Input
              className="w-16 text-center font-medium"
              placeholder="(**)"
            />
            <Button className="w-36" variant="outline">
              Exponentiation
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
