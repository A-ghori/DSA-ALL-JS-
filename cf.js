const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');
let t = parseInt(input[0]);
let index = 1;

for (let _ = 0; _ < t; _++) {
    let n = parseInt(input[index++]);
    
    // Example: Brute-force pair testing
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            console.log(`${i} ${j}`);
            process.stdout.flush?.();

            const response = Number(require('fs').readFileSync(0, 'utf8').trim());
            
            if (response === 1) {
                // found working pair
                break;
            }
            if (response === -1) {
                process.exit(0);
            }
        }
    }
} 