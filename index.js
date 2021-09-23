
function distanceFromHqInBlocks(x){
    if (x >= 42){
        return x - 42
    }
    else{
        return 42 - x
    }

}

function distanceFromHqInFeet(y){
    return distanceFromHqInBlocks(y) * 264
}

function distanceTravelledInFeet(x, y){
    if (x > y){
        return (x - y) * 264
    }else{
        return (y- x) * 264
    }
}

function calculatesFarePrice(x, y){
    const totalFt = distanceTravelledInFeet(x,y)
    if(totalFt < 400){
        return 0
    }else if(totalFt >= 400 && totalFt <= 2000){
        return (totalFt - 400) * 0.02

    }else if(totalFt >= 2000 && totalFt <= 2500 ){
        return 25
    }else{
        return "cannot travel that far"
    }
}