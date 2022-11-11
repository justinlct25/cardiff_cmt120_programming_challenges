const fs = require('fs');

module.exports = {

    // Exercise 1 - Iris Species Classifier
    exercise1: (SepalLen, SepalWid, PetalLen, PetalWid) => {
        this.FLOWERS = { SETOSA: "setosa", VERSICOLOR: "versicolor", VIRGINICA: "virginica" };
        if (PetalLen < 2.5) return this.FLOWERS.SETOSA;
        if (PetalWid < 1.8) {
            if (PetalLen < 5) {
                if (PetalWid < 1.7) return this.FLOWERS.VERSICOLOR;
                return this.FLOWERS.VIRGINICA;
            }
            if (PetalWid < 1.6) return this.FLOWERS.VIRGINICA;
            if (SepalLen < 7) return this.FLOWERS.VERSICOLOR;
            return this.FLOWERS.VIRGINICA;
        }
        if (PetalLen >= 4.9) return this.FLOWERS.VIRGINICA;
        if (SepalLen < 6) return this.FLOWERS.VERSICOLOR;
        return this.FLOWERS.VIRGINICA;
    },

    // Exercise 2 - Dog Breeds Standards
    exercise2: (breed, height, weight, male) => {
        this.STANDARD = {
            "Bulldog": { 1: { h: 15, w: 50 }, 0: { h: 14, w: 14 } },
            "Dalmatian": { 1: { h: 24, w: 70 }, 0: { h: 19, w: 45 } },
            "Maltese": { 1: { h: 9, w: 7 }, 0: { h: 7, w: 6 } }
        }
        const std_h = this.STANDARD[breed][+male].h,
            std_w = this.STANDARD[breed][+male].w
        if ((height >= std_h * 0.9 && height <= std_h * 1.1) && (weight >= std_w * 0.9 && weight <= std_w * 1.1)) return true;
        return false;
    },

    // Exercise 3 - Basic Statistics
    exercise3: (l) => {
        this.cal_stat = (nums) => {
            const sum = nums.reduce((a, b) => a + b, 0);
            const half_idx = Math.floor(nums.length / 2);
            const median = nums.length % 2 ? nums[half_idx] : (nums[half_idx - 1] + nums[half_idx]) / 2;
            return [Math.min(...nums), sum / nums.length, median, Math.max(...nums)];
        }
        return [this.cal_stat(l.sort()), this.cal_stat(l.map(num => Math.pow(num, 2)))];
    },

    // Exercise 4 - Finite-State Machine Simulator
    exercise4: (trans, init_state, input_list) => {
        let output = result = [];
        for (const input of input_list) {
            result = trans[init_state + "/" + input].split("/");
            init_state = result[0];
            output.push(result[1]);
        }
        return output;
    },

    // Exercise 5 - Document Stats
    exercise5: (filename) => {
        this.is_number = (char) => { return char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57 };
        this.is_letter = (char) => { return (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) };
        const data = fs.readFileSync(filename, "utf8");
        let count = { "letters": 0, "numbers": 0, "symbols": 0, "words": 0, "sentences": 0, "paragraphs": 0, "last_line_len": 0 };
        data.split("\n").forEach((line) => {
            if (line.length > 0) { // only doing operations when line is not empty
                if (count.last_line_len == 0) count.paragraphs++; // if the last line is empty and this one is not, then it would be the new paragraph
                line.split(" ").forEach((word) => { // splitting as word list by spaces
                    word.split(/[^A-Za-z0-9]/).forEach((subword) => { if (subword.length >= 1 && (this.is_number(subword[0]) || this.is_letter(subword[0]))) count.words++; }) // split for sub-words eg. C-3P , 7-seas)
                    word.split("").forEach((char) => { // counting for numbers, letters & symbols by looping through each character
                        if (char == "." || char == "?" || char == "!") count.sentences++;
                        if (this.is_number(char)) count.numbers++;
                        else if (this.is_letter(char)) count.letters++;
                        else count.symbols++;
                    })
                })
            }
            count.last_line_len = line.length;
        })
        return [count.letters, count.numbers, count.symbols, count.words, count.sentences, count.paragraphs];
    },

    // Exercise 6 - List Depth
    exercise6: (l) => {
        let max_depth = 0;
        l.map((e) => {
            if (Array.isArray(e)) {
                const count = module.exports.exercise6(e);
                if (count > max_depth) max_depth = count;
            }
        })
        return max_depth + 1;
    },

    // Exercise 7 - Change, please
    exercise7: (amount, coins) => {
        this.COINS = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
        for (const coin of this.COINS) {
            if (coins == 2) {
                if (this.COINS.includes(Math.round((amount - coin) * 100) / 100)) return true
            } else {
                if (module.exports.exercise7(Math.round((amount - coin) * 100) / 100, coins - 1)) return true;
            }
        }
        return false;
    },

    // Exercise 8 - Five Letter Unscramble
    exercise8: (s) => {
        this.WORDS = fs.readFileSync("test_data/wordle.txt", "utf-8").split("\n");
        this.ISINCLUDED = (word, counts) => {
            for (char of word) {
                if (!counts[char] || counts[char] <= 0) return false;
                counts[char]--;
            }
            return true;
        }
        this.COUNTS = {};
        for (char of s) this.COUNTS[char] = this.COUNTS[char] + 1 || 1;
        let count = 0;
        for (word of this.WORDS)
            if (this.ISINCLUDED(word, {...this.COUNTS })) count++;
        return count;
    },

    // Exercise 9 - Wordle Set
    exercise9: (green, yellow, gray) => {
        let words = fs.readFileSync("test_data/wordle.txt", "utf-8").split("\n");
        gray.forEach((char) => words = words.filter(word => !word.includes(char)));
        for (char in yellow) yellow[char].forEach((idx) => words = words.filter(word => word.charAt(idx) != char && word.includes(char)));
        for (let i = 0; i < 5; i++)
            if (green[i]) words = words.filter(word => word.charAt(i) == green[i])
        return words.length;
    },

    // Exercise 10 - One Step of Wordle
    exercise10: (green, yellow, gray) => {
        this.WORDS = fs.readFileSync("test_data/wordle.txt", "utf-8").split("\n");
        this.CAL_WORDLE_SET = (words, green, yellow, gray) => {
            gray.forEach((char) => words = words.filter(word => !word.includes(char)));
            for (char in yellow) yellow[char].forEach((idx) => words = words.filter(word => word.charAt(idx) != char && word.includes(char)));
            for (let i = 0; i < 5; i++)
                if (green[i]) words = words.filter(word => word.charAt(i) == green[i])
            return words;
        }
        let updated_config = word_scores = {};
        let first_set = this.CAL_WORDLE_SET(this.WORDS, green, yellow, gray);
        let lowest_scores = Number.MAX_VALUE;
        for (const target_word_idx in first_set) { // loop through all the words to calculate scores
            let scores = 0;
            for (const other_word_idx in first_set) { // loop through the other words
                if (other_word_idx != target_word_idx) { // not the word to be calculated for scores
                    updated_config = { green: {}, yellow: {}, gray: new Set() };
                    for (const letter_idx in first_set[target_word_idx]) { // loop througgh every letter of the target word
                        const current_letter = first_set[target_word_idx][letter_idx],
                            other_word = first_set[other_word_idx];
                        if (current_letter == other_word[letter_idx]) { // check hypothetical correct letter
                            updated_config.green[letter_idx.toString()] = current_letter;
                        } else if (other_word.includes(current_letter)) { // check hypothetical included letter
                            if (updated_config.yellow[current_letter]) updated_config.yellow[current_letter].add(Number(letter_idx));
                            else updated_config.yellow[current_letter] = new Set([Number(letter_idx)]);
                        } else if (!other_word.includes(current_letter)) { // check hypothetical non-exist letter
                            updated_config.gray.add(current_letter);
                        }
                    }
                    let second_set = this.CAL_WORDLE_SET(first_set, updated_config.green, updated_config.yellow, updated_config.gray);
                    scores += second_set.length;
                }
            }
            if (scores < lowest_scores) lowest_scores = scores;
            if (word_scores[scores]) word_scores[scores].push(first_set[target_word_idx]);
            else word_scores[scores] = [first_set[target_word_idx]];
        }
        return new Set(word_scores[lowest_scores]);
    },
}