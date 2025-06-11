   const textColor = getComputedStyle(document.documentElement).getPropertyValue('--text-clr').trim();
   const neighborhoods = ['Славейков', 'Меден рудник', 'Лазур', 'Център', 'Сарафово'];
    const fireCounts = [22, 35, 10, 12, 15];

    const ctx = document.getElementById('firesChart').getContext('2d');

    const firesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: neighborhoods,
            datasets: [{
                label: 'Брой пожари (2024)',
                data: fireCounts,
                backgroundColor: '#e74c3c',
                borderColor: '#c0392b',
                borderWidth: 1,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Брой пожари по квартали в Бургас (2024)',
                    font: {
                        size: 18,
                        weight: 'bold'
                    },
                    color: textColor
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Брой пожари',
                        font: {
                            size: 14,
                            weight: '600'
                        },
                        color: textColor
                    },
                    ticks: {
                        color: textColor
                    },
                    grid: {
                        color: 'rgba(209, 213, 219, 0.3)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Квартал',
                        font: {
                            size: 14,
                            weight: '600'
                        },
                        color: textColor
                    },
                    ticks: {
                        color: textColor
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

const neighborhoodsRT = ['Славейков', 'Меден рудник', 'Лазур', 'Център', 'Сарафово'];
const avgResponseTimes = [5, 8, 4, 3, 10]; 

const ctx2 = document.getElementById('responseTimeChart').getContext('2d');

const responseTimeChart = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: neighborhoodsRT,
        datasets: [{
            label: 'Средно време за реакция (мин)',
            data: avgResponseTimes,
            fill: false,
            borderColor: '#2980b9',
            tension: 0.3,
            pointStyle: 'circle',
            pointRadius: 6,
            pointBackgroundColor: '#2980b9'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Средно време за реакция по квартали',
                font: {
                    size: 18,
                    weight: 'bold'
                },
                color: textColor
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Време (минути)',
                    font: {
                        size: 14,
                        weight: '600'
                    },
                    color: textColor
                },
                ticks: {
                    color: textColor
                },
                grid: {
                    color: 'rgba(209, 213, 219, 0.3)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Квартал',
                    font: {
                        size: 14,
                        weight: '600'
                    },
                    color: textColor
                },
                ticks: {
                    color: textColor
                },
                grid: {
                    display: false
                }
            }
        }
    }
});

const ctxIncident = document.getElementById('incidentTypesChart').getContext('2d');

const incidentTypesChart = new Chart(ctxIncident, {
  type: 'doughnut',
  data: {
    labels: ['Пожари', 'Спасителни дейности', 'Пътни инциденти', 'Наводнения', 'Лъжливи сигнали'],
    datasets: [{
      data: [55, 20, 15, 5, 5],
      backgroundColor: [
        '#ef4444',
        '#3b82f6',
        '#f59e0b',
        '#10b981',
        '#6b7280'
      ],
      borderColor: '#ffffff',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
            color: textColor,
            padding: 20,
            boxWidth: 20,
            font: {
            size: 16,
            weight: '500'
          }
        }
      },
      title: {
        display: false
      }
    },
    animation: {
      duration: 1200,
      easing: 'easeOutBounce'
    }
  }
});