var guess = Math.floor(Math.random()*100) + 1;
function response()
{
    var n = document.getElementById('in').value
     if(n==guess)
         document.getElementById('out').innerHTML="correct number"
     else if( n > guess )
         document.getElementById('out').innerHTML="guess the smaller"
     else
         document.getElementById('out').innerHTML="guess the bigger"   
}

