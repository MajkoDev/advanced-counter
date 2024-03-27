"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { formatNumber } from "@/lib/format-number";

// redux toolkit
import { useSelector, useDispatch } from "react-redux";
import {
  setValue,
  increment,
  decrement,
  multiplication,
  division,
  exponentiation,
  reset,
} from "@/redux/counterSlice";

export default function Home() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleValueChange = (e, operation) => {
    dispatch(setValue({ operation, newValue: parseInt(e.target.value) }));
  };

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
            <Button
              className="w-36"
              variant="outline"
              onClick={() => dispatch(increment())}
            >
              Addition
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Input
              placeholder="-1"
              className="w-16 text-center font-medium"
              onChange={(e) => handleValueChange(e, "decrement")}
            />
            <Button
              className="w-36"
              variant="outline"
              onClick={() => dispatch(decrement())}
            >
              Subtraction
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Button
              className="w-44"
              variant="destructive"
              onClick={() => dispatch(reset())}
            >
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
            <Button
              className="w-36"
              variant="outline"
              onClick={() => dispatch(multiplication())}
            >
              Multiplication
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Input
              placeholder="/3"
              className="w-16 text-center font-medium"
              onChange={(e) => handleValueChange(e, "division")}
            />
            <Button
              className="w-36"
              variant="outline"
              onClick={() => dispatch(division())}
            >
              Division
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Input
              placeholder="**2"
              className="w-16 text-center font-medium"
              onChange={(e) => handleValueChange(e, "exponentiation")}
            />
            <Button
              className="w-36"
              variant="outline"
              onClick={() => dispatch(exponentiation())}
            >
              Exponentiation
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
