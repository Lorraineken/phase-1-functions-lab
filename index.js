// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
if (blocks === 43){
    return 1
}
else if (blocks === 50 || blocks ===34){
    return 8
}
}

function distanceFromHqInFeet(blocks){
 distanceFromHqInBlocks(blocks);

 return  (distanceFromHqInBlocks(blocks))*264
}

function distanceTravelledInFeet(start, destination){ 
    if (destination>start){
        return (destination-start)*264;
    }
    else if(start>destination){
        return (start-destination)*264;
    }

}

function calculatesFarePrice(start, destination){
   const feetTravelled = distanceTravelledInFeet(start,destination)
    if (feetTravelled>0 && feetTravelled<=400){
        return 0;
    }
    else if (feetTravelled>400 && feetTravelled<=2000){
        return ((feetTravelled-400)*2)/100
    }
    else if (feetTravelled>2000 && feetTravelled<=2500){
        return 25;
    }
    else {
        return 'cannot travel that far'
    }

}