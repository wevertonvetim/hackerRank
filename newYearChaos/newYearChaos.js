const testCase = [1, 2, 5, 3, 7, 8, 6, 4]

function minimumBribes(q) {
    let totalBribes = 0;
    
    let expectedFirst = 1;
    let expectedSecond = 2;
    let expectedThird = 3;
    
    for (let i = 0; i < q.length; ++i) {
        if (q[i] == expectedFirst) {
            expectedFirst = expectedSecond;
            expectedSecond = expectedThird;
            ++expectedThird;
        } else if (q[i] == expectedSecond) {
            ++totalBribes;
            expectedSecond = expectedThird;
            ++expectedThird;
        } else if (q[i] == expectedThird) {
            totalBribes += 2;
            ++expectedThird;
        } else {
            console.log("Too chaotic")
            return;
        }
    }
    
    console.log(totalBribes);
}

minimumBribes(testCase)
