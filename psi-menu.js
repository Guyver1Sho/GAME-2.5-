function first1() {
    if (playerpsiPowers.length > 0) {
        psipowerimage.src = playerpsiPowers[0]._image;
        +"\n" + "\n";
        psipowertext.innerText =
            playerpsiPowers[0]._text +
            "\n" +
            "\n" +
            "Psi Cost: " +
            playerpsiPowers[0]._psiCost +
            "\n" +
            "\n" +
            "Damage: " +
            playerpsiPowers[0]._damage +
            "\n" +
            "\n" +
            "Effect: " +
            playerpsiPowers[0]._special;
    }
}

next.addEventListener("click", nextPower1);

back.addEventListener("click", previousPower);

function nextPower() {
    if (playerpsiPowers.length > 0) {
        console.log("working 2");
        psipowerimage.src = playerpsiPowers[1]._image;
        +"\n" + "\n";
        psipowertext.innerText =
            playerpsiPowers[1]._text +
            "\n" +
            "\n" +
            "Psi Cost: " +
            playerpsiPowers[1]._psiCost +
            "\n" +
            "\n" +
            "Damage: " +
            playerpsiPowers[1]._damage +
            "\n" +
            "\n" +
            "Effect: " +
            playerpsiPowers[1]._special;
    }
}

function nextPower1() {
    if (
        playerpsiPowers.length > t &&
        // y !== 2 &&
        t !== playerpsiPowers.length - 1
    ) {
        t++;
        psipowerimage.src = playerpsiPowers[t]._image;
        +"\n" + "\n";
        psipowertext.innerText =
            playerpsiPowers[t]._text +
            "\n" +
            "\n" +
            "Psi Cost: " +
            playerpsiPowers[t]._psiCost +
            "\n" +
            "\n" +
            "Damage: " +
            playerpsiPowers[t]._damage +
            "\n" +
            "\n" +
            "Effect: " +
            playerpsiPowers[t]._special;
    } else if (
        t == 2 ||
        t > playerpsiPowers.length ||
        t == playerpsiPowers.length - 1
    ) {
        t = 0;
        psipowerimage.src = playerpsiPowers[0]._image;
        +"\n" + "\n";
        psipowertext.innerText =
            playerpsiPowers[0]._text +
            "\n" +
            "\n" +
            "Psi Cost: " +
            playerpsiPowers[0]._psiCost +
            "\n" +
            "\n" +
            "Damage: " +
            playerpsiPowers[0]._damage +
            "\n" +
            "\n" +
            "Effect: " +
            playerpsiPowers[0]._special;
    }
}

function previousPower() {
    if (t !== 0) {
        t--;
        psipowerimage.src = playerpsiPowers[t]._image;
        +"\n" + "\n";
        psipowertext.innerText =
            playerpsiPowers[t]._text +
            "\n" +
            "\n" +
            "Psi Cost: " +
            playerpsiPowers[t]._psiCost +
            "\n" +
            "\n" +
            "Damage: " +
            playerpsiPowers[t]._damage +
            "\n" +
            "\n" +
            "Effect: " +
            playerpsiPowers[t]._special;
    } else if (t == 0) {
        t = playerpsiPowers.length - 1;
        psipowerimage.src = playerpsiPowers[t]._image;
        +"\n" + "\n";
        psipowertext.innerText =
            playerpsiPowers[t]._text +
            "\n" +
            "\n" +
            "Psi Cost: " +
            playerpsiPowers[t]._psiCost +
            "\n" +
            "\n" +
            "Damage: " +
            playerpsiPowers[t]._damage +
            "\n" +
            "\n" +
            "Effect: " +
            playerpsiPowers[t]._special;
    }
}
