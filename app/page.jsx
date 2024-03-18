"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatNumber } from "@/lib/format-number";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(2);
  const [value, setValue] = useState({
    increment: 1,
    decrement: 1,
    multiplication: 4,
    division: 3,
    exponentiation: 2,
  });

  const handleValueChange = (e, operation) => {
    setValue((prevValue) => ({
      ...prevValue,
      [operation]: parseInt(e.target.value),
    }));
  };

  function increment() {
    setCount((prevCount) => (prevCount += value.increment));
  }
  const decrement = () => {
    setCount((prevCount) => prevCount - value.decrement);
  };
  function multiplication() {
    setCount((prevCount) => (prevCount *= value.multiplication));
  }
  function division() {
    setCount((prevCount) => (prevCount /= value.division));
  }
  function exponentiation() {
    setCount((prevCount) => (prevCount **= value.exponentiation));
  }

  function reset() {
    setCount(0);
  }
  return (
    <main className="">
      <h2 className="text-center text-3xl font-extralight mt-12 mb-4">
        Advanced Counter
      </h2>

      <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
        <div className="md:order-1 flex flex-col gap-y-2 items-center m-8">
          <div className="flex flex-row gap-x-2">
            <Input
              placeholder="+1"
              className="w-16 text-center font-medium"
              onChange={(e) => handleValueChange(e, "increment")}
            />
            <Button className="w-36" variant="outline" onClick={increment}>
              Addition
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Input
              placeholder="-1"
              className="w-16 text-center font-medium"
              onChange={(e) => handleValueChange(e, "decrement")}
            />
            <Button className="w-36" variant="outline" onClick={decrement}>
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
          <h1 className="text-center text-7xl font-extrabold">
            {formatNumber(count)}
          </h1>
        </div>

        <div className="md:order-3 flex flex-col gap-y-2 items-center m-8">
          <div className="flex flex-row gap-x-2">
            <Input
              placeholder="*4"
              className="w-16 text-center font-medium"
              onChange={(e) => handleValueChange(e, "multiplication")}
            />
            <Button className="w-36" variant="outline" onClick={multiplication}>
              Multiplication
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Input
              placeholder="/3"
              className="w-16 text-center font-medium"
              onChange={(e) => handleValueChange(e, "division")}
            />
            <Button className="w-36" variant="outline" onClick={division}>
              Division
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Input
              placeholder="**2"
              className="w-16 text-center font-medium"
              onChange={(e) => handleValueChange(e, "exponentiation")}
            />
            <Button className="w-36" variant="outline" onClick={exponentiation}>
              Exponentiation
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
