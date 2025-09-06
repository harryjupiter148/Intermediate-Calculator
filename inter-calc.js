const show = document.getElementById("show");
const show2 = document.getElementById("show2");
const num = document.getElementById("num");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num10 = document.getElementById("num10");
const num11 = document.getElementById("num11");
const num12 = document.getElementById("num12");
const num13 = document.getElementById("num13");
const num14 = document.getElementById("num14");
const num15 = document.getElementById("num15");
const num16 = document.getElementById("num16");
const num17 = document.getElementById("num17");
const num18 = document.getElementById("num18");
const num19 = document.getElementById("num19");

function n() {
  show.value = "";
  show2.value = "";
}

num.addEventListener("click", n);

function n1() {
  if (show2.value !== "") {
    show.value = "";
    show2.value = "";
  } else {
    show.value = show.value.slice(0, -1);
  }
}

num1.addEventListener("click", n1);

function n2() {
  if (
    (show.value.length > 0 && show.value.slice(-1) === "\u00F7") ||
    show.value.slice(-1) === "-" ||
    show.value.slice(-1) === "+" ||
    show.value.slice(-1) === "\u00D7" ||
    show.value.slice(-1) === "%"
  ) {
    return;
  }
  if (show.value === "" && show2.value === "") {
    return;
  } else if (show2.value !== "") {
    show.value = show2.value + "%";
    show2.value = "";
  } else {
    show.value += "%";
  }
}

num2.addEventListener("click", n2);

function n3() {
  if (show2.value !== "") {
    show.value = show2.value + "\u00F7";
    show2.value = "";
  } else if (
    (show.value.length > 0 && show.value.slice(-1) === "\u00F7") ||
    show.value.slice(-1) === "-" ||
    show.value.slice(-1) === "+" ||
    show.value.slice(-1) === "\u00D7"
  ) {
    return;
  } else if (show.value === "" && show2.value === "") {
    return;
  } else {
    show.value += "\u00F7";
  }
}

num3.addEventListener("click", n3);

function n4() {
  if (show2.value !== "") {
    show.value = "7";
    show2.value = "";
  } else if (show.value.length > 0 && show.value.slice(-1) === "%") {
    return;
  } else {
    show.value += "7";
  }
}

num4.addEventListener("click", n4);

function n5() {
  if (show2.value !== "") {
    show.value = "8";
    show2.value = "";
  } else if (show.value.length > 0 && show.value.slice(-1) === "%") {
    return;
  } else {
    show.value += "8";
  }
}

num5.addEventListener("click", n5);

function n6() {
  if (show2.value !== "") {
    show.value = "9";
    show2.value = "";
  } else if (show.value.length > 0 && show.value.slice(-1) === "%") {
    return;
  } else {
    show.value += "9";
  }
}

num6.addEventListener("click", n6);

function n7() {
  if (show2.value !== "") {
    show.value = show2.value + "\u00D7";
    show2.value = "";
  } else if (
    (show.value.length > 0 && show.value.slice(-1) === "\u00F7") ||
    show.value.slice(-1) === "-" ||
    show.value.slice(-1) === "+" ||
    show.value.slice(-1) === "\u00D7"
  ) {
    return;
  } else if (show.value === "" && show2.value === "") {
    return;
  } else {
    show.value += "\u00D7";
  }
}

num7.addEventListener("click", n7);

function n8() {
  if (show2.value !== "") {
    show.value = "4";
    show2.value = "";
  } else if (show.value.length > 0 && show.value.slice(-1) === "%") {
    return;
  } else {
    show.value += "4";
  }
}

num8.addEventListener("click", n8);

function n9() {
  if (show2.value !== "") {
    show.value = "5";
    show2.value = "";
  } else if (show.value.length > 0 && show.value.slice(-1) === "%") {
    return;
  } else {
    show.value += "5";
  }
}

num9.addEventListener("click", n9);

function n10() {
  if (show.value === "" && show2.value === "") {
    show.value = "6";
  } else if (show2.value !== "") {
    show.value = "6";
    show2.value = "";
  } else if (show.value.length > 0 && show.value.slice(-1) === "%") {
    return;
  } else {
    show.value += "6";
  }
}

num10.addEventListener("click", n10);

