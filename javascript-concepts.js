// setInterval(() => {
//     setTimeout(() => {
//     console.log("Hello after 1 seconds");
// }, 1000);
// }, 1000);

const intervalId = setInterval(() => {
    setTimeout(() => {
        
    }, 1000);
    console.log("Hello after 1 seconds");
}, 1000);

// 20 seconds తర్వాత interval stop చేయడం
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped after 200 seconds");
}, 19000);