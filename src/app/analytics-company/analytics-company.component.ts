import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-analytics-company',
  templateUrl: './analytics-company.component.html',
  styleUrls: ['./analytics-company.component.scss'],
})
export class AnalyticsCompanyComponent implements OnInit {
  companyName: string = 'IME KOMPANIJE';
  companyViews: number = 43;
  averageTimeOnCompanyPage: number = 17.25;
  standardAds: number = 8;
  premiumAds: number = 2;
  conferencesAndVoulonteerings: number = 3;
  dates: string[] = [];
  myChart: Chart | undefined;
  ads: any[] = [
    {
      adName: 'Junior Software Developer',
      adViews: 23,
      averageTimeOnAdPage: 35.24,
    },
    {
      adName: 'Junior Developer Consultant',
      adViews: 17,
      averageTimeOnAdPage: 24.15,
    },
  ];
  blogs: any[] = [
    {
      blogName: 'Biti bolji prezenter',
      blogViews: 42,
      averageTimeOnBlogPage: 123.29,
    },
  ];
  companyViewsMonth: number[] = [
    1, 0, 3, 2, 1, 2, 3, 4, 2, 2, 4, 0, 0, 0, 4, 23, 2, 1, 3, 4, 5, 6, 2, 4, 1,
    3, 2, 5, 6, 1,
  ];
  averageTimeMonth: number[] = [
    1, 0, 3, 2, 1, 8, 3, 4, 2, 2, 1, 10, 0, 0, 4, 23, 2, 1, 0, 4, 5, 6, 2, 0, 1,
    6, 2, 5, 0, 0,
  ];
  showedData: number[] = this.companyViewsMonth;

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
          this.showedData = this.companyViewsMonth;
          break;
        case 'averageTime':
          this.myChart.data.datasets[0].label = 'Prosečno vreme na stranici';
          this.showedData = this.averageTimeMonth;
          break;
      }

      const showDates = this.dates;
      const select = document.getElementById('time-range') as HTMLSelectElement;
      const days = parseInt(select.value);
      console.log(days);
      
        this.myChart.data.labels = showDates.slice(30 - days, 30);
        this.myChart.data.datasets[0].data = this.showedData.slice(30 - days,30);
        this.myChart.update();
      }
    }
    
}
