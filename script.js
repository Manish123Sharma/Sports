// function OpeningCeremony(callback) {
//     console.log("Let the games begin!");

//     setTimeout(() => {
//         let score = {
//             red: 0,
//             blue: 0,
//             green: 0,
//             yellow: 0,
//         };
//         console.log("Opening Ceremony complete. Initial Scores:", score);
//         callback(score, Race100M);
//     }, 1000);
// }

// function Race100M(score, callback) {
//     console.log("Starting the 100m Race...");

//     setTimeout(() => {
//         let raceTimes = {
//             red: Math.floor(Math.random() * 6) + 10,     // 10-15
//             blue: Math.floor(Math.random() * 6) + 10,
//             green: Math.floor(Math.random() * 6) + 10,
//             yellow: Math.floor(Math.random() * 6) + 10,
//         };

//         console.log("Race Times:", raceTimes);

//         // Sort by time (ascending)
//         let sorted = Object.entries(raceTimes).sort((a, b) => a[1] - b[1]);

//         score[sorted[0][0]] += 50; // First
//         score[sorted[1][0]] += 25; // Second

//         console.log("Updated Scores after Race100M:", score);
//         callback(score, LongJump);
//     }, 3000);
// }

// function LongJump(score, callback) {
//     console.log("Starting Long Jump...");

//     setTimeout(() => {
//         const colors = ["red", "blue", "green", "yellow"];
//         const winner = colors[Math.floor(Math.random() * colors.length)];
//         console.log(`${winner} won the Long Jump!`);

//         score[winner] += 150;

//         console.log("Updated Scores after LongJump:", score);
//         callback(score, HighJump);

//     }, 2000);
// }

// function HighJump(score, callback) {
//     console.log("Starting High Jump...");

//     const userInput = prompt("Which color secured the highest jump? (red, blue, green, yellow)");

//     if (!userInput || !score.hasOwnProperty(userInput.toLowerCase())) {
//         console.log("Event was cancelled or invalid input received.");
//     } else {
//         const color = userInput.toLowerCase();
//         score[color] += 100;
//         console.log(`${color} awarded 100 points for High Jump.`);
//     }

//     console.log("Updated Scores after HighJump:", score);

//     if (typeof callback === "function") {
//         callback(score, AwardCeremony);// pass to AwardCeremony
//     } else {
//         console.error("Next callback is not a function");
//     }
// }

// function AwardCeremony(score) {
//     console.log("Award Ceremony begins...");

//     const sortedWinners = Object.entries(score)
//         .sort((a, b) => b[1] - a[1]);

//     console.log(`🏅 1st Place: ${sortedWinners[0][0]} with ${sortedWinners[0][1]} points`);
//     console.log(`🥈 2nd Place: ${sortedWinners[1][0]} with ${sortedWinners[1][1]} points`);
//     console.log(`🥉 3rd Place: ${sortedWinners[2][0]} with ${sortedWinners[2][1]} points`);
// }

// // Start the sports day
// OpeningCeremony(Race100M);

function display(message) {
    console.log(message);
    const output = document.getElementById("output");
    const p = document.createElement("p");
    p.textContent = message;
    output.appendChild(p);
}

function OpeningCeremony(callback) {
    document.getElementById("output").innerHTML = ""; // Clear previous results
    setTimeout(() => {
        display("🔔 Let the games begin!");
        let score = { red: 0, blue: 0, green: 0, yellow: 0 };
        callback(score, LongJump);
    }, 1000);
}

function Race100M(score, callback) {
    setTimeout(() => {
        display("🏃 Race 100M is starting...");
        let times = {
            red: Math.floor(Math.random() * 6) + 10,
            blue: Math.floor(Math.random() * 6) + 10,
            green: Math.floor(Math.random() * 6) + 10,
            yellow: Math.floor(Math.random() * 6) + 10,
        };

        let sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);
        score[sorted[0][0]] += 50;
        score[sorted[1][0]] += 25;

        display(
            `🏁 Race Results: 1st - ${sorted[0][0]} (${sorted[0][1]}s), 2nd - ${sorted[1][0]} (${sorted[1][1]}s)`
        );
        display(`Updated Scores: ${JSON.stringify(score)}`);

        callback(score, HighJump);
    }, 3000);
}

function LongJump(score, callback) {
    setTimeout(() => {
        display("🏋️ Long Jump event is starting...");
        let colors = ["red", "blue", "green", "yellow"];
        let winner = colors[Math.floor(Math.random() * colors.length)];
        score[winner] += 150;
        display(`🎯 Long Jump Winner: ${winner}`);
        display(`Updated Scores: ${JSON.stringify(score)}`);
        callback(score, AwardCeremony);
    }, 2000);
}

function HighJump(score, callback) {
    display("⛹️ High Jump is starting...");
    let color = prompt(
        "Enter the color that performed the highest jump (red, blue, green, yellow):"
    );

    if (color === null || color.trim() === "") {
        display("Event was cancelled.");
    } else if (score.hasOwnProperty(color.toLowerCase())) {
        score[color.toLowerCase()] += 100;
        display(`🏆 High Jump Winner: ${color}`);
        display(`Updated Scores: ${JSON.stringify(score)}`);
    } else {
        display("Invalid color. Event cancelled.");
    }

    callback(score);
}

function AwardCeremony(score) {
    display("🎉 Award Ceremony:");
    let sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);

    display(`🥇 1st Place: ${sorted[0][0]} with ${sorted[0][1]} points`);
    display(`🥈 2nd Place: ${sorted[1][0]} with ${sorted[1][1]} points`);
    display(`🥉 3rd Place: ${sorted[2][0]} with ${sorted[2][1]} points`);
}
