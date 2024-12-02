import { AfterViewInit, Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';
import PureCounter from '@srexi/purecounterjs';
import Swiper from 'swiper';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit, OnInit {
  ngOnInit() { }

  ngAfterViewInit(): void {
    GLightbox({
      selector: '.glightbox',
    });

    new PureCounter();

    new Swiper('.mySwiper', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      //pagination: {
      //  el: '.swiper-pagination',
      //  "type": "bullets",
      //  clickable: true,
      //},
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120,
        },
      },
    });

    new Swiper('.mySwiper2', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        "type": "bullets",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 60,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 80,
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 120,
        },
      },
    });
  }

  pageTitle = 'About';
  pageDescription = 'Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.';
  breadcrumb = 'About';

  aboutImage = 'assets/img/about.jpg';
  aboutImageAlt = 'About Us';
  aboutVideoUrl = 'https://www.youtube.com/watch?v=Y7f98aduVJ8';
  aboutTitle = 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.';
  aboutIntro = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  aboutBenefits = [
    'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit.',
    'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.'
  ];
  aboutDescription = 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident';

  stats = [
    { label: 'Clients', value: 232, duration: 1 },
    { label: 'Projects', value: 521, duration: 1 },
    { label: 'Hours Of Support', value: 1453, duration: 1 },
    { label: 'Workers', value: 32, duration: 1 }
  ];

  clients = [
    { image: 'assets/img/clients/client-1.png', name: 'Client 1' },
    { image: 'assets/img/clients/client-2.png', name: 'Client 2' },
    { image: 'assets/img/clients/client-3.png', name: 'Client 3' },
    { image: 'assets/img/clients/client-4.png', name: 'Client 4' },
    { image: 'assets/img/clients/client-5.png', name: 'Client 5' },
    { image: 'assets/img/clients/client-6.png', name: 'Client 6' },
    { image: 'assets/img/clients/client-7.png', name: 'Client 7' },
    { image: 'assets/img/clients/client-8.png', name: 'Client 8' },
  ];

  skillsTitle = 'Our Skills';
  skillsDescription = 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit';
  skills = [
    [
      { name: 'HTML', value: 100 },
      { name: 'CSS', value: 90 },
      { name: 'JavaScript', value: 75 }
    ],
    [
      { name: 'PHP', value: 80 },
      { name: 'WordPress/CMS', value: 90 },
      { name: 'Photoshop', value: 55 }
    ]
  ];

  testimonialsTitle = 'Testimonials';
  testimonialsDescription = 'Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit';
  testimonials = [
    {
      image: 'assets/img/testimonials/testimonials-1.jpg',
      name: 'Saul Goodman',
      role: 'CEO & Founder',
      stars: 5,
      message: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.'
    },
    {
      image: 'assets/img/testimonials/testimonials-2.jpg',
      name: 'Sara Wilsson',
      role: 'Designer',
      stars: 5,
      message: 'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.'
    },
    {
      image: 'assets/img/testimonials/testimonials-3.jpg',
      name: 'Jena Karlis',
      role: 'Store Owner',
      stars: 5,
      message: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.'
    },
    {
      image: 'assets/img/testimonials/testimonials-4.jpg',
      name: 'Matt Brandon',
      role: 'Freelancer',
      stars: 5,
      message: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.'
    },
    {
      image: 'assets/img/testimonials/testimonials-5.jpg',
      name: 'John Larson',
      role: 'Entrepreneur',
      stars: 5,
      message: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.'
    }
  ];
}
