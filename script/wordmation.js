const base = [
    [" "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "],
    [" "," "," "," "," "," "," "," "," "," "," "," "," "],
]


const word = [
    [
        ["▶","H","e","l","l","o"," "," "," "," "," "," "," "],
        [" "," "," "," ","e","v","e","r","y","o","n","e","!"],
        ["I"," ","a","m"," "," "," "," "," "," "," "," "," "],
        [" "," "," "," ","L","o","l","a","z","y","X"," "," "],
    ],
    [
        ["I"," ","a","m"," "," "," "," "," "," "," "," "," "],
        [" "," "," ","i","n","t","e","r","e","s","t","e","d"],
        [" ","i","n","●","w","e","b"," "," "," "," "," "," "],
        [" "," ","d","e","v","e","l","o","p","e","r","!"," "],
    ],
    [
        ["▶","Y","o","u"," ","c","a","n"," ","v","i","e","w"],
        [" "," ","m","y"," ","w","o","r","k"," "," "," "," "],
        [" "," "," "," "," "," "," "," "," ","o","n"," "," "],
        [" "," "," "," "," "," ","★","G","i","t","H","u","b"],
    ],
    [
        ["▶","a","n","d"," ","y","o","u"," ","c","a","n"," "],
        [" "," ","c","o","n","t","a","c","t"," ","m","e"," "],
        ["w","h","e","n","e","v","e","r"," "," "," "," "," "],
        [" "," "," "," ","y","o","u"," ","n","e","e","d","!"],
    ]

]

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const randomCharecter = (noRandom) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;
    while (counter < 1) {
      result = characters.charAt(Math.floor(Math.random() * characters.length));
      if (result == noRandom) {
        counter = 0;
      } else {
        counter++;
      }
    }
    return result;
}

const randomColor = () => {
    const color = ['gold', 'caribbean-green'];
    let result = color[Math.floor((Math.random()*color.length))];
    return result;
}

const add_style = () => {
    letter = ['a', 'b', 'c', 'd']
    letter.forEach(element => {
        for (let i = 0; i < 13; i++) {
            let id = `${element}${i+1}`;
            //console.log(id)
            document.getElementById(id).classList.add('p-2', 'w-6', 'md:p-3', 'md:w-14', 'xl:p-6', 'xl:w-20', 'border', 'lg:border-2', 'border-opacity-rgba');
        }
    });
}

const waitRamdom = (id, noRandom) => {
    return new Promise(async resolve => {
        let element = document.getElementById(id).innerText;
        while ( element != noRandom ) {
            element = document.getElementById(id).innerText
            document.getElementById(id).innerHTML = randomCharecter(noRandom);
            await sleep(50)
        }
        document.getElementById(id).innerHTML = noRandom;
 
    });
}

const wordmation = async () => { 
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word[i].length; j++) {
            let letter;
            j == 0 ? letter = 'a' : j == 1 ? letter = 'b' : j == 2 ? letter = 'c' : j == 3 ? letter = 'd': j = 4;
            for (let k = 0; k < word[i][j].length; k++) {
                if (word[i][j][k] != " ") {
                    let id = `${letter}${k+1}`;
                    document.getElementById(id).classList.remove("border-opacity-rgba");
                    document.getElementById(id).classList.add("bg-rich-black", "shadow-inner", "border-infra-red", "text-dark-jungle-green");
                    waitRamdom(id, word[i][j][k]);
                    await sleep(30);
                }
            }
        }
        for (let j = 0; j < word[i].length; j++) {
            let letter;
            j == 0 ? letter = 'a' : j == 1 ? letter = 'b' : j == 2 ? letter = 'c' : j == 3 ? letter = 'd': j = 4;
            for (let k = 0; k < word[i][j].length; k++) {
                if (word[i][j][k] != " ") {
                    let id = `${letter}${k+1}`;
                    document.getElementById(id).classList.remove("text-dark-jungle-green");
                    if (word[i][j][k] == "▶" || word[i][j][k] == "!" || word[i][j][k] == "X" || word[i][j][k] == "★" || word[i][j][k] == "●") {
                        let color = `text-${randomColor()}`;
                        document.getElementById(id).classList.add(color);
                    }
                    document.getElementById(id).innerHTML = word[i][j][k];
                    await sleep(50)
                }
            }
        }
        await sleep(10000);
        clearClass();
        if ( i == (word.length - 1) ) i = -1;
    }
}

const clearClass = () => { 
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word[i].length; j++) {
            let letter;
            j == 0 ? letter = 'a' : j == 1 ? letter = 'b' : j == 2 ? letter = 'c' : j == 3 ? letter = 'd': j = 4;
            for (let k = 0; k < word[i][j].length; k++) {
                let id = `${letter}${k+1}`;
                document.getElementById(id).classList.add("border-opacity-rgba");
                document.getElementById(id).classList.remove("bg-rich-black", "shadow-inner", "border-infra-red", "text-infra-red", "text-gold", "text-caribbean-green");
                document.getElementById(id).innerHTML = "ㅤ";
            }
        }
    }
}

add_style();
wordmation();


/*

const wordmation = async () => { 
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word[i].length; j++) {
            let letter;
            j == 0 ? letter = 'a' : j == 1 ? letter = 'b' : j == 2 ? letter = 'c' : j == 3 ? letter = 'd': j = 4;
            for (let k = 0; k < word[i][j].length; k++) {
                if (word[i][j][k] != " ") {
                    let id = `${letter}${k+1}`;
                    document.getElementById(id).classList.remove("border-opacity-rgba");
                    document.getElementById(id).classList.add("bg-rich-black", "shadow-inner", "border-infra-red", "text-charcoal");
                    document.getElementById(id).innerHTML = randomCharecter();
                    await sleep(60)
                    document.getElementById(id).innerHTML = randomCharecter();
                    await sleep(60)
                    document.getElementById(id).innerHTML = randomCharecter();
                    await sleep(60)
                    document.getElementById(id).classList.remove("text-charcoal");
                    if (word[i][j][k] == "▶" || word[i][j][k] == "!" || word[i][j][k] == "X" || word[i][j][k] == "★" || word[i][j][k] == "●") {
                        let color = `text-${randomColor()}`;
                        document.getElementById(id).classList.add(color);
                    }
                    document.getElementById(id).innerHTML = word[i][j][k];
                    await sleep(20)
                }
            }
        }
        await sleep(5000);
        clearClass();
        if ( i == (word.length - 1) ) i = -1;
    }
}

*/