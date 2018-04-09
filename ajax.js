// function request (callback){
//     var xmlhttp = new XMLHttpRequest();
//     console.log(xmlhttp);
//     xmlhttp.onreadystatechange = function() {
//         if (xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.status == 0)) { 
//            callback(xmlhttp.response);   
//         }
//     };
//     xmlhttp.open("GET", "ex1.php", true);
//     xmlhttp.send(null);
// }

// function reponse(data){
//     document.getElementById('listAjax').innerHTML = data;
// }

// window.addEventListener('load', function() {
// request(reponse);

// });


function exploration(source){
    source = encodeURIComponent(source);
    console.log(source);
    var xhr = new XMLHttpRequest(); 
    method : "GET";
    xhr.open("GET", "ex1.php?url=\"" + source + "\"", true);
    xhr.send(null);

    // var fileSystem=new ActiveXObject("Scripting.FileSystemObject");
    // var monfichier=fileSystem.OpenTextFile("ex1.php", 2 , false);
    // monfichier.WriteLine("$url=\""+source+"\"");
    
    fetch("ex1.php").then( // on attend d'avoir complètement chargé le fichier, PUIS (then)on effectue la fonction 
    function (response){
        console.log(response);
        return response.json();
        }
    ).then(function(response){
        for (element in response){
            for (value in response[element]){ 
                    if (element == 'listFiles'){ //si c'est un fichier
                        console.log(element);
                        document.getElementById('listAjax').innerHTML += response[element][value] +'<br>';
                    } 
                    else if (element == 'listDir') { // si c'est un dossier
                        console.log(element);
                        document.getElementById('listAjax').innerHTML += '<a href="./' + response[element][value] + ' "> '+ response[element][value] + '</a><br>';
                    }           
            } 
        }
    })
}

exploration('*');

document.querySelector('body').addEventListener('click', function(event){
        event.preventDefault();
        console.log(event.target.innerText);
        
        exploration(event.target.innerText);
});
    


/*Fonction ouvrir fichier dans div */

