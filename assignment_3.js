function disp(){
    const names=["Anakin","Obi-Wan","Luke","Leia"];
    let text = "<table>";
    for (let i = 0; i <4; i++) {
        text+="<tr>";
        text += "<td>" + (i+1) + "</td>";
        text += "<td>" + names[i] + "</td>";
        text+="</tr>";
        text+="<br>";
    }
    text += "</table>";
    document.getElementById("demo").innerHTML = text;
}