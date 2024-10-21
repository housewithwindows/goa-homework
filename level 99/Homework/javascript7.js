class Player {
    static playerCount = 0;  // static property

    constructor(name) {
        this.name = name;
        Player.playerCount++;
    }

    static getPlayerCount() {
        return Player.playerCount;
    }
}

// Create instances
let player1 = new Player("Alice");
let player2 = new Player("Bob");
console.log(Player.getPlayerCount());  // Output: 2
