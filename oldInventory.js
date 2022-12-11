function pullValue() {
    var node = document.createElement("P");
    var textNodeItems = Object.values(items);
    var textNode = document.createTextNode(textNodeItems);
    node.appendChild(textNode);
    document.getElementById("inventory").appendChild(node);
    console.log(this);

    if (inventory.innerHTML.indexOf("test") !== -1) {
        var a = document.createElement("div");
        a.id = "Div1";
        a.setAttribute("class", "Div1");
        var iconUrl = document.createElement("img");
        iconUrl.src = "bla.jpg";
        a.append(itemText);
        a.append(iconUrl);
        inventory.appendChild(a);
        a.onmouseover = function both() {
            reveal();
            bloop();
        };

        a.onmouseout = function both() {
            reveal();
            bloop();
        };
        function bloop() {
            a.classList.toggle("Div1-on");
        }

        node.style.display = "none";
    }

    if (inventory.innerHTML.indexOf("gun") !== -1) {
        var b = document.createElement("div");
        b.id = "Div2";
        var iconUrl2 = document.createElement("img");
        iconUrl2.src = "gun.png";
        b.append(itemText2);
        b.append(iconUrl2);
        inventory.appendChild(b);
        b.onmouseover = function () {
            reveal2();
        };
        b.onmouseout = function () {
            reveal2();
        };
        node.style.display = "none";
    }

    if (inventory.innerHTML.indexOf("uniform") !== -1) {
        var c = document.createElement("div");
        c.id = "Div3";
        c.setAttribute("id", "Div3");
        var iconUrl3 = document.createElement("img");
        iconUrl3.src = "uniform.png";
        inventory.appendChild(iconUrl3);
        c.append(itemText3);
        c.append(iconUrl3);
        inventory.appendChild(c);
        c.onmouseover = function () {
            reveal3();
        };
        c.onmouseout = function () {
            reveal3();
        };
        node.style.display = "none";
    }
}

function reveal() {
    var x = itemText;
    x.classList.toggle("itemtext-on");
}

function reveal2() {
    var z = itemText2;
    z.classList.toggle("itemtext-on");
}

function reveal3() {
    var y = itemText3;
    y.classList.toggle("itemtext-on");
}
