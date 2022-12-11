///GAME ITEMS////

const items2 = [
    {
        _name: "test",
        _desciption: "A test Item!",
        imgURL: "bla.jpg",
        _weight: 10,
        _text: "A test Item",
    },

    {
        _name: "gun",
        _desciption: "A gun!",
        imgURL: "gun.png",
        _weight: 10,
        _text: "A gun!",
    },

    {
        _name: "uniform",
        _desciption: "A uniform!",
        imgURL: "uniform.png",
        _weight: 10,
        _text: "A gun!",
    },
];

///ERROR itemimage is not defined at 28

// && Z !== playeritems.length - 1

function pullItem() {
    if (playeritems.length > Z) {
        const node = document.createElement("img");
        const text = document.createElement("div");
        text.classList.add("tooltip");
        // text.class = "tooltip tooltiptext";
        node.id = playeritems[Z]._name;
        node.classList.add("node");
        // node.class =
        // node.append(itemText);

        // node.setAttribute ('class', 'node');
        text.style.height = "20vh";
        text.style.width = "20vw";

        node.style.height = "20vh";
        node.style.width = "20vw";

        document.getElementById("inventory").appendChild(node);
        console.log(this);
        // document.getElementById(node).src = a.imgURL;
        var z = playeritems[Z];
        node.src = z.imgURL;
        node.append(text);
        // node.style = ("node");

        //   node.onmouseover = function() {mouseOver()};
        //   node.onmouseout = function() {onmouseOut()};
        Z++;
        // node.src = playeritems[a].imgURL;

        function mouseOver() {
            // playeritems[Z]._name.style = "block";
            text.style.visibility = "visible";
        }

        function onmouseOut() {
            text.style.visibility = "hidden";
            //     node.style = "hidden";
        }
    }
}
// let itemimage = document.getElementById("itemimage");

function pushItem() {
    playeritems.push(items2[0]);
    console.log("item1!");
    pullItem();
}

function pushItem2() {
    playeritems.push(items2[1]);
    console.log("item2!");
    pullItem();
}

function pushItem3() {
    playeritems.push(items2[2]);
    console.log("item3!");
    pullItem();
}
