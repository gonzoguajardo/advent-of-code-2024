// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
//

import { part1 } from "./day3/solution.ts";

if (import.meta.main) {
  await part1();
}
