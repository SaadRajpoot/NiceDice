
function main()
{
  document.querySelector(".img1").setAttribute("src",getImagePath());
  document.querySelector(".img2").setAttribute("src",getImagePath());


    var p1= document.querySelector(".img1").getAttribute("src");
    var p2= document.querySelector(".img2").getAttribute("src");
 getResult(p1, p2);

  }
function generateRandom()
{
  return Math.floor((Math.random()*6)+1);
}

function getImagePath()
{
  var imageName;

  imageName="dice"+generateRandom()+".png";
  return "images/"+imageName;
}

function getResult(p1, p2)
{
  if(p1>p2)
  {
    document.querySelector("h1").textContent = "👑 Player 1 Wins. ";
  }
  else if(p2>p1)
  {
      document.querySelector("h1").textContent = "Player 2 Wins. 👑";
  }
  else
  {
    document.querySelector("h1").textContent = "Draw";

  }
}
