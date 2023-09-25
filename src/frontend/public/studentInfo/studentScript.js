window.onload = function() {
    document.getElementById("b1").addEventListener("click", function() {
        // Different ways of getting value
        // var name = document.getElementById("name").value;
        // var name = document.forms["student"]["full-name"].value;
        // var name = document.forms.student.full-name.value; // Error
        // var name = document.forms.student["full-name"].value;
        var name = document.forms["student"][0].value;
        var elem = document.createElement("h3");
        var text = document.createTextNode("Your Name is: " + name);
        elem.appendChild(text);
        document.body.appendChild(elem);
    });

    document.getElementById("b2").onclick = function() {
        var age = document.getElementById("age").value;
        var elem = document.createElement("h3");
        var text = document.createTextNode("Your Age is: " + age);
        elem.appendChild(text);
        document.body.appendChild(elem);

    };

    document.getElementById("b3").onclick = function() {
        var typeArray = document.forms["student"]["type"];
        var elem = document.createElement("h3");
        if (typeArray[0].checked) {
            var text = document.createTextNode("Your Are a Full-Time Student");
        };
        if (typeArray[1].checked) {
            text = document.createTextNode("Your Are a Part-Time Student");
        };
        elem.appendChild(text);
        document.body.appendChild(elem);

    };

    document.getElementById("b4").addEventListener("click", function() {
        var studID = document.getElementById("studID");
        var elem = document.createElement("h3");
        var text = document.createTextNode("Your Student ID is: " + studID);
        elem.appendChild(text);
        document.body.appendChild(elem);
    });
};