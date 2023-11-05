![Video Playback Tracking](https://github.com/ARH-MNAJS/Video-Playback-Tracking-using-Vanilla-JS/blob/e587a122a053b27bb64d1532cc90195e3b4b7466/Readme%20Image.png)

# Video Playback Tracking using Vanilla JavaScript

This repository provides a simple example and guide for tracking video playback events using vanilla JavaScript. With this code, you can monitor user interactions with videos, such as play, pause, seek, and completion, and use this data for analytics, user engagement analysis, or custom video player features.

## Algorithm Explanation


``` javascript
let watched = new Array(0);
  
video.addEventListener('timeupdate', timeupdate, false);
function timeupdate() {
  currentTime = parseInt(video.currentTime);
  watched[currentTime] = 1;
  console.log(watched);
  var sum = watched.reduce(function(previousValue, currentValue) {return previousValue + currentValue}, 0);
  clock.innerHTML = (sum-1) + " secs" + ` / Total Price is $${(sum-1)*0.01.toFixed(4)}`;
}
```
This would be the most important code snippet in the `func.js` file wherein the time of the video played is tracked and converted into respective currency

``` javascript
let watched = new Array(0);
video.addEventListener('timeupdate', timeupdate, false);
```
- Initializes an empty array called `watched` to keep track of watched video seconds.
- Adds a 'timeupdate' event listener to the `video` element, triggering the `timeupdate` function when the event occurs.
``` javascript
function timeupdate() { ... };
currentTime = parseInt(video.currentTime);
watched[currentTime] = 1;
console.log(watched);
```
- Defines the `timeupdate` function, which handles video playback tracking and display.
- Retrieves the current time of the video (in seconds) and stores it in the `currentTime` variable.
- Marks the current second as watched by setting the corresponding element in the `watched` array to 1.
- Logs the `watched` array to the console, indicating which seconds have been watched (marked with 1).

``` javascript
var sum = watched.reduce(function(previousValue, currentValue) {return previousValue + currentValue}, 0);
clock.innerHTML = (sum-1) + " secs" + ` / Total Price is $${(sum-1)*0.01.toFixed(4)}`;
```
- Calculates the sum of all elements in the `watched` array, representing the total number of seconds watched.
- Updates the content of an element with the id 'clock' in the HTML to display the total number of seconds watched (subtracting 1 second to account for the initial value) and calculates a "Total Price" based on the number of seconds watched, assuming a rate of $0.01 per second. The `toFixed(4)` function is used to format the total price with four decimal places.


