function addHousing(housingMap, houseType, quantity) {
    if (housingMap.has(houseType)) {
    	let currentQuantity = housingMap.get(houseType);
        housingMap.set(houseType, currentQuantity + quantity);
    } else {
        housingMap.set(houseType, quantity);
    }
}

// Here is some code to test and display your function output:
let housingList = new Map();
addHousing(housingList, "Flat", 2);
addHousing(housingList, "Log", 3);
addHousing(housingList, "Flat", 3);
addHousing(housingList, "Hutch", 2);
displayResult(housingList);
