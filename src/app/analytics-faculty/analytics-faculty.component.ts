import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-analytics-faculty',
  templateUrl: './analytics-faculty.component.html',
  styleUrls: ['./analytics-faculty.component.scss'],
})
export class AnalyticsFacultyComponent implements OnInit {
  registeredStudents: number = 132;
  registeredEmployees: number = 43;
  registeredCompanies: number = 37;
  standardAds: number = 23;
  premiumAds: number = 8;
  registeredCompaniesPeriod: number = 5;
  standardAdsPeriod: number = 4;
  premiumAdsPeriod: number = 0;
  newUsers: number = 59;
  sessions: number = 78;
  activeUsers: number = 43;
  averageSessionDuration: number = 246.73;
  averageTimeOnPages: number = 121.99;
  networkSource: any[] = [
    {
      source: 'google',
      value: 130
    },
    {
      source: '{direct}',
      value: 94
    },
    {
      source: 'l.instagram.com',
      value: 21
    }
  ]



  myChart: Chart | undefined;
  dates: string[] = [];
  viewsMonth: number[] = [
    1, 0, 3, 2, 1, 2, 3, 4, 2, 2, 4, 0, 0, 0, 4, 23, 2, 1, 3, 4, 5, 6, 2, 4, 1,
    3, 2, 5, 6, 1,
  ];
  averageTimeOnPagesMonth: number[] = [
    1, 0, 3, 2, 1, 8, 3, 4, 2, 2, 1, 10, 0, 0, 4, 23, 2, 1, 0, 4, 5, 6, 2, 0, 1,
    6, 2, 5, 0, 0,
  ];
  newUsersMonth: number[] = [
    1, 15, 3, 2, 1, 8, 3, 4, 2, 2, 1, 10, 0, 0, 4, 13, 2, 1, 0, 4, 5, 6, 0, 0, 0,
    6, 2, 5, 0, 11,
  ];
  sessionsMonth: number[] = [
    1, 0, 3, 2, 1, 16, 3, 4, 2, 2, 1, 10, 0, 0, 4, 0, 2, 1, 0, 4, 5, 11, 2, 0, 1,
    6, 2, 5, 0, 0,
  ];
  activeUsersMonth: number[] = [
    1, 0, 3, 2, 1, 0, 3, 4, 2, 2, 1, 10, 16, 15, 4, 9, 2, 1, 0, 4, 5, 6, 2, 0, 1,
    6, 2, 5, 0, 0,
  ];
  averageSessionDurationMonth: number[] = [
    1, 15, 3, 2, 1, 8, 3, 4, 2, 2, 1, 1, 0, 0, 4, 3, 2, 1, 0, 4, 5, 6, 2, 0, 1,
    6, 2, 5, 0, 2,
  ];
  showedData: number[] = this.viewsMonth;

  ngOnInit(): void {
    const date = new Date();
    for (let i = 0; i < 30; i++) {
      date.setDate(date.getDate() - 1);
      this.dates.push(`${date.getDate()}.${date.getMonth() + 1}`);
    }
    const showDates = this.dates;
    const ctx = document.getElementById('chart') as HTMLCanvasElement;
    this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: showDates.reverse(),
        datasets: [
          {
            label: 'Pregledi stranice',
            data: this.showedData,
            backgroundColor: 'rgba(18, 97, 201, 1)',
            borderColor: 'rgba(18, 97, 201, 1)',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 6,
            },
          },
          y: {
            type: 'linear', // Eksplicitno navođenje linear skale za Y osu
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          }
        },
        elements: {
          line: {
            borderColor: 'rgba(18, 97, 201, 1)', // Boja linije
            borderWidth: 2, // Širina linije
            fill: false, // Da li popunjavati ispod linije
          },
        },
      },
    });
    const showLabels: string[] = [];
    const showBarData: number[] = [];
    this.networkSource.map((source) => {
      showLabels.push(source.source);
      showBarData.push(source.value);
    })
    const stx = document.getElementById('chartSource') as HTMLCanvasElement;
    const sourceChart = new Chart(stx, {
      type: 'bar',
      data: {
        labels: showLabels,
        datasets: [
          {
            data: showBarData,
            borderColor: 'rgba(18, 97, 201, 1)',
            backgroundColor: 'rgba(18, 97, 201, 1)',
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            beginAtZero: true,
            max: Math.max(...showBarData) + 10,
          }
        },
        plugins: {
          legend: {
            display: false,
          },
        }
      }
    });
  }

  setChartDays(event: Event) {
    const showDates = this.dates;
    const days = parseInt((event.target as HTMLSelectElement).value);
    if (this.myChart) {
      this.myChart.data.labels = showDates.slice(30 - days, 30);
      this.myChart.data.datasets[0].data = this.showedData.slice(30 - days,30);
      this.myChart.update();
    }
  }

  setChartData(event: Event) {
    const data = (event.target as HTMLSelectElement).value;
    console.log(data);
    if (this.myChart) {
      switch (data) {
        case 'pageViews':
          this.myChart.data.datasets[0].label = 'Pregledi stranice';
          this.showedData = this.viewsMonth;
          break;
        case 'averageTimeOnPages':
          this.myChart.data.datasets[0].label = 'Prosečno vreme na stranici';
          this.showedData = this.averageTimeOnPagesMonth;
          break;
        case 'newUsers':
          this.myChart.data.datasets[0].label = 'Novi korisnici';
          this.showedData = this.newUsersMonth;
          break;
        case 'sessions':
          this.myChart.data.datasets[0].label = 'Broj sesija';
          this.showedData = this.sessionsMonth;
          break;
        case 'activeUsers':
          this.myChart.data.datasets[0].label = 'Jedinstvenih korsnika';
          this.showedData = this.activeUsersMonth;
          break;
        case 'averageSessionDuration':
          this.myChart.data.datasets[0].label = 'Prosečno vreme sesije';
          this.showedData = this.averageSessionDurationMonth;
          break;
      }

      const showDates = this.dates;
      const select = document.getElementById('time-range') as HTMLSelectElement;
      const days = parseInt(select.value);
      console.log(days);

      this.myChart.data.labels = showDates.slice(30 - days, 30);
      this.myChart.data.datasets[0].data = this.showedData.slice(30 - days, 30);
      this.myChart.update();
    }
  }
}
