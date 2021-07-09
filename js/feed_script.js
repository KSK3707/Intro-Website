// JavaScript source code

function addContent() {
    var new_line = localStorage.getItem("review");
    var name = document.getElementById("inputName").value;
    var skill = document.getElementById("inputSkill").value;
    var rating = document.getElementById("inputRating").value;
    if (new_line == null)
        new_line = "<tr> <td>" + name + "</th> <td>" + skill + "</td> <td>" + rating + "</td></tr>";
    else
        new_line = new_line + "<tr> <td>" + name + "</th> <td>" + skill + "</td> <td>" + rating + "</td></tr>";
    localStorage.setItem("review", new_line);
    localStorage.info = "<tr> <th> Name </th> <th> Skill </th> <th> Rating </th></tr>";
    localStorage.info = localStorage.info + new_line;
    document.getElementById("feed_table").innerHTML = localStorage.info;
    document.getElementById("form").innerHTML = "<p>Thanks for your feedback!</p>";
}