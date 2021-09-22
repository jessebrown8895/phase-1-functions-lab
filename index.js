
function distanceFromHqInBlocks(x){
    if (x >= 42){
        return x - 42
    }
    else{
        return 42 - x
    }

}

function distanceFromHqInFeet(y){
    console.log(distanceFromHqInBlocks(y))
}
