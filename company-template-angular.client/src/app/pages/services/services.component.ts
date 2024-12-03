import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,

  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  pageTitle = 'Services';
  pageSubtitle = 'Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.';
  breadcrumbs = [
    { name: 'Home', link: 'index.html' },
    { name: 'Services', link: '', current: true }
  ];


  featuredServices = [
    {
      title: 'Nesciunt Mete',
      description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
      icon: 'bi bi-activity',
      link: '/service-detail',
      styleClass: 'item-cyan'
    },
    {
      title: 'Eosle Commodi',
      description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
      icon: 'bi bi-broadcast',
      link: '/service-detail',
      styleClass: 'item-orange'
    },
    {
      title: 'Ledo Markt',
      description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
      icon: 'bi bi-easel',
      link: '/service-detail',
      styleClass: 'item-teal'
    },
    {
      title: 'Asperiores Commodit',
      description: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
      icon: 'bi bi-bounding-box-circles',
      link: '/service-detail',
      styleClass: 'item-red'
    }
  ];

  servicesWithImages = [
    {
      title: 'Nesciunt Mete',
      description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.',
      image: 'assets/img/services-1.jpg',
      link: '/service-detail'
    },
    {
      title: 'Eosle Commodi',
      description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
      image: 'assets/img/services-2.jpg',
      link: '/service-detail'
    },
    {
      title: 'Ledo Markt',
      description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
      image: 'assets/img/services-3.jpg',
      link: '/service-detail'
    },
    {
      title: 'Asperiores Commodit',
      description: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
      image: 'assets/img/services-4.jpg',
      link: '/service-detail'
    }
  ];

  pricingPlans = [
    {
      title: 'Free Plan',
      price: '0',
      period: '/ month',
      features: [
        { text: 'Quam adipiscing vitae proin', available: true },
        { text: 'Nec feugiat nisl pretium', available: true },
        { text: 'Nulla at volutpat diam uteera', available: true },
        { text: 'Pharetra massa massa ultricies', available: false },
        { text: 'Massa ultricies mi quis hendrerit', available: false }
      ]
    },
    {
      title: 'Business Plan',
      price: '29',
      period: '/ month',
      features: [
        { text: 'Quam adipiscing vitae proin', available: true },
        { text: 'Nec feugiat nisl pretium', available: true },
        { text: 'Nulla at volutpat diam uteera', available: true },
        { text: 'Pharetra massa massa ultricies', available: true },
        { text: 'Massa ultricies mi quis hendrerit', available: true }
      ]
    },
    {
      title: 'Developer Plan',
      price: '49',
      period: '/ month',
      features: [
        { text: 'Quam adipiscing vitae proin', available: true },
        { text: 'Nec feugiat nisl pretium', available: true },
        { text: 'Nulla at volutpat diam uteera', available: true },
        { text: 'Pharetra massa massa ultricies', available: true },
        { text: 'Massa ultricies mi quis hendrerit', available: true }
      ]
    }
  ];
}
