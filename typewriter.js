// Animated Sentence
// print each character of the sentence with a 50ms delay each, starting after 1 second

const sentence = "hello there from lighthouse labs";
let incrementInMs = 0;
for (const char of sentence) {
  setTimeout(() => {
    setTimeout(() => {
      process.stdout.write(char);
    }, 1000);
  }, incrementInMs);
  
  incrementInMs += 50;
}

setTimeout(() => {
  setTimeout(() => {
    process.stdout.write("\n");
  }, incrementInMs);
}, 1000);