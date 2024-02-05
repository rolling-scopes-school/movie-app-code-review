export function wait(tShirtSize: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, tShirtSize);
  });
}
