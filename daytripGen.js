'use strict';

// ***SKIP FOR NOW*** 1.Make at least 3 commits.
//2. User gets prompted to get a randomly selected destination for a day trip.
//3. User gets prompted to get a randomly selected restaurant for the day trip.
//4. User gets prompted to get a randomly selected mode of transportation for a day trip.
//5. User gets prompted to get a randomly selected form of entertainment for a day trip.
//6. User wants to be able to randomly re-select a choice from each category if they don't like one or more things.
//7. User wants to be able to confirm the trip is 'complete' once all items in items in each category are correct to their liking.
//8. User wants their completed/confirmed trip to be displayed on the console.
//9. As a Dev, I want all of my funcitons to have a single responsibility. **Each function should do one thing**

//Arrays:
let destinationArr = ['New York', 'Nevada', 'Texas', 'California', 'Florida'];
let foodArr = ['In-n-Out', 'Ruth Chris', 'Texas Roadhouse', 'The Cheescake Factory', 'Mellow Mushroom'];
let transportationArr = ['Car', 'Train', 'Yacht', 'Motorcycle with Side car', 'Plane'];
let activitiesArr = ['Hot air baloon ride', 'Snorkeling', 'Horseback Riding', 'Amusement Park', 'Escape Room'];
let completTrip = [confirmedDestination(), confirmedRestaurant(), confirmedTransportation(), confirmedEntertainment()];

//randomly select a destination for the user.
function confirmedDestination() {
    let selectDestination = destinationArr[Math.floor(Math.random() * destinationArr.length)];
    console.log(selectDestination);
    alert(selectDestination);
    return selectDestination;
}


//randomly select a restaurant for the user.
function confirmedRestaurant() {
    let selectRestaurant = foodArr[Math.floor(Math.random() * foodArr.length)];
    console.log(selectRestaurant);
    alert(selectRestaurant);
    return selectRestaurant;
}

//randomly select a mode of transportation for user.
function confirmedTransportation() {
    let selectTransportation = transportationArr[Math.floor(Math.random() * transportationArr.length)];
    console.log(selectTransportation);
    alert(selectTransportation);
    return selectTransportation;
}


//randomly select a form of entertainment for user
function confirmedEntertainment() {
    let selectEntertainment = activitiesArr[Math.floor(Math.random() * activitiesArr.length)];
    console.log(selectEntertainment);
    alert(selectEntertainment);
    return selectEntertainment;
}


//user is prompted to reselect if needed
function reSelect() {
    let userInput;
    userInput = prompt('Enter Yes if you are satisfied with your trip. Enter No if you are dissatisfied with your trip');
    if (userInput === 'Yes') {
        alert("You've successfully booked your trip! Enjoy!");
        console.log("User is satisfied with their trip selection!");
    }

    else if (userInput === 'No') {
        getUserInput();
        switchcase();
    }
}
alert(reSelect());

//prompt user to make another selection.
function getUserInput() {
    let changeInput = prompt('To change Destination - Enter 1 . To change Restaurant - Enter 2. To change Transportation - Enter 3. To change Entertainment - Enter 4. No changes - Enter 5.');

    switch (changeInput) {
        case '1':
            let selectDestination = confirmedDestination();
            alert(selectDestination);
            console.log('destination was changed to: ' + selectDestination);
            break;

        case '2':
            let selectRestaurant = confirmedRestaurant();
            alert(selectRestaurant);
            console.log('restaurant was changed to: ' + selectRestaurant);
            break;

        case '3':
            let selectTransportation = confirmedTransportation();
            alert(selectTransportation);
            console.log('transportation was changed to: ' + selectTransportation);
            break;

        case '4':
            let selectEntertainment = confirmedEntertainment();
            alert(selectEntertainment);
            console.log('entertainment was changed to ' + selectEntertainment);
            break;

    }
}
alert(getUserInput());


function confirmedTrip() {
    let answer = prompt('Type yes if this day trip is to your liking?');
    if (answer === 'yes'){
        alert ('Thank you! Enjoy your trip!');
        console.log(completTrip);
    }
    else{
        alert ('Sorry we could not be of help. Please try again');
    }
}
confirmedTrip();