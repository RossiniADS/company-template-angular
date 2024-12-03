import { AfterViewInit, Component, OnInit } from '@angular/core';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements AfterViewInit, OnInit {
  pageTitle = 'Portfolio';
  pageDescription = 'Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.';
  homeLink = '/';
  homeLabel = 'Home';
  currentPage = 'Portfolio';

  portfolioFilters = [
    { label: 'All', filterKey: '*', isActive: true },
    { label: 'App', filterKey: '.filter-app', isActive: false },
    { label: 'Product', filterKey: '.filter-product', isActive: false },
    { label: 'Branding', filterKey: '.filter-branding', isActive: false },
    { label: 'Books', filterKey: '.filter-books', isActive: false }
  ];

  portfolioItems = [
    { title: 'App 1', description: 'Lorem ipsum, dolor sit amet consectetur', image: 'assets/img/portfolio/app-1.jpg', category: 'filter-app', detailsLink: '/portfolio-detail' },
    { title: 'Product 1', description: 'Lorem ipsum, dolor sit amet consectetur', image: 'assets/img/portfolio/product-1.jpg', category: 'filter-product', detailsLink: '/portfolio-detail' },
    { title: 'Branding 1', description: 'Lorem ipsum, dolor sit amet consectetur', image: 'assets/img/portfolio/branding-1.jpg', category: 'filter-branding', detailsLink: '/portfolio-detail' },
    { title: 'Books 1', description: 'Lorem ipsum, dolor sit amet consectetur', image: 'assets/img/portfolio/books-1.jpg', category: 'filter-books', detailsLink: '/portfolio-detail' },
    { title: 'App 2', description: 'Lorem ipsum, dolor sit amet consectetur', image: 'assets/img/portfolio/app-2.jpg', category: 'filter-app', detailsLink: '/portfolio-detail' },
    { title: 'Product 2', description: 'Lorem ipsum, dolor sit amet consectetur', image: 'assets/img/portfolio/product-2.jpg', category: 'filter-product', detailsLink: '/portfolio-detail' },
    { title: 'Branding 2', description: 'Lorem ipsum, dolor sit amet consectetur', image: 'assets/img/portfolio/branding-2.jpg', category: 'filter-branding', detailsLink: '/portfolio-detail' },
    { title: 'Books 2', description: 'Lorem ipsum, dolor sit amet consectetur', image: 'assets/img/portfolio/books-2.jpg', category: 'filter-books', detailsLink: '/portfolio-detail' },
    { title: 'App 3', description: 'Lorem ipsum, dolor sit amet consectetur', image: 'assets/img/portfolio/app-3.jpg', category: 'filter-app', detailsLink: '/portfolio-detail' },
    { title: 'Product 3', description: 'Lorem ipsum, dolor sit amet consectetur', image: 'assets/img/portfolio/product-3.jpg', category: 'filter-product', detailsLink: '/portfolio-detail' },
    { title: 'Branding 3', description: 'Lorem ipsum, dolor sit amet consectetur', image: 'assets/img/portfolio/branding-3.jpg', category: 'filter-branding', detailsLink: '/portfolio-detail' },
    { title: 'Books 3', description: 'Lorem ipsum, dolor sit amet consectetur', image: 'assets/img/portfolio/books-3.jpg', category: 'filter-books', detailsLink: '/portfolio-detail' }
  ];

  filteredPortfolioItems = this.portfolioItems;

  isotope: any;

  ngAfterViewInit(): void {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true
    });

    const elem = document.querySelector('.isotope-container') as HTMLElement;
    if (elem) {
      imagesLoaded(elem, () => {
        this.isotope = new Isotope(elem, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows'
        });
      });
    } else {
      console.warn('Elemento .isotope-container não encontrado no DOM.');
    }
  }

  ngOnInit(): void {
    this.applyFilter('*');
  }

  applyFilter(filterKey: string): void {
    // Atualiza os estados dos filtros ativos
    this.portfolioFilters.forEach(filter => filter.isActive = filter.filterKey === filterKey);

    // Aplica o filtro no Isotope
    const filterValue = filterKey === '*' ? '*' : filterKey;
    if (this.isotope) {
      this.isotope.arrange({ filter: filterValue });
      this.isotope.layout(); // Certifique-se de recalcular o layout
    } else {
      console.error('Isotope não foi inicializado.');
    }
  }

}
