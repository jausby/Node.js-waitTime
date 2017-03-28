// run for 60 seconds
var waitTime = 60000;
var currentTime = 0;
// report to the console/user every 5 seconds
var waitInterval = 500;
var percentWaited = 0;

function writeWaitingPercent(p){
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${p}%`);
};

var interval = setInterval(function(){
  currentTime += waitInterval;
  // calculate the percentage of waiting
  percentWaited = Math.floor((currentTime/waitTime) * 100);
  writeWaitingPercent(percentWaited);
  // console.log(`waiting ${currentTime/1000} seconds...`);
}, waitInterval);

setTimeout(function(){
  clearInterval(interval);
  writeWaitingPercent(100);
  console.log("\n\ndone");
},waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);
