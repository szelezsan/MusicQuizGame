let q = ["1.  What is the capital of Israel ?", 
"2. Who is the Prime Minister of India?", 
"3. What is the capital of Japan?", 
"4. Who is the president of the USA ?",
"5. When is International Mother Language Day celebrated?",
"6. What is the answer of this equation: 6 + 2 x 7 ?",
"7. Which one is the smallest ocean in the world ?",
"8. In which ocean 'Bermuda Triangle' region is located ?",
"9. Which country is also known as the 'Land of the rising sun' ?",
"10. Which continent has the highest number of countries ?"];

let score = 0;
let k = 0;
let len = q.length;

function quiz() {
    let var1 = document.getElementById("questions");
    var1.innerHTML = q[0];
    document.getElementById("ans").style.display = "block";
    document.getElementById("input").style.display = "block";
    document.getElementById("btn2").style.display = "block";
    document.getElementById("score").style.display = "block";

    //Making the button disappear//
    document.getElementById("btn").style.display = "none";
}

function evaluation() {
    let var2 = document.getElementById("questions");
    let var3 = document.getElementById("input");

    

    if (var2.innerHTML === "1.  What is the capital of Israel ?" && var3.value ==="Tel Aviv" || var3.value === "tel aviv")
    {
        alert("Correct Answer.");
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    } 

    else if (var2.innerHTML === "2. Who is the Prime Minister of India?" && var3.value ==="Narendra Modi" || var3.value ==="narendra modi" || var3.value ==="modi")
    {
        alert("Correct Answer.");
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    else if (var2.innerHTML === "3. What is the capital of Japan?" && var3.value ==="Tokyo" || var3.value ==="tokyo")
    {
        alert("Correct Answer.");
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    else if (var2.innerHTML === "4. Who is the president of the USA ?" && var3.value ==="Joe Biden" || var3.value ==="joe biden" || var3.value ==="Joseph Biden" || var3.value ==="joseph biden" || var3.value ==="biden")
    {
        alert("Correct Answer.");
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
        
    }

    else if (var2.innerHTML === "5. When is International Mother Language Day celebrated?" && var3.value ==="21 February" || var3.value ==="21 february" || var3.value ==="21 feb")
    {
        alert("Correct Answer.");
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    else if (var2.innerHTML === "6. What is the answer of this equation: 6 + 2 x 7 ?" && var3.value ==="20")
    {
        alert("Correct Answer.");
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    else if (var2.innerHTML === "7. Which one is the smallest ocean in the world ?" && var3.value ==="Arctic" || var3.value ==="arctic")
    {
        alert("Correct Answer.");
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    else if (var2.innerHTML === "8. In which ocean 'Bermuda Triangle' region is located ?" && var3.value ==="Atlantic" || var3.value ==="atlantic")
    {
        alert("Correct Answer.");
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    else if (var2.innerHTML === "9. Which country is also known as the 'Land of the rising sun' ?" && var3.value ==="Japan" || var3.value ==="japan")
    {
        alert("Correct Answer.");
        k++;
        var2.innerHTML = q[k];
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Score: " + score;
    }

    else if (var2.innerHTML === "10. Which continent has the highest number of countries ?" && var3.value ==="Africa" || var3.value ==="africa")
    {
        alert("Correct Answer.");
        document.getElementById("ans").style.display = "none";
        document.getElementById("input").style.display = "none";
        document.getElementById("btn2").style.display = "none";
        var2.innerHTML = "Finished."
        var3.value = null;
        score++;
        document.getElementById("score").innerHTML = "Your Final Score is: " + score + " " + "Out of" + " " + len;
    }

    else {
        alert("Wrong Answer !!")
        document.getElementById("score").innerHTML = "Score: " + score;
        var3.value = null;
        if(k < len-1){
            k++;
            var2.innerHTML = q[k];
        }else {
            var2.innerHTML = "Finished."
            document.getElementById("ans").style.display = "none";
            document.getElementById("input").style.display = "none";
            document.getElementById("btn2").style.display = "none";
            document.getElementById("score").innerHTML = "Your Final Score is: " + score + " " + "Out of" + " " + len;
        }
      
        
    }
}