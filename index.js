// code your solution here
function superbowlWin(record){
    const win = record.find((score) => score.result === "W")
return win ? win.year : undefined
}