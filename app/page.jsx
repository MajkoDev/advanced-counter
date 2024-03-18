import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="">
      <h2 className="text-center text-3xl font-extralight mt-12 mb-4">
        Advanced Counter
      </h2>

      <div className="w-full flex flex-col md:flex-row justify-evenly items-center">
        <div className="md:order-1 flex flex-col gap-y-2 items-center m-4 md:m-8">
          <div className="flex flex-row gap-x-2">
            <Input placeholder="+1" className="w-16 text-center font-medium" />
            <Button className="w-36" variant="outline">
              Addition
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Input placeholder="-1" className="w-16 text-center font-medium" />
            <Button className="w-36" variant="outline">
              Subtraction
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Button className="w-44" variant="destructive">
              Reset
            </Button>
          </div>
        </div>

        <div className="order-first md:order-2">
          <h1 className="text-center text-7xl font-extrabold">0</h1>
        </div>

        <div className="md:order-3 flex flex-col gap-y-2 items-center m-4 md:m-8">
          <div className="flex flex-row gap-x-2">
            <Input placeholder="*4" className="w-16 text-center font-medium" />
            <Button className="w-36" variant="outline">
              Multiplication
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Input placeholder="/3" className="w-16 text-center font-medium" />
            <Button className="w-36" variant="outline">
              Division
            </Button>
          </div>

          <div className="flex flex-row gap-x-2">
            <Input placeholder="**2" className="w-16 text-center font-medium" />
            <Button className="w-36" variant="outline">
              Exponentiation
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
