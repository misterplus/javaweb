function time() {
    var date = new Date();
    var hour = date.getHours();
    if (hour <= 6) {
        console.log("凌晨好");
    }
    else if (hour <= 12) {
        console.log("早上好");
    }
    else if (hour <= 18) {
        console.log("下午好");
    }
    else {
        console.log("晚上好");
    }
}
time();