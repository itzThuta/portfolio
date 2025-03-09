import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  toggleMenu(): void {
    if (isPlatformBrowser(this.platformId)) {
      const menu = this.document.querySelector('.menu-links') as HTMLElement;
      const icon = this.document.querySelector(
        '.hamburger-icon'
      ) as HTMLElement;

      if (menu && icon) {
        menu.classList.toggle('open');
        icon.classList.toggle('open');
      }
    }
  }

  email = 'kuku.zayn@gmail.com';

  telegram = '@itz_not_thuta';

  projects = [
    // {
    //   title: 'Audiobook App',
    //   description:
    //     'The Audiobook App is a user-friendly platform that allows users to listen to books online without worrying about device storage. Instead of downloading large files, the app streams audiobooks directly using YouTube links, ensuring a seamless listening experience. Built with Flutter for a smooth and responsive UI, the app is powered by a robust backend using Node.js, Express.js, and PostgreSQL for efficient data management. It also integrates essential Flutter dependencies to enhance functionality, providing a convenient and accessible way to enjoy audiobooks anytime, anywhere.',
    //   technologies: 'Flutter, Api, Postgresql, NodeJS',
    //   images: ['./assets/ss7.png', './assets/ss5.png', './assets/ss6.png'],
    //   github: '',
    //   demo: '',
    //   activeIndex: 0, 
    // },
    {
      title: 'Admin Panel for Audiobook App',
      description:
        'The Admin Panel for the Audiobook App is a web-based dashboard that allows administrators to manage users and books efficiently. It provides features to view user lists and book lists, as well as options to create, update, and delete records. Built with React.js for the frontend and powered by Node.js, Express.js, and PostgreSQL for the backend, the panel ensures seamless data management through a secure API. This system helps streamline audiobook content and user administration, making it easier to maintain and organize the platform effectively.',
      technologies: 'ReactJS, Tailwind, Postgresql, NodeJS',
      images: ['./assets/ss4.png', './assets/ss5.png', './assets/ss6.png'],
      github: 'https://github.com/itzThuta/admin-audiobook-app',
      demo: '',
      activeIndex: 0, // For tracking active image in carousel
    },
    {
      title: 'Weather Forecast App',
      description:
        "The Weather App is a user-friendly and visually appealing application designed to provide real-time weather updates. Whether you're planning a trip, checking local weather, or staying informed about global conditions, this app offers accurate and up-to-date weather information at your fingertips.",
      technologies: 'Angular, Bootstrap, OpenAPI',
      images: [
        './assets/weather-1.png',
        './assets/weather-2.png',
        './assets/weather-3.png',
      ],
      github: 'https://github.com/itzThuta/weather-app',
      demo: 'https://thuta-weather-app.vercel.app',
      activeIndex: 0,
    },
  ];

  openLink(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank');
    }
  }

  ngOnInit() {
    // Ensure auto-slide runs only in browser
    if (isPlatformBrowser(this.platformId)) {
      this.projects.forEach((project, index) => {
        setInterval(() => {
          project.activeIndex =
            (project.activeIndex + 1) % project.images.length;
        }, 3000); // Change image every 3 seconds
      });
    }
  }
}
