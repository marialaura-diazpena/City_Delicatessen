//var customerArray = [];
var customer = {};

var pizzaTotal = 0;
var sandwichTotal = 0;
var drinkTotal = 0;

var orderButton = document.getElementById('calcOrder');
orderButton.addEventListener("click", calcOrder);

var editButton = document.getElementById('editOrder');


function calcOrder() {
    
    var selectedPizzaTypes = document.querySelectorAll('input[name = "pizzaType[]"]:checked');
    
    customer.pizza = {};
    
    
    for (let i = 0; i < selectedPizzaTypes.length; i++) {
        var thisSelectedPizza = selectedPizzaTypes[i];
        

        if (thisSelectedPizza.value == 'Cheesy' ) {
            
            var cheesySize, numOfCheesy, cheesyToppings;
            var cheesyCost = 0;
            var CtoppingArray = [];
            var toppingCost = 0;
            
            cheesySize = document.getElementById('cheesySize').value;
            
            switch (cheesySize) {
                case 'Small':
                cheesyCost = 8.50;
                break;
                case 'Medium':
                cheesyCost = 11.50;
                break;
                case 'Large':
                cheesyCost = 14.00;
                break;
                case 'Extra Large':
                cheesyCost = 16.50;
                break;
            }
            
            numOfCheesy = document.getElementById('numOfCheesy').value;
            
            cheesyToppings = document.getElementsByName('cheesyToppings[]');
            
            for(var pt = 0; pt < cheesyToppings.length; pt++) {
                
                if( cheesyToppings[pt].checked == true ) {
                    toppingCost += 1.75;
                    CtoppingArray.push( cheesyToppings[pt].value );
                }
            }
            
            cheesyCost = (cheesyCost + toppingCost) * numOfCheesy;

            pizzaTotal += cheesyCost;
            
            customer.pizza.cheesy = {};
            customer.pizza.cheesy.type = "Super Cheesy";
            customer.pizza.cheesy.quantity = numOfCheesy;
            customer.pizza.cheesy.size = cheesySize;
            customer.pizza.cheesy.cost = cheesyCost.toFixed(2);
            customer.pizza.cheesy.toppings = CtoppingArray; 
            
        }
        
        if (thisSelectedPizza.value == 'Meaty' ) {
            
            var meatySize, numOfMeaty, meatyToppings;
            var meatyCost = 0;
            var toppingCost = 0;
            var MtoppingArray = [];
            
            meatySize = document.getElementById('meatySize').value;
            
            switch (meatySize) {
                case 'Small':
                meatyCost = 8.50;
                break;
                case 'Medium':
                meatyCost = 11.50;
                break;
                case 'Large':
                meatyCost = 14.00;
                break;
                case 'Extra Large':
                meatyCost = 16.50;
                break;
            }
            
            numOfMeaty = document.getElementById('numOfMeaty').value;
            
            meatyToppings = document.getElementsByName('meatyToppings[]');
            
            for(var pt = 0; pt < meatyToppings.length; pt++) {
                
                if( meatyToppings[pt].checked == true ) {
                    toppingCost += 1.75;
                    MtoppingArray.push( meatyToppings[pt].value )
                }
            }
            
            meatyCost = (meatyCost + toppingCost) * numOfMeaty;

            pizzaTotal += meatyCost;
            
            customer.pizza.meaty = {};
            customer.pizza.meaty.type = "Extra Meaty";
            customer.pizza.meaty.quantity = numOfMeaty;
            customer.pizza.meaty.size = meatySize;
            customer.pizza.meaty.cost = meatyCost.toFixed(2);
            customer.pizza.meaty.toppings = MtoppingArray;
            
        }
        
        if (thisSelectedPizza.value == 'Veggy' ) {
            
            var veggySize, numOfVeggy, veggyToppings;
            var veggyCost = 0;
            var VtoppingArray = [];
            var toppingCost = 0;
            
            veggySize = document.getElementById('veggySize').value;
            
            switch (veggySize) {
                case 'Small':
                veggyCost = 8.50;
                break;
                case 'Medium':
                veggyCost = 11.50;
                break;
                case 'Large':
                veggyCost = 14.00;
                break;
                case 'Extra Large':
                veggyCost = 16.50;
                break;
            }
            
            numOfVeggy = document.getElementById('numOfVeggy').value;
            
            veggyToppings = document.getElementsByName('veggyToppings[]');
            
            for(var pt = 0; pt < veggyToppings.length; pt++) {
                
                if( veggyToppings[pt].checked == true ) {
                    toppingCost += 1.75;
                    VtoppingArray.push( veggyToppings[pt].value );
                }
            }
            
            veggyCost = (veggyCost + toppingCost) * numOfVeggy;

            pizzaTotal += veggyCost;
            
            customer.pizza.veggy = {};
            customer.pizza.veggy.type = "Really Veggy";
            customer.pizza.veggy.quantity = numOfVeggy;
            customer.pizza.veggy.size = veggySize;
            customer.pizza.veggy.cost = veggyCost.toFixed(2);
            customer.pizza.veggy.toppings = VtoppingArray;
            
        }
        
    }
    
    
    var selectedSandwichTypes = document.querySelectorAll('input[name = "sandwichType[]"]:checked');
    
    customer.sandwich = {};
    

    for (let i = 0; i < selectedSandwichTypes.length; i++) {

        var thisSelectedSandwich = selectedSandwichTypes[i];

        if (thisSelectedSandwich.value == 'AllGarden') {
            
            
            var numOfAllGarden = document.getElementById('numOfAllGarden').value;
            
            var AllGardenCost = 7.50 * numOfAllGarden;
            
            sandwichTotal += AllGardenCost;
            
            customer.sandwich.allGarden = {};
            customer.sandwich.allGarden.quantity = numOfAllGarden;
            customer.sandwich.allGarden.type = "All Garden Vegetarian";
            customer.sandwich.allGarden.cost = AllGardenCost.toFixed(2);
        }

        if (thisSelectedSandwich.value == 'Beefy') {

            var numOfBeefy = document.getElementById('numOfBeefy').value;
            
            var beefyCost = 8.50 * numOfBeefy;

            sandwichTotal += beefyCost;
            
            customer.sandwich.beefy = {};
            customer.sandwich.beefy.quantity = numOfBeefy;
            customer.sandwich.beefy.type = "Big Beef on a Bun";
            customer.sandwich.beefy.cost = beefyCost.toFixed(2);
        }

        if (thisSelectedSandwich.value == 'Grill') {

            var numOfGrill = document.getElementById('numOfGrill').value;
            
            var grillCost = 9.50 * numOfGrill;

            sandwichTotal += grillCost;
            
            customer.sandwich.grill = {};
            customer.sandwich.grill.quantity = numOfGrill;
            customer.sandwich.grill.type = "Mixed Grill";
            customer.sandwich.grill.cost = grillCost.toFixed(2);
        }

        if (thisSelectedSandwich.value == 'Pork') {
      
            var numOfPork = document.getElementById('numOfPork').value;
            
            var porkCost = 9.50 * numOfPork;

            sandwichTotal += porkCost;
            
            customer.sandwich.pork = {};
            customer.sandwich.pork.quantity = numOfPork;
            customer.sandwich.pork.type = "Grilled Pork";
            customer.sandwich.pork.cost = porkCost.toFixed(2);
        }
    }
    
  
    var selectedDrinkTypes = document.querySelectorAll('input[name = "drinkType[]"]:checked');
    
    customer.drink = {};
    

    for (let i = 0; i < selectedDrinkTypes.length; i++) {
        var thisSelectedDrink = selectedDrinkTypes[i];


        if (thisSelectedDrink.value == 'Cola') {
        
            var numOfCola = document.getElementById('numOfCola').value;
            var colaSize = document.getElementById('colaSize').value;
            var colaCost;
            
            switch (colaSize) {
                case 'Small':
                colaCost = 1.25;
                break;
                case 'Medium':
                colaCost = 1.75;
                break;
                case 'Large':
                colaCost = 2.00;
                break;
            }
            
            colaCost = colaCost * numOfCola;

            drinkTotal += colaCost;
            
            customer.drink.cola = {};
            customer.drink.cola.quantity = numOfCola;
            customer.drink.cola.type = "Cola";
            customer.drink.cola.size = colaSize;
            customer.drink.cola.cost = colaCost.toFixed(2);
        }

        if (thisSelectedDrink.value == 'Orange') {

            var numOfOrange = document.getElementById('numOfOrange').value;
            var orangeSize = document.getElementById('orangeSize').value;
            var orangeCost;
            
            switch (orangeSize) {
                case 'Small':
                orangeCost = 1.25;
                break;
                case 'Medium':
                orangeCost = 1.75;
                break;
                case 'Large':
                orangeCost = 2.00;
                break;
            }
            
            orangeCost = orangeCost * numOfOrange;

            drinkTotal += orangeCost;
            
            customer.drink.orange = {};
            customer.drink.orange.quantity = numOfOrange;
            customer.drink.orange.type = "Orange";
            customer.drink.orange.size = orangeSize;
            customer.drink.orange.cost = orangeCost.toFixed(2);
        }

        if (thisSelectedDrink.value == 'Lemon') {

            var numOfLemon = document.getElementById('numOfLemon').value;
            var lemonSize = document.getElementById('lemonSize').value;
            var lemonCost;
            
            switch (lemonSize) {
                case 'Small':
                lemonCost = 1.25;
                break;
                case 'Medium':
                lemonCost = 1.75;
                break;
                case 'Large':
                lemonCost = 2.00;
                break;
            }
            
            lemonCost = lemonCost * numOfLemon;

            drinkTotal += lemonCost;
            
            customer.drink.lemon = {};
            customer.drink.lemon.quantity = numOfLemon;
            customer.drink.lemon.type = "Lemon";
            customer.drink.lemon.size = lemonSize;
            customer.drink.lemon.cost = lemonCost.toFixed(2);
        }

        if (thisSelectedDrink.value == 'RootBeer') {

            var numOfRoot = document.getElementById('numOfRoot').value;
            var rootSize = document.getElementById('rootSize').value;
            var rootCost;
            
            switch (rootSize) {
                case 'Small':
                rootCost = 1.25;
                break;
                case 'Medium':
                rootCost = 1.75;
                break;
                case 'Large':
                rootCost = 2.00;
                break;
            }
            
            rootCost = rootCost * numOfRoot;

            drinkTotal += rootCost;
            
            customer.drink.rootBeer = {};
            customer.drink.rootBeer.quantity = numOfRoot;
            customer.drink.rootBeer.type = "Root Beer";
            customer.drink.rootBeer.size = rootSize;
            customer.drink.rootBeer.cost = rootCost.toFixed(2);
        }
    }

    displayOrder();

}



