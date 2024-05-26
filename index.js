// code your solution here

function superbowlWin(record) {
    const superbowlVictory = record.find(match => match.result === "W")
    if (superbowlVictory) {
        return superbowlVictory.year
    }
}