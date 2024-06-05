function get_player_names() {
    let player1 = prompt("Enter player1 name");
    let player2 = prompt("Enter player2 name");
    return { player1, player2 };
}

function allow_gameplay(player1, player2) {
    if (player1 && player1.length > 0 && player2 && player2.length > 0) {
        return true;
    }
    return false;
}

function roll_dice() {
    let mn = 1;
    let mx = 6;
    return Math.floor(Math.random() * (mx - mn + 1)) + mn;
}

function evaluate_winner(player1, p1result, player2, p2result) {
    if (p1result !== null && p2result !== null) {
        if (p1result > p2result) {
            return `${player1} wins!`;
        } else if (p2result > p1result) {
            return `${player2} wins!`;
        } else {
            return "It's a tie!";
        }
    }
    return null; // no winner (yet)
}

function render_game_stats(game_stats) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; // clear previous results
    game_stats.forEach((stat) => {
        const p = document.createElement("p");
        p.innerText = stat;
        resultsContainer.appendChild(p);
    });
}

function reset_game() {
    p1result = null;
    p2result = null;
}

function main() {
    // initialize defaul values
    let players = { player1: "", player2: "" };
    let p1result = null;
    let p2result = null;
    let gameIsAllowed = false;
    let game_stats = [];
    let turn = null; // to keep track of turns

    // kick off the game
    document.getElementById("start").addEventListener("click", () => {
        // prompt for players names
        players = get_player_names();
        console.log(players.player1, players.player2);
        // check if game is allowed
        gameIsAllowed = allow_gameplay(players.player1, players.player2);
        console.log(gameIsAllowed);
        // allow roll dice buttons
        if (gameIsAllowed) {
            document.querySelectorAll(".btn-primary").forEach((button) => {
                button.removeAttribute("disabled");
            });
            turn = null; // reset turn on new game start
        }
    });

    // prompt for p1 to throw the dice
    document.getElementById("p1roll").addEventListener("click", () => {
        if (!gameIsAllowed || turn === "player1") return;
        p1result = roll_dice();
        console.log(`p1 result: ${p1result}`);
        turn = "player1"; // mark that player1 has rolled
        const result = evaluate_winner(
            players.player1,
            p1result,
            players.player2,
            p2result
        );
        console.log(result);
        if (result) {
            console.log(result);
            game_stats.push(result);
            console.log(game_stats);
            render_game_stats(game_stats);
            reset_game();
        }
    });

    // prompt for p2 to throw the dice
    document.getElementById("p2roll").addEventListener("click", () => {
        if (!gameIsAllowed || turn === "player2") return;
        p2result = roll_dice();
        console.log(`p2 result: ${p2result}`);
        turn = "player2"; // mark that player1 has rolled
        const result = evaluate_winner(
            players.player1,
            p1result,
            players.player2,
            p2result
        );
        console.log(result);
        if (result) {
            console.log(result);
            game_stats.push(result);
            console.log(game_stats);
            render_game_stats(game_stats);
            reset_game();
        }
    });
}

// run main() after page loads completelly
window.onload = main;