function n11() {
  if (show2.value !== "") {
    show.value = show2.value + "-";
    show2.value = "";
  } else if (
    (show.value.length > 0 && show.value.slice(-2) === "\u00F7-") ||
    show.value.slice(-2) === "--" ||
    show.value.slice(-2) === "+-" ||
    show.value.slice(-2) === "\u00D7-"
  ) {
    return;
  } else {
    show.value += "-";
  }
}

num11.addEventListener("click", n11);

function n12() {
  if (show2.value !== "") {
    show.value = "1";
    show2.value = "";
  } else if (show.value.length > 0 && show.value.slice(-1) === "%") {
    return;
  } else {
    show.value += "1";
  }
}

num12.addEventListener("click", n12);

function n13() {
  if (show2.value !== "") {
    show.value = "2";
    show2.value = "";
  } else if (show.value.length > 0 && show.value.slice(-1) === "%") {
    return;
  } else {
    show.value += "2";
  }
}

num13.addEventListener("click", n13);

function n14() {
  if (show2.value !== "") {
    show.value = "3";
    show2.value = "";
  } else if (show.value.length > 0 && show.value.slice(-1) === "%") {
    return;
  } else {
    show.value += "3";
  }
}

num14.addEventListener("click", n14);

function n15() {
  if (show2.value !== "") {
    show.value = show2.value + "+";
    show2.value = "";
  } else if (
    (show.value.length > 0 && show.value.slice(-2) === "\u00F7+") ||
    show.value.slice(-2) === "-+" ||
    show.value.slice(-2) === "++" ||
    show.value.slice(-2) === "\u00D7+"
  ) {
    return;
  } else {
    show.value += "+";
  }
}

num15.addEventListener("click", n15);

function n16() {
  if (show.value === "" && show2.value === "") {
    show.value = "0";
  } else if (show2.value !== "") {
    show.value = "0";
    show2.value = "";
  } else if (
    (show.value.length > 0 && show.value.slice(-1) === "+") ||
    show.value.slice(-1) === "-" ||
    show.value.slice(-1) === "\u00D7" ||
    show.value.slice(-1) === "\u00F7"
  ) {
    show.value += "0";
  } else if (
    (show.value.length > 0 && show.value.slice(-2) === "+0") ||
    show.value.slice(-2) === "-0" ||
    show.value.slice(-2) === "\u00D70" ||
    show.value.slice(-2) === "\u00F70"
  ) {
    return;
  } else if (show.value.length > 0 && show.value.slice(-1) === "%") {
    return;
  } else if (show.value === "0") {
    return;
  } else {
    show.value += "00";
  }
}

num16.addEventListener("click", n16);

function n17() {
  if (show2.value !== "") {
    show.value = "0";
    show2.value = "";
  } else if (
    (show.value.length > 0 && show.value.slice(-2) === "+0") ||
    show.value.slice(-2) === "-0" ||
    show.value.slice(-2) === "\u00D70" ||
    show.value.slice(-2) === "\u00F70"
  ) {
    return;
  } else if (show.value.length > 0 && show.value.slice(-1) === "%") {
    return;
  } else if (show.value === "0") {
    return;
  } else {
    show.value += "0";
  }
}

num17.addEventListener("click", n17);

function n18() {
  if (
    (show.value.length > 0 && show.value.slice(-1) === "+") ||
    show.value.slice(-1) === "-" ||
    show.value.slice(-1) === "\u00D7" ||
    show.value.slice(-1) === "\u00F7"
  ) {
    show.value += "0.";
  } else if (show.value.length > 0 && show.value.slice(-1) === "%") {
    return;
  }
  if (show.value.length > 0 && show.value.slice(-1) === ".") {
    return;
  } else if (show.value === "" && show2.value === "") {
    show.value = "0.";
  } else if (show2.value !== "") {
    show.value = "0.";
    show2.value = "";
  } else if (show.value === ".") {
    return;
  } else {
    show.value += ".";
  }
}

num18.addEventListener("click", n18);

