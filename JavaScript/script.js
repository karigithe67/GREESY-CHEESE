
const pepperoni = {name:"Pepperoni", price: 150};
const onions = {name:"Onions", price: 50};
const sausage = {name:"Sausage", price: 100};
const bellPepper = {name: "Bell Pepper", price: 90};
const bbqSauce = {name:"Barbecue Sauce", price: 100};
const chicken = {name:"Chicken", price:150};
const cheddarCheese = {name:"Cheddar Cheese", price:50};
const mozzarellaCheese = {name:"Mozzarella Cheese", price:50};
const mushrooms ={name:"Mushrooms", price:100};
const toppingsList = {name:"Toppings",items:[bbqSauce,bellPepper,cheddarCheese, mozzarellaCheese, chicken, mushrooms, onions, pepperoni, sausage]}


const wedges = {name:"Wedges", price: 350};
const wings ={name:"Chicken Wings", price:350};
const mozzarellaSticks = {name:"Mozzarella Sticks", price:400};
const sidesList = {name:"Sides", items:[mozzarellaSticks, wedges, wings]}


const large = {name: "Large Size", price: 950};
const medium = {name:"Medium Size", price: 600};
const small = {name: "Small Size", price: 400};
const sizeList = {name:"Sizes", items:[large, medium, small]};


const thinCrust = {name:"Thin Crust", price:70};
const thickCrust = {name:"Thick Crust", price: 150};
const deepCrust = {name:"Deep Crust", price:100};
const cheeseCrust = {name:"Cheese Crust", price:150};
const stuffedCrust = {name: "Stuffed Crust", price: 250};
const crustsList = {name:"Crusts", items:[thinCrust,thickCrust,deepCrust,cheeseCrust,stuffedCrust]};


$(document).ready(function(){
  var total = 0
  $(".delivery").hide();
  $("#checkouts").hide();


    $("#size").submit(function(event){
      event.preventDefault()
      var size = parseInt($("input[name='size']:checked").val());
      var sizeName = sizeList.items[size].name
      $("#checkouts").append("<li>" + sizeList.items[size].name+" "+sizeList.items[size].price +"</li>")
      total += (sizeList.items[size].price)
      alert("The total so far is: " + total)
    })


  $("#toppings").submit(function(event){
    event.preventDefault()

       $('input[name=toppings]:checked').each(function(){
       var toppings = parseInt($(this).val())
       $("#checkouts").append("<li>" + toppingsList.items[toppings].name + " " + toppingsList.items[toppings].price+ "</li>")
       total += (toppingsList.items[toppings].price)

      });
      alert("Your current total is: " + total)
  });


  $("#number").submit(function(event){
    event.preventDefault()
    var quantity = $("#quantity").val()
    $("#checkouts").append("<li>" +"Quantity: "+ quantity +"</li>")
    total *= quantity
    alert("Your current total is " + total)
  });


  $("#crust").submit(function(event){
    event.preventDefault()
    var crust = parseInt($("input[name='crust']:checked").val());
    $("#checkouts").append("<li>" + crustsList.items[crust].name + " " + crustsList.items[crust].price + "</li>")
    total += (crustsList.items[crust].price)
    alert("The total so far is: " + total)
    });

  $("#delivery").click(function(event){
    event.preventDefault()
    var delivery = 100
    $(".delivery").show()
    $("#checkouts").append("<li>" +"Delivery : 100" +"</li>")
    total += delivery
    alert("The total so far is:" + total)
    });
  $(".delivery").submit(function(event){
    event.preventDefault()
    alert("We will deliver your pizza to " + $("#street").val() + " "+ $("#building").val() + " "+ "House Number: " + $("#houseNumber").val() )
    $(".delivery").hide();
  });

  $("#pickup").click(function(event){
    event.preventDefault()
    $("#checkouts").append("<li>" + "Pick up: 0" +"</li>")
    var pickup = 0
    total += pickup
    });

  $("#check-out-button").click(function(){
    $("#checkouts").append("<li>"+ "Your total is: "+ total + "</li>")
    $("#checkouts").show();

  })

});
