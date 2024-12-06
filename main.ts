// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
//

import { part2 } from "./day1/solution.ts";

if (import.meta.main) {
  await part2()
}
