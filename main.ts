// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const text = await Deno.readTextFile("input.txt");
  const lines = text.split("\n");
  lines.pop();
  const left = [];
  const right = [];

  for (const line of lines) {
    const numbers = line.split("   ")
    left.push(numbers[0])
    right.push(numbers[1])
  }
  left.sort();
  right.sort();

  let totalDiffs = 0
  for (let i = 0; i < left.length; i++) {

    totalDiffs += Math.abs(left[i] - right[i]);
  }

  // console.log("left", left);
  // console.log("right", right);
  console.log("totalDiffs", totalDiffs)
}
