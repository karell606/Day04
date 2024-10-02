let index = 0;
let lowerCaseHousingToFind = housingToFind.toLowerCase();

while (index < housingList.length) {
	if (housingList[index].toLowerCase() === lowerCaseHousingToFind) {
		return [index + 1, housingList[index]];
        }
        index++;
    }
    return null;
}

displayResult(findHousing("Igloo", ["Flat", "House", "Hut", "House", "Igloo"]))

//Use console.log to debug you're code ! It is very useful
console.log("I'm debugging")
