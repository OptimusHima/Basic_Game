// challenge 1 :- Your age in days

function ageInDays() {
        var birthYear = prompt("What year were you born?");
        var ageInDaysMult = (2020 - birthYear) * 365;
        var h1 = document.createElement("h3");
        var textAnswer = document.createTextNode("You are " + ageInDaysMult + " days old");
        h1.setAttribute("id", "ageInDays");
        h1.appendChild(textAnswer);
        document.getElementById("flex-box-result").appendChild(h1);
      
      }
      
      function reset(){
        document.getElementById("ageInDays").remove();
      }


// challenge 2

function generatecat(){
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small" ;
  div.appendChild(image);
}