function displayOrder() {
    
    var receipt = "";
    
    customer.fName = document.getElementById('firstName').value;
    customer.lName = document.getElementById('lastName').value;
    customer.address = document.getElementById('address').value;
    customer.phone = document.getElementById('phone').value;

    receipt += "<h4> Your Order: </h4>";
    
    receipt += "<button onclick =\"editOrder()\">Edit Order</button>";
    
    receipt += "<p><b> Full Name:</b> " + customer.fName + " " + customer.lName + "</p>";
    receipt += "<p><b> Address: </b> " + customer.address + "</p>";
    receipt += "<p><b> Phone Number: </b> " + customer.phone + "</p> <br>";
    receipt += "<h4>Your Order:</h4>";

    
    if ( customer.pizza != null || customer.pizza != undefined ) {
        
        receipt += "<h4>Pizza:</h4>";

        if ( customer.pizza.cheesy != null || customer.pizza.cheesy != undefined ){

            receipt += customer.pizza.cheesy.quantity + " " + customer.pizza.cheesy.size + " " + customer.pizza.cheesy.type + " Pizza";  

            for ( var pt = 0; pt < customer.pizza.cheesy.toppings.length; pt++) {
                receipt += ", " + customer.pizza.cheesy.toppings[pt] ;
            }

            receipt += " $" + customer.pizza.cheesy.cost + "<br>";

        }
        
        if ( customer.pizza.meaty != null || customer.pizza.meaty != undefined ){

            receipt += customer.pizza.meaty.quantity + " " + customer.pizza.meaty.size + " " + customer.pizza.meaty.type + " Pizza"; 
            
            for ( var pt = 0; pt < customer.pizza.meaty.toppings.length; pt++) {
                receipt += ", " + customer.pizza.meaty.toppings[pt] ;
            }

            receipt += " $" + customer.pizza.meaty.cost + "<br>";

        }
        
        if ( customer.pizza.veggy != null || customer.pizza.veggy != undefined ){

            receipt += customer.pizza.veggy.quantity + " " + customer.pizza.veggy.size + " " + customer.pizza.veggy.type + " Pizza";
            
            for ( var pt = 0; pt < customer.pizza.veggy.toppings.length; pt++) {
                receipt += ", " + customer.pizza.veggy.toppings[pt] ;
            }

            receipt += " $" + customer.pizza.veggy.cost + "<br>";

        } 
        
    }
    
    if (customer.sandwich != null || customer.sandwich != undefined ) {
        
        receipt += "<br> <h4>Sandwhich:</h4>";

        if ( customer.sandwich.allGarden != null || customer.sandwich.allGarden != undefined ){

            receipt += customer.sandwich.allGarden.quantity + " " + customer.sandwich.allGarden.type + " $" + customer.sandwich.allGarden.cost;

        }
        
        if ( customer.sandwich.beefy != null || customer.sandwich.beefy != undefined ){

            receipt += customer.sandwich.beefy.quantity + " " + customer.sandwich.beefy.type + " $" + customer.sandwich.beefy.cost + "<br>";
            
        }
        
        if ( customer.sandwich.grill != null || customer.sandwich.grill != undefined ){

            receipt += customer.sandwich.grill.quantity + " " + customer.sandwich.grill.type + " $" + customer.sandwich.grill.cost + "<br>";
            
        }
        
        if ( customer.sandwich.pork != null || customer.sandwich.pork != undefined ){

            receipt += customer.sandwich.pork.quantity + " " + customer.sandwich.pork.type + " $" + customer.sandwich.pork.cost + "<br>";
            
        }
        
    }
    
    if ( customer.drink != null || customer.drink != undefined) {

        receipt += "<br> <h4>Drink:</h4>";
        
        if ( customer.drink.cola != null || customer.drink.cola != undefined ){
            
            receipt += customer.drink.cola.quantity + " " + customer.drink.cola.size + " " + customer.drink.cola.type + " $" + customer.drink.cola.cost + "<br>";

        }
        
        if ( customer.drink.orange != null || customer.drink.orange != undefined ){

            receipt += customer.drink.orange.quantity + " " + customer.drink.orange.size + " " + customer.drink.orange.type + " $" + customer.drink.orange.cost + "<br>";

        }
        
        if ( customer.drink.lemon != null || customer.drink.lemon != undefined ){

            receipt += customer.drink.lemon.quantity + " " + customer.drink.lemon.size + " " + customer.drink.lemon.type + " $" + customer.drink.lemon.cost + "<br>";

        }
        
        if ( customer.drink.rootBeer != null || customer.drink.rootBeer != undefined ){

            receipt += customer.drink.rootBeer.quantity + " " + customer.drink.rootBeer.size + " " + customer.drink.rootBeer.type + " $" + customer.drink.rootBeer.cost + "<br>";
            
        }
        
    }
    
    var total = pizzaTotal + sandwichTotal + drinkTotal;

    receipt += "<br><p> Order Total: $" + total + "</p>"; 

    
    document.getElementById("displayOrder").innerHTML= receipt;

    receipt = "";

}

function editOrder(){

    orderButton.disabled = true;
    editButton.disabled = false;

    editButton.addEventListener("click", function() {
        calcOrder();
    });



}