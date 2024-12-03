import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: false,

  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  pageTitle = 'Blog';
  pageDescription = 'Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.';

  breadcrumbs = [
    { label: 'Home', url: '/home' },
    { label: 'Blog', url: '' }
  ];

  posts = [
    {
      image: 'assets/img/blog/blog-1.jpg',
      category: 'Politics',
      title: 'Dolorum optio tempore voluptas dignissimos',
      detailsUrl: '/blog-detail',
      authorImage: 'assets/img/blog/blog-author.jpg',
      author: 'Maria Doe',
      date: '2022-01-01'
    },
    {
      image: 'assets/img/blog/blog-2.jpg',
      category: 'Sports',
      title: 'Nisi magni odit consequatur autem nulla dolorem',
      detailsUrl: '/blog-detail',
      authorImage: 'assets/img/blog/blog-author-2.jpg',
      author: 'Allisa Mayer',
      date: '2022-06-05'
    },
    {
      image: 'assets/img/blog/blog-3.jpg',
      category: 'Entertainment',
      title: 'Possimus soluta ut id suscipit ea ut in quo quia et soluta',
      detailsUrl: '/blog-detail',
      authorImage: 'assets/img/blog/blog-author-3.jpg',
      author: 'Mark Dower',
      date: '2022-06-22'
    }
  ];

  pagination = [
    { label: '1', active: false },
    { label: '2', active: true },
    { label: '3', active: false },
    { label: '4', active: false },
    { label: '...', active: false },
    { label: '10', active: false },
  ];
}
