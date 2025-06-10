 
        document.addEventListener('DOMContentLoaded', function() {
          
            const years = ['2020', '2021', '2022', '2023', '2024'];
          
            const numberOfFires = [650, 720, 680, 850, 256];

      
            const ctx = document.getElementById('firesChart').getContext('2d');

       
            const firesChart = new Chart(ctx, {
                type: 'bar', 
                data: {
                    labels: years, 
                    datasets: [{
                        label: 'Number of Fires',
                        data: numberOfFires, 
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.8)', 
                            'rgba(54, 162, 235, 0.8)', 
                            'rgba(255, 206, 86, 0.8)', 
                            'rgba(75, 192, 192, 0.8)', 
                            'rgba(153, 102, 255, 0.8)' 
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)'
                        ],
                        borderWidth: 1,
                        borderRadius: 8 
                    }]
                },
                options: {
                    responsive: true, 
                    maintainAspectRatio: true, 
                    aspectRatio: 2, 
                    plugins: {
                        legend: {
                            display: false 
                        },
                        title: {
                            display: true,
                            text: 'Annual Fire Incidents in Bulgaria',
                            font: {
                                size: 18,
                                weight: 'bold'
                            },
                            color: '#374151' 
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true, 
                            title: {
                                display: true,
                                text: 'Number of Fires',
                                font: {
                                    size: 14,
                                    weight: '600'
                                },
                                color: '#4b5563' 
                            },
                            ticks: {
                                color: '#6b7280' 
                            },
                            grid: {
                                color: 'rgba(209, 213, 219, 0.3)' 
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Year',
                                font: {
                                    size: 14,
                                    weight: '600'
                                },
                                color: '#4b5563'
                            },
                            ticks: {
                                color: '#6b7280'
                            },
                            grid: {
                                display: false 
                            }
                        }
                    },
                    animation: {
                        duration: 1500, 
                        easing: 'easeInOutQuad' 
                    }
                }
            });

           
            window.addEventListener('resize', () => {
                firesChart.resize();
            });
        });