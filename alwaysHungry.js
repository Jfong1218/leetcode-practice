function alwaysHungry(arr) {
    // console.log(arr.length)
    for (i=0; i<arr.length; i++) {
        var hungry = true
        if (arr[i]=="food"){
            console.log("yummy")
            hungry = false;
        }
    }
    if (hungry == true) {
        console.log("i'm hungry")
    }
}


alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
alwaysHungry([2,"food",4,5,9,"food","food"])