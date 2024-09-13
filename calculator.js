let digits = document.getElementsByTagName("button");
var s;
Array.from(digits).forEach((element) => {
  element.addEventListener("click", () => {
    if (element.className == "c") {
      clearTimeout(s);
      document.getElementById("displaydigits").innerHTML = " ";

      document.getElementById("displaydigits").innerHTML = " ";
    } else if (element.className == "eq") {
      let properties = document.getElementById("displaydigits").innerHTML;

      try {
        if (properties.includes("^")) {
          properties = properties.replace("^", "");
          let expression = Math.sqrt(properties);
          document.getElementById("displaydigits").innerHTML = expression;
        } else {
          document.getElementById("displaydigits").innerHTML = eval(properties);
        }
      } catch (e) {
        document.getElementById("displaydigits").innerHTML = "ERROR";
      }

      s = setTimeout(() => {
        document.getElementById("displaydigits").innerHTML = " ";
      }, 9000);
    } else if (element.className == "percent") {
      let number = document.getElementById("displaydigits").innerHTML;
      document.getElementById("displaydigits").innerHTML = number / 100;
    }

    document
      .getElementById("displaydigits")
      .append(element.innerHTML.replace("%", " ").replace("C", " "));
  });
});
