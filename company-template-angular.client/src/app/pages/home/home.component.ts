import { AfterViewInit, Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {
  currentSlideIndex = 0;
  carouselItems = [
    { title: 'Welcome to Moderna', description: 'Ut velit est quam dolor ad a aliquid qui aliquid...' },
    { title: 'Lorem Ipsum Dolor', description: 'Sequi ea ut et est quaerat sequi nihil ut aliquam...' },
    { title: 'Sequi ea ut et est quaerat', description: 'Esse doloremque accusamus repellendus...' }
  ];

  ngOnInit() { }

  ngAfterViewInit(): void {
    GLightbox({
      selector: '.glightbox',
    });
  }

  prevSlide() {
    this.currentSlideIndex =
      this.currentSlideIndex === 0
        ? this.carouselItems.length - 1
        : this.currentSlideIndex - 1;
  }

  nextSlide() {
    this.currentSlideIndex =
      this.currentSlideIndex === this.carouselItems.length - 1
        ? 0
        : this.currentSlideIndex + 1;
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }

  featuredServices = [
    {
      title: 'Nesciunt Mete',
      description: 'Provident nihil minus qui consequatur non omnis maiores...',
      icon: 'bi bi-activity',
      class: 'item-cyan position-relative',
      link: '#'
    },
    {
      title: 'Eosle Commodi',
      description: 'Ut autem aut autem non a...',
      icon: 'bi bi-broadcast',
      class: 'item-orange position-relative',
      link: '#'
    },
    {
      title: 'Ledo Markt',
      description: 'Ut excepturi voluptatem nisi sed...',
      icon: 'bi bi-easel',
      class: 'item-teal position-relative',
      link: '#'
    },
    {
      title: 'Asperiores Commodit',
      description: 'Non et temporibus minus omnis sed dolor esse consequatur...',
      icon: 'bi bi-bounding-box-circles',
      class: 'item-red position-relative',
      link: '#'
    }
  ];

  aboutSection = {
    title: 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
    intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    points: [
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      'Duis aute irure dolor in reprehenderit in voluptate velit.',
      'Ullamco laboris nisi ut aliquip ex ea commodo consequat...'
    ],
    description: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat...'
  };

  features = [
    {
      title: 'Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      description: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat...',
      image: 'assets/img/features-1.svg'
    },
    {
      title: 'Corporis temporibus maiores provident',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      description: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat...',
      image: 'assets/img/features-2.svg'
    },
    {
      title: 'Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas',
      intro: 'Cupiditate placeat cupiditate placeat est ipsam culpa...',
      description: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat...',
      image: 'assets/img/features-3.svg'
    },
    {
      title: 'Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      description: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat...',
      image: 'assets/img/features-4.svg'
    }
  ];

}
