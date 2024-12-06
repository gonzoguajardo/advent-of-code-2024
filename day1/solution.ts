export async function part2() {
  const text = await Deno.readTextFile("input.txt");
  // const input = await Deno.readTextFile("day1/input.txt");
  const lines = text.split("\n");
  lines.pop();
  const left = [];
  const right = [];

  for (const line of lines) {
    const numbers = line.split("   ")
    left.push(numbers[0])
    right.push(numbers[1])
  }

  const rightMap = new Map<string, number>();

  for (let i = 0; i < left.length; i++) {
    if (rightMap.has(right[i])) {
      rightMap.set(right[i], rightMap.get(right[i]) + 1)
    }else {
     rightMap.set(right[i], 1)
    }
  }

  let total = 0;
  for (let i = 0; i < left.length; i++) {
    if (rightMap.has(left[i])) {
      total += left[i] * rightMap.get(left[i])
    }
  }

  console.log("total", total);
}

function day1part1() {
  const text = Deno.readTextFile("input.txt");
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
