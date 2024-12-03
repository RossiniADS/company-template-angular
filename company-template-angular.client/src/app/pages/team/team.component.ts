import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: false,

  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  pageTitle = {
    title: 'Team',
    description: 'Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.',
    breadcrumbs: [
      { label: 'Home', link: 'index.html', current: false },
      { label: 'Team', link: '', current: true }
    ]
  };

  teamMembers = [
    {
      name: 'Walter White',
      position: 'Chief Executive Officer',
      description: 'Aliquam iure quaerat voluptatem praesentium possimus unde laudantium vel dolorum distinctio dire flow',
      imgSrc: 'assets/img/team/team-1.jpg',
      socialLinks: [
        { icon: 'bi bi-twitter-x', link: '#' },
        { icon: 'bi bi-facebook', link: '#' },
        { icon: 'bi bi-instagram', link: '#' },
        { icon: 'bi bi-linkedin', link: '#' }
      ]
    },
    {
      name: 'Sarah Jhonson',
      position: 'Product Manager',
      description: 'Labore ipsam sit consequatur exercitationem rerum laboriosam laudantium aut quod dolores exercitationem ut',
      imgSrc: 'assets/img/team/team-2.jpg',
      socialLinks: [
        { icon: 'bi bi-twitter-x', link: '#' },
        { icon: 'bi bi-facebook', link: '#' },
        { icon: 'bi bi-instagram', link: '#' },
        { icon: 'bi bi-linkedin', link: '#' }
      ]
    },
    {
      name: 'William Anderson',
      position: 'CTO',
      description: 'Illum minima ea autem doloremque ipsum quidem quas aspernatur modi ut praesentium vel tque sed facilis at qui',
      imgSrc: 'assets/img/team/team-3.jpg',
      socialLinks: [
        { icon: 'bi bi-twitter-x', link: '#' },
        { icon: 'bi bi-facebook', link: '#' },
        { icon: 'bi bi-instagram', link: '#' },
        { icon: 'bi bi-linkedin', link: '#' }
      ]
    },
    {
      name: 'Amanda Jepson',
      position: 'Accountant',
      description: 'Magni voluptatem accusamus assumenda cum nisi aut qui dolorem voluptate sed et veniam quasi quam consectetur',
      imgSrc: 'assets/img/team/team-4.jpg',
      socialLinks: [
        { icon: 'bi bi-twitter-x', link: '#' },
        { icon: 'bi bi-facebook', link: '#' },
        { icon: 'bi bi-instagram', link: '#' },
        { icon: 'bi bi-linkedin', link: '#' }
      ]
    },
    {
      name: 'Brian Doe',
      position: 'Marketing',
      description: 'Qui consequuntur quos accusamus magnam quo est molestiae eius laboriosam sunt doloribus quia impedit laborum velit',
      imgSrc: 'assets/img/team/team-5.jpg',
      socialLinks: [
        { icon: 'bi bi-twitter-x', link: '#' },
        { icon: 'bi bi-facebook', link: '#' },
        { icon: 'bi bi-instagram', link: '#' },
        { icon: 'bi bi-linkedin', link: '#' }
      ]
    },
    {
      name: 'Josepha Palas',
      position: 'Operation',
      description: 'Sint sint eveniet explicabo amet consequatur nesciunt error enim rerum earum et omnis fugit eligendi cupiditate vel',
      imgSrc: 'assets/img/team/team-6.jpg',
      socialLinks: [
        { icon: 'bi bi-twitter-x', link: '#' },
        { icon: 'bi bi-facebook', link: '#' },
        { icon: 'bi bi-instagram', link: '#' },
        { icon: 'bi bi-linkedin', link: '#' }
      ]
    }
  ];
}
