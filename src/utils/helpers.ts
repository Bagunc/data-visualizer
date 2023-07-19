export function betweenNumbersArray(start: number, end: number): Array<number> {
  return Array.from(new Array(end + 1).keys()).slice(start);
}
