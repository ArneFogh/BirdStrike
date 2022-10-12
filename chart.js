const ctx = document.querySelector('#chart').getContext('2d');
ctx.canvas.width = 20;
ctx.canvas.height = 10;
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            data: [14783, 16205, 17344, 11622, 15593],
            label: "Reported birdstrikes",
            fill: false,
            borderColor: '#F8333C',
            tension: 0.1,
        },
            {
                data: [3116, 3024, 2773, 1529, 2428],
                label: "Pilots warned",
                fill: false,
                borderColor: '#2467b7',
                tension: 0.1,

            }
        ]
    }
});

const ctx1 = document.querySelector('#chart1').getContext('2d');
ctx1.canvas.width = 20;
ctx1.canvas.height = 10;
const barChart = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            data: [175411, 59952, 108784, 99119, 221279],
            label: "Avg cost for repairs",
            fill: false,
            borderColor: 'green',
            tension: 0.1,
            backgroundColor: '#196F3D',
        },

        ]

    }
});

const ctx2 = document.querySelector('#chart2').getContext('2d');
ctx2.canvas.width = 200;
ctx2.canvas.height = 50;
const chart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Approach', 'Landing Roll', 'Take-off Run', 'Climb', 'En Route', 'Departure', 'Decent', 'Local', 'Arrival', 'Taxi', 'Parked',],
        datasets: [{
            data: [17543, 7617, 6097, 5145, 1509, 1466, 567, 493, 358, 171, 25],
            label: "Avg cost for repairs",
            fill: false,
            tension: 0.1,
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(255, 159, 64)',
                'rgba(255, 205, 86)',
                'rgba(75, 192, 192)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)',
                'rgba(201, 203, 207)',
                'rgba(201, 290, 210)',
                'rgba(120, 40, 210)',
            ],        },

        ]

    }
});

