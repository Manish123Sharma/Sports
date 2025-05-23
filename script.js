function OpeningCeremony(callback) {
    console.log("Let the games begin!");

    setTimeout(() => {
        let score = {
            red: 0,
            blue: 0,
            green: 0,
            yellow: 0,
        };
        console.log("Opening Ceremony complete. Initial Scores:", score);
        callback(score, Race100M);
    }, 1000);
}

function Race100M(score, callback) {
    console.log("Starting the 100m Race...");

    setTimeout(() => {
        let raceTimes = {
            red: Math.floor(Math.random() * 6) + 10,     // 10-15
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10,
        };

        console.log("Race Times:", raceTimes);

        // Sort by time (ascending)
        let sorted = Object.entries(raceTimes).sort((a, b) => a[1] - b[1]);

        score[sorted[0][0]] += 50; // First
        score[sorted[1][0]] += 25; // Second

        console.log("Updated Scores after Race100M:", score);
        callback(score, LongJump);
    }, 3000);
}

function LongJump(score, callback) {
    console.log("Starting Long Jump...");

    setTimeout(() => {
        const colors = ["red", "blue", "green", "yellow"];
        const winner = colors[Math.floor(Math.random() * colors.length)];
        console.log(`${winner} won the Long Jump!`);

        score[winner] += 150;

        console.log("Updated Scores after LongJump:", score);
        callback(score, HighJump);
        
    }, 2000);
}


function HighJump(score, callback) {
    console.log("Starting High Jump...");

    const userInput = prompt("Which color secured the highest jump? (red, blue, green, yellow)");

    if (!userInput || !score.hasOwnProperty(userInput.toLowerCase())) {
        console.log("Event was cancelled or invalid input received.");
    } else {
        const color = userInput.toLowerCase();
        score[color] += 100;
        console.log(`${color} awarded 100 points for High Jump.`);
    }

    console.log("Updated Scores after HighJump:", score);

    if (typeof callback === "function") {
        callback(score, AwardCeremony);// pass to AwardCeremony
    } else {
        console.error("Next callback is not a function");
    }
}


function AwardCeremony(score) {
    console.log("Award Ceremony begins...");

    const sortedWinners = Object.entries(score)
        .sort((a, b) => b[1] - a[1]);

    console.log(`🏅 1st Place: ${sortedWinners[0][0]} with ${sortedWinners[0][1]} points`);
    console.log(`🥈 2nd Place: ${sortedWinners[1][0]} with ${sortedWinners[1][1]} points`);
    console.log(`🥉 3rd Place: ${sortedWinners[2][0]} with ${sortedWinners[2][1]} points`);
}

// Start the sports day
OpeningCeremony(Race100M);
