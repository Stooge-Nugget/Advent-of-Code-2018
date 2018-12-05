const reader = require('../file-reader');

reader.fileReader('input.txt', dayFourPartOne);

function dayFourPartOne(input) {
    let data = []

    input.forEach(e => {
        let timeStamp = e.slice(1, 17).replace(new RegExp(`[${':-\\s'}]`, 'g'), '');
        let payload = e.slice(19);

        data.push({ timeStamp: timeStamp, payload: payload })
    });

    let sortedData = data.sort((a, b) => a.timeStamp - b.timeStamp);
    let sleepMatrix = [];

    let lastID;

    for (let i = 0; i < sortedData.length; i++) {
        const entry = sortedData[i];

        let minutes = new Array(59).fill(0);
        let keyword = entry.payload.split(' ')[0];

        switch (keyword) {

            case 'Guard':
                lastID = entry.payload.split(' ')[1];
                if (sleepMatrix[lastID] === undefined) {
                    sleepMatrix[lastID] = [];
                    sleepMatrix[lastID].push(minutes);
                }
                break;

            case 'falls':
                let startTime = parseInt(sortedData[i].timeStamp.slice(8, 12));
                let endTime = parseInt(sortedData[i + 1].timeStamp.slice(8, 12));
                for (let minute = startTime; minute < endTime; minute++) {
                    sleepMatrix[lastID][0][minute] += 1;
                }
                break;
        }
    };

    let singleMax = 0;
    let ID;

    for (const id in sleepMatrix) {
        if (sleepMatrix.hasOwnProperty(id)) {
            let totalSlept = sleepMatrix[id][0].reduce((t, n) => t + n);

            if (singleMax < totalSlept) {
                singleMax = totalSlept;
                ID = id;
            }
        }
    }

    let max = Math.max(...sleepMatrix[ID][0]);
    let minute = sleepMatrix[ID][0].indexOf(max);

    console.log('ID:', ID);
    console.log('MINUTE:', minute);
    console.log('RESULT:', parseInt(ID.slice(1, 5)) * minute);

    let highestMinuteCount = 0;
    let maximums = [];

    for (const id in sleepMatrix) {
        if (sleepMatrix.hasOwnProperty(id)) {
            let max = Math.max(...sleepMatrix[id][0]);
            maximums[id] = {minute: sleepMatrix[id][0].indexOf(max), max: max};

            if(highestMinuteCount < max) highestMinuteCount = max;
        }
    }

}