export async function part1() {
  const text = await Deno.readTextFile("day3/input.txt");
  const regex = /mul\((\d{1,3}),(\d{1,3})\)/g;
  const doRegex = /do\(\)/g;
  const dontRegex = /don't\(\)/g;

  // Combine matches into a single array with type information
  const allMatches = [
    ...Array.from(text.matchAll(regex), (match) => ({ type: "mul", match })),
    ...Array.from(text.matchAll(doRegex), (match) => ({ type: "do", match })),
    ...Array.from(
      text.matchAll(dontRegex),
      (match) => ({ type: "dont", match }),
    ),
  ];

  // Sort by starting index
  allMatches.sort((a, b) => a.match.index - b.match.index);

  // Iterate over matches and handle each type
  //
  let enabled = true;
  let total = 0;
  for (const { type, match } of allMatches) {
    switch (type) {
      case "mul":
        const [_, num1, num2] = match; // Extract matched groups
        if (enabled) {
          total += num1 * num2;
        }
        // console.log(`Multiplication: ${num1} * ${num2} = ${num1 * num2}`);
        break;
      case "do":
        enabled = true;
        // console.log("Do something!");
        break;
      case "dont":
        enabled = false;
        // console.log("Don’t do something!");
        break;
    }
  }
  console.log(total);
}
