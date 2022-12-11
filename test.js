const textNodes = [
    {
        id: 1,
        room_id: 1,
        text: '"ZZZZzzzzZZZZZZzzzzzzzzzzZZZZZZZZZZZZZ"',

        options: [
            {
                text: "Wake up",
                setfadeMode: {
                    fade: 2,
                },
                nextText: 2,
                ahhh() {
                    console.log("ahhh");
                },
            },
        ],
    },
];

textNodes[0].options[0].ahhh();
