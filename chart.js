console.log('Script initiated');
const ctx = document.querySelector('#chart').getContext('2d');
ctx.canvas.width = 200;
ctx.canvas.height = 50;
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            data: [14783, 16205, 17344, 11622, 15593],
            label: "Reported birdstrikes",
            fill: false,
            borderColor: 'red',
            tension: 0.1,
        },
            {
                data: [3116, 3024, 2773, 1529, 2428],
                label: "Pilots warned",
                fill: false,
                borderColor: 'blue',
                tension: 0.1,

            }
        ]

    }
});

