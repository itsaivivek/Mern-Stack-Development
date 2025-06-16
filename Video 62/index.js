/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
// There are 3*3*3 = 27 ways to combine words

let random = Math.random()

let adjectives = {
    adj1: "Crazy",
    adj2: "Amazing",
    adj3: "Fire",
}
let shop_name = {
    name1: "Engine",
    name2: "Foods",
    name3: "Garments",
}
let another_word = {
    word1: "Bros",
    word2: "Limited",
    word3: "Hub",
}

//For Crazy
if (random < 0.333) {
    //For Engine
    if (random < 0.111) {
        // For Bros
        if (random < 0.0370) {
            console.log(`${adjectives.adj1} ${shop_name.name1} ${another_word.word1}`)
        }
        // For Limited
        else if (random < 0.074) {
            console.log(`${adjectives.adj1} ${shop_name.name1} ${another_word.word2}`)
        }
        // For Hub
        else {
            console.log(`${adjectives.adj1} ${shop_name.name1} ${another_word.word3}`)
        }
    }
    // For Foods
    else if (random < 0.222 && random > 0.111) {
        // For Bros
        if (random < 0.148) {
            console.log(`${adjectives.adj1} ${shop_name.name2} ${another_word.word1}`)
        }
        // For Limited
        else if (random < 0.185) {
            console.log(`${adjectives.adj1} ${shop_name.name2} ${another_word.word2}`)
        }
        // For Hub
        else {
            console.log(`${adjectives.adj1} ${shop_name.name2} ${another_word.word3}`)
        }
    }
    // For Garments
    else {
        // For Bros
        if (random < 0.259) {
            console.log(`${adjectives.adj1} ${shop_name.name3} ${another_word.word1}`)
        }
        // For Limited
        else if (random < 0.296) {
            console.log(`${adjectives.adj1} ${shop_name.name3} ${another_word.word2}`)
        }
        // For Hub
        else {
            console.log(`${adjectives.adj1} ${shop_name.name3} ${another_word.word3}`)
        }
    }

}

// For Amazing
else if (random < 0.666 && random > 0.333) {
    //For Engine
    if (random < 0.444) {
        // For Bros
        if (random < 0.37) {
            console.log(`${adjectives.adj2} ${shop_name.name1} ${another_word.word1}`)
        }
        // For Limited
        else if (random < 0.407) {
            console.log(`${adjectives.adj2} ${shop_name.name1} ${another_word.word2}`)
        }
        // For Hub
        else {
            console.log(`${adjectives.adj2} ${shop_name.name1} ${another_word.word3}`)
        }
    }
    // For Foods
    else if (random < 0.555 && random > 0.444) {
        // For Bros
        if (random < 0.481) {
            console.log(`${adjectives.adj2} ${shop_name.name2} ${another_word.word1}`)
        }
        // For Limited
        else if (random < 0.518) {
            console.log(`${adjectives.adj2} ${shop_name.name2} ${another_word.word2}`)
        }
        // For Hub
        else {
            console.log(`${adjectives.adj2} ${shop_name.name2} ${another_word.word3}`)
        }
    }
    // For Garments
    else {
        // For Bros
        if (random < 0.592) {
            console.log(`${adjectives.adj2} ${shop_name.name3} ${another_word.word1}`)
        }
        // For Limited
        else if (random < 0.629) {
            console.log(`${adjectives.adj2} ${shop_name.name3} ${another_word.word2}`)
        }
        // For Hub
        else {
            console.log(`${adjectives.adj2} ${shop_name.name3} ${another_word.word3}`)
        }
    }

}

// For fire
else {
    //For Engine
    if (random < 0.777) {
        // For Bros
        if (random < 0.703) {
            console.log(`${adjectives.adj3} ${shop_name.name1} ${another_word.word1}`)
        }
        // For Limited
        else if (random < 0.74) {
            console.log(`${adjectives.adj3} ${shop_name.name1} ${another_word.word2}`)
        }
        // For Hub
        else {
            console.log(`${adjectives.adj3} ${shop_name.name1} ${another_word.word3}`)
        }
    }
    // For Foods
    else if (random < 0.888 && random > 0.777) {
        // For Bros
        if (random < 0.814) {
            console.log(`${adjectives.adj3} ${shop_name.name2} ${another_word.word1}`)
        }
        // For Limited
        else if (random < 0.851) {
            console.log(`${adjectives.adj3} ${shop_name.name2} ${another_word.word2}`)
        }
        // For Hub
        else {
            console.log(`${adjectives.adj3} ${shop_name.name2} ${another_word.word3}`)
        }
    }
    // For Garments
    else {
        // For Bros
        if (random < 0.925) {
            console.log(`${adjectives.adj3} ${shop_name.name3} ${another_word.word1}`)
        }
        // For Limited
        else if (random < 0.962) {
            console.log(`${adjectives.adj3} ${shop_name.name3} ${another_word.word2}`)
        }
        // For Hub
        else {
            console.log(`${adjectives.adj3} ${shop_name.name3} ${another_word.word3}`)
        }
    }

}