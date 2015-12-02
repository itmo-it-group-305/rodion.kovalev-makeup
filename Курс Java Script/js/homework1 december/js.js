/**
 * Created by rod on 02.12.15.
 */
function receive() {
    var parent2 = document.getElementById('chat');

    var child2 = document.createElement('img');
    child2.setAttribute("class", "avatar");
    child2.setAttribute("src", "img/386.jpg");

    var child3 = document.createElement('p');
    var childText = document.createTextNode('Поедатель вселенной');
    child3.setAttribute("class", "author");

    var child4 = document.createElement('p');
    child4.setAttribute("class", "message");
    child4.setAttribute("id", "message-chat");

    parent2.appendChild(child2);
    child3.appendChild(childText);
    parent2.appendChild(child3);
    parent2.appendChild(child4);

    document.getElementById("message-chat").innerHTML =
        document.getElementById("enter").value;
}
