// 1. Join Two Portions of a Path
function joinPath(p1, p2) {

    let portion1 = p1.match(/portion1/g)
    let portion2 = p2.match(/portion2/g)
    
    return portion1 + '/' + portion2
    }
    
    joinPath("portion1/", "portion2")