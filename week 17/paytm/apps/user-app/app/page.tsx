import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="text-2xl font-bold flex flex-col">
      Hello there
      <Button className="text-red-300" appName="hlos">
        Hello
      </Button>
    </div>
  );
}
