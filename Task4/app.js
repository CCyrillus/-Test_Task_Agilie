const plane = [
    ['A', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.'],
    ['.', '.', 'A', '.', '.'],
    ['.', '.', 'A', '.', '.']
];

function countGoodPositions(scene) {
    const n = scene.length;
    const m = scene[0].length;
    let count = 0;

    const findActorsInDirection = (i, j, dx, dy) => {
        let x = i + dx;
        let y = j + dy;
        while (x >= 0 && x < n && y >= 0 && y < m) {
            if (scene[x][y] === 'A') {
                return true;
            }
            x += dx;
            y += dy;
        }
        return false;
    };

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (scene[i][j] === '.') {
                if (
                    findActorsInDirection(i, j, -1, 0) ||
                    findActorsInDirection(i, j, 1, 0) ||
                    findActorsInDirection(i, j, 0, -1) ||
                    findActorsInDirection(i, j, 0, 1)
                ) {
                    count++;
                }
            }
        }
    }

    return count;
}

console.log(countGoodPositions(plane));