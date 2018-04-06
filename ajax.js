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

window.onbeforeunload = function() { 'some function that does not reload the page' 

fetch('ex1.php').then( // on attend d'avoir complètement chargé le fichier, PUIS (then)on effectue la fonction
    function (response){
        return response.json();
    }
).then(function(response){
    for (element in response){
        for (value in response[element]){
            console.log (response[element][value]);
            document.getElementById('listAjax').innerHTML += '<a href="./' + response[element][value] + ' "> '+ response[element][value] + '</a><br>';
        }
    } 
})};