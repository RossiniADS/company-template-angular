import { AfterViewInit, Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {
  currentSlideIndex = 0;
  carouselItems = [
    { title: 'Santa Casa de Lorena', description: 'Portal voltado a comunicação interna dos funcionários para facilitar o compartilhamento de informações, documentos e recursos entre os colaboradores.' },
    //{ title: 'Lorem Ipsum Dolor', description: 'Sequi ea ut et est quaerat sequi nihil ut aliquam...' },
    //{ title: 'Sequi ea ut et est quaerat', description: 'Esse doloremque accusamus repellendus...' }
  ];

  ngOnInit() {
    register()
  }

  ngAfterViewInit(): void {
    GLightbox({
      selector: '.glightbox',
    });

    new Swiper('.mySwiper', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        "type": "bullets",
        clickable: true,
      }
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

  pricingPlans = [
    {
      title: 'Comunicados Internos',
      price: '49',
      period: '/ month',
      image: 'assets/img/comunicado.png',
      description: 'Alguma coisa ai!'
    },
    {
      title: 'Aniversáriantes do mês',
      price: '49',
      period: '/ month',
      image: 'assets/img/aniversariantes.png',
      description: 'Alguma coisa ai!'
    },
    {
      title: 'Cardápio da semana',
      price: '0',
      period: '/ month',
      image: 'assets/img/cardapio.png',
      description: 'Lista dos cardapios da semana'
    },
    {
      title: 'Diretoria Técnica ',
      price: '29',
      period: '/ month',
      image: 'assets/img/diretoria.png',
      description: 'Nossa diretoria'
    },
  ];

}
