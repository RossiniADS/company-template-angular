import { Component } from '@angular/core';

@Component({
  selector: 'app-service-details',
  standalone: false,

  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})
export class ServiceDetailsComponent {
  pageTitle = 'Service Details';
  pageDescription = 'Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.';
  breadcrumbs = [
    { label: 'Home', link: '/home' },
    { label: 'Service Details', link: '' }
  ];

  servicesListTitle = 'Services List';
  servicesList = [
    { name: 'Web Design', active: true },
    { name: 'Web Design', active: false },
    { name: 'Product Management', active: false },
    { name: 'Graphic Design', active: false },
    { name: 'Marketing', active: false }
  ];

  downloadCatalogTitle = 'Download Catalog';
  downloadCatalog = [
    { label: 'Catalog PDF', link: '#', icon: 'bi bi-filetype-pdf' },
    { label: 'Catalog DOC', link: '#', icon: 'bi bi-file-earmark-word' }
  ];

  helpTitle = 'Have a Question?';
  helpPhone = '+1 5589 55488 55';
  helpEmail = 'contactexample.com';

  serviceImage = 'assets/img/services.jpg';
  serviceTitle = 'Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas';
  serviceDescription = `Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. 
                        Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.`;

  serviceBenefits = [
    'Aut eum totam accusantium voluptatem.',
    'Assumenda et porro nisi nihil nesciunt voluptatibus.',
    'Ullamco laboris nisi ut aliquip ex ea'
  ];

  additionalInfo = [
    'Est reprehenderit voluptatem necessitatibus asperiores neque sed ea illo. Deleniti quam sequi optio iste veniam repellat odit. Aut pariatur itaque nesciunt fuga.',
    'Sunt rem odit accusantium omnis perspiciatis officia. Laboriosam aut consequuntur recusandae mollitia doloremque est architecto cupiditate ullam. Quia est ut occaecati fuga. Distinctio ex repellendus eveniet velit sint quia sapiente cumque. Et ipsa perferendis ut nihil.'
  ];
}