function equalto() {
  try {
    let expr = show.value;
    expr = expr.replace(/\u00D7/g, "*");
    expr = expr.replace(/\u00F7/g, "/");
    expr = expr.replace(/(\d)\(/g, "$1*(");
    expr = expr.replace(/\)(\d)/g, ")*$1");
    expr = expr.replace(/\)\(/g, ")*(");
    expr = expr.replace(/(\d+(\.\d+)?)%/g, "($1/100)");

    if (/^[0-9+\-*/.()]/.test(expr)) {
      show2.value = new Function("return " + expr)();
    } else {
      show2.value = "ERROR";
      console.log(show);
    }
  } catch (error) {
    show2.value = "ERROR";
    console.log(show);
  }
}

num19.addEventListener("click", equalto);

show.addEventListener("keydown", function (e) {
  if (
    e.key === "Backspace" ||
    e.key === "Delete" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowRight" ||
    e.key === "Tab"
  ) {
    return;
  }

  if (e.key === "Enter") {
    equalto();
  }

  if (e.key === "=") {
    equalto();
    e.preventDefault();
  }

  if (
    /^[a-zA-Z]$/.test(e.key) ||
    e.key === " " ||
    e.key === "!" ||
    e.key === "@" ||
    e.key === "#" ||
    e.key === "^" ||
    e.key === "&" ||
    e.key === "_" ||
    e.key === "`" ||
    e.key === "~" ||
    e.key === "{" ||
    e.key === "[" ||
    e.key === "}" ||
    e.key === "]" ||
    e.key === ":" ||
    e.key === ";" ||
    e.key === "'" ||
    e.key === "|" ||
    e.key === "<" ||
    e.key === "," ||
    e.key === ">" ||
    e.key === "?"
  ) {
    e.preventDefault();
  }

  if (show.value === "" && e.key === "0") {
    show.value = "";
  } else if (show2.value !== "" && e.key === "0") {
    show.value = "";
    show2.value = "";
  } else if (
    show.value.length > 0 &&
    show.value.slice(-2) === "+0" &&
    show.value.slice(-2) === "-0" &&
    show.value.slice(-2) === "\u00D70" &&
    show.value.slice(-2) === "\u00F70" &&
    e.key === "0"
  ) {
    e.preventDefault();
  } else if (
    show.value.length > 0 &&
    show.value.slice(-1) === "%" &&
    e.key === "0"
  ) {
    e.preventDefault();
  } else if (show.value == "0" && e.key === "0") {
    e.preventDefault();
  }

  if (show2.value !== "" && e.key === "1") {
    show.value = "";
    show2.value = "";
  } else if (
    show.value.length > 0 &&
    show.value.slice(-1) === "%" &&
    e.key === "1"
  ) {
    e.preventDefault();
  }

  if (show2.value !== "" && e.key === "2") {
    show.value = "";
    show2.value = "";
  } else if (
    show.value.length > 0 &&
    show.value.slice(-1) === "%" &&
    e.key === "2"
  ) {
    e.preventDefault();
  }

  if (show2.value !== "" && e.key === "3") {
    show.value = "";
    show2.value = "";
  } else if (
    show.value.length > 0 &&
    show.value.slice(-1) === "%" &&
    e.key === "3"
  ) {
    e.preventDefault();
  }

  if (show2.value !== "" && e.key === "4") {
    show.value = "";
    show2.value = "";
  } else if (
    show.value.length > 0 &&
    show.value.slice(-1) === "%" &&
    e.key === "4"
  ) {
    e.preventDefault();
  }

  if (show2.value !== "" && e.key === "5") {
    show.value = "";
    show2.value = "";
  } else if (
    show.value.length > 0 &&
    show.value.slice(-1) === "%" &&
    e.key === "5"
  ) {
    e.preventDefault();
  }

  if (show2.value !== "" && e.key === "6") {
    show.value = "";
    show2.value = "";
  } else if (
    show.value.length > 0 &&
    show.value.slice(-1) === "%" &&
    e.key === "6"
  ) {
    e.preventDefault();
  }

  if (show2.value !== "" && e.key === "7") {
    show.value = "";
    show2.value = "";
  } else if (
    show.value.length > 0 &&
    show.value.slice(-1) === "%" &&
    e.key === "7"
  ) {
    e.preventDefault();
  }

  if (show2.value !== "" && e.key === "8") {
    show.value = "";
    show2.value = "";
  } else if (
    show.value.length > 0 &&
    show.value.slice(-1) === "%" &&
    e.key === "8"
  ) {
    e.preventDefault();
  }

  if (show2.value !== "" && e.key === "9") {
    show.value = "";
    show2.value = "";
  } else if (
    show.value.length > 0 &&
    show.value.slice(-1) === "%" &&
    e.key === "9"
  ) {
    e.preventDefault();
  }

  if (show2.value !== "" && e.key === "%") {
    show.value = show2.value + "";
    show2.value = "";
  } else if (show.value === "" && e.key === "%") {
    e.preventDefault();
  } else if (
    (show.value.length > 0 && show.value.slice(-1) === "%" && e.key === "%") ||
    (show.value.slice(-1) === "+" && e.key === "%") ||
    (show.value.slice(-1) === "-" && e.key === "%") ||
    (show.value.slice(-1) === "\u00D7" && e.key === "%") ||
    (show.value.slice(-1) === "\u00F7" && e.key === "%")
  ) {
    e.preventDefault();
  }

  if (show.value === "" && e.key === "/") {
    e.preventDefault();
  } else if (show2.value !== "" && e.key === "/") {
    e.preventDefault();
    show.value = show2.value + "\u00F7";
    show2.value = "";
  } else if (
    (show.value.length > 0 && show.value.slice(-1) === "+" && e.key === "/") ||
    (show.value.slice(-1) === "-" && e.key === "/") ||
    (show.value.slice(-1) === "\u00D7" && e.key === "/") ||
    (show.value.slice(-1) === "\u00F7" && e.key === "/")
  ) {
    e.preventDefault();
  } else if (show.value !== "" && e.key === "/") {
    e.preventDefault();
    show.value += "\u00F7";
  }

  if (show.value === "" && e.key === "*") {
    e.preventDefault();
  } else if (show2.value !== "" && e.key === "*") {
    e.preventDefault();
    show.value = show2.value + "\u00D7";
    show2.value = "";
  } else if (
    (show.value.length > 0 && show.value.slice(-1) === "+" && e.key === "*") ||
    (show.value.slice(-1) === "-" && e.key === "*") ||
    (show.value.slice(-1) === "\u00D7" && e.key === "*") ||
    (show.value.slice(-1) === "\u00F7" && e.key === "*")
  ) {
    e.preventDefault();
  } else if (show.value !== "" && e.key === "*") {
    e.preventDefault();
    show.value += "\u00D7";
  }

  if (show2.value !== "" && e.key === "-") {
    show.value = show2.value + "";
    show2.value = "";
  } else if (
    (show.value.length > 0 && show.value.slice(-2) === "+-" && e.key === "-") ||
    (show.value.slice(-1) === "-" && e.key === "-") ||
    (show.value.slice(-2) === "\u00D7-" && e.key === "-") ||
    (show.value.slice(-1) === "\u00F7-" && e.key === "-")
  ) {
    e.preventDefault();
  }

  if (show2.value !== "" && e.key === "+") {
    show.value = show2.value + "";
    show2.value = "";
  } else if (
    (show.value.length > 0 && show.value.slice(-1) === "+" && e.key === "+") ||
    (show.value.slice(-2) === "-+" && e.key === "+") ||
    (show.value.slice(-2) === "\u00D7+" && e.key === "+") ||
    (show.value.slice(-2) === "\u00F7+" && e.key === "+")
  ) {
    e.preventDefault();
  }

  if (show.value === "" && e.key === ".") {
    show.value = "0";
  } else if (show2.value !== "" && e.key === ".") {
    show.value = "0";
    show2.value = "";
  } else if (
    (show.value.length > 0 && show.value.slice(-1) === "+" && e.key === ".") ||
    (show.value.slice(-1) === "-" && e.key === ".") ||
    (show.value.slice(-1) === "\u00D7" && e.key === ".") ||
    (show.value.slice(-1) === "\u00F7" && e.key === ".")
  ) {
    show.value += "0";
  } else if (
    show.value.length > 0 &&
    show.value.slice(-1) === "." &&
    e.key === "."
  ) {
    e.preventDefault();
  } else if (
    show.value.length > 0 &&
    show.value.slice(-1) === "%" &&
    e.key === "."
  ) {
    e.preventDefault();
  }
});
