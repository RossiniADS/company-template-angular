import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-portfolio-details',
  standalone: false,

  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.css'
})
export class PortfolioDetailsComponent implements AfterViewInit {
  pageTitle = 'Portfolio Details';
  pageDescription = 'Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.';
  breadcrumbs = [
    { label: 'Home', url: 'index.html' },
    { label: 'Portfolio Details', url: '', current: true }
  ];

  ngAfterViewInit(): void {
    new Swiper('.mySwiper', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        "type": "bullets",
        clickable: true,
      }
    });
  }

  swiperSlides = [
    'assets/img/portfolio/app-1.jpg',
    'assets/img/portfolio/product-1.jpg',
    'assets/img/portfolio/branding-1.jpg',
    'assets/img/portfolio/books-1.jpg'
  ];

  projectInfo = {
    category: 'Web design',
    client: 'ASU Company',
    projectDate: '01 March, 2020',
    projectUrl: 'www.example.com'
  };

  portfolioDescription = {
    title: 'Exercitationem repudiandae officiis neque suscipit',
    text: `Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.`
  };
}
