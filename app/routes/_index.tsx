import type { MetaFunction } from "@vercel/remix";
import moduleA from "my-test-lib/module-a"
import moduleB from "my-test-lib/module-b"

export const config = { runtime: "edge" };

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <p>{moduleA()}</p>
      <p>{moduleB()}</p>
    </div>
  );
}
