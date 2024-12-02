import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-detail',
  standalone: false,

  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {

  // Título e descrição da página
  pageTitle: string = 'Blog Post Title';
  pageDescription: string = 'This is a detailed description of the blog post.';

  // Breadcrumbs
  breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Blog Post', url: '/blog-details' }
  ];

  post = {
    image: 'assets/img/blog/blog-1.jpg',
    title:
      'Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia',
    author: 'John Doe',
    date: '2022-01-01',
    dateFormatted: 'Jan 1, 2022', // Formatted version of the date
    comments: 12,

    // Post content
    content: [
      'Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.',
      'Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.',
    ],
    quote:
      'Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam doloribus minus autem quos.',

    // Subheadings with content
    subheadings: [
      {
        title: 'Et quae iure vel ut odit alias.',
        content: `
          Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
        `,
      },
      {
        title: 'Ut repellat blanditiis est dolore sunt dolorum quae.',
        content: `
          Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
        `,
      },
    ],

    insideImage: 'assets/img/blog/blog-inside-post.jpg',

    // Categories and Tags
    categories: ['Business'],
    tags: ['Creative', 'Tips', 'Marketing'],
  };

  // Lista de comentários
  comments = [
    {
      author: 'Alice Smith',
      imgSrc: 'assets/img/blog/comments-1.jpg',
      imgAlt: 'Alice Avatar',
      date: '2024-12-01T10:00:00Z',
      formattedDate: 'December 1, 2024',
      text: 'This is a comment on the blog post. Very interesting content!',
      replies: [
        {
          author: 'John Doe',
          imgSrc: 'assets/img/blog/comments-2.jpg',
          imgAlt: 'John Avatar',
          date: '2024-12-01T11:00:00Z',
          formattedDate: 'December 1, 2024',
          text: 'I agree with this point!'
        }
      ],
      showReplyForm: false,
      replyText: ''
    },
    {
      author: 'Bob Johnson',
      imgSrc: 'assets/img/blog/comments-3.jpg',
      imgAlt: 'Bob Avatar',
      date: '2024-12-01T11:30:00Z',
      formattedDate: 'December 1, 2024',
      text: 'I really enjoyed reading this. Great insights, thanks for sharing!',
      replies: [],
      showReplyForm: false,
      replyText: ''
    }
  ];

  toggleReply(commentIndex: number, replyIndex?: number): void {
    if (replyIndex === undefined) {
      this.comments[commentIndex].showReplyForm = !this.comments[commentIndex].showReplyForm;
    } else {
      // Expand logic for reply handling if necessary
    }
  }

  submitReply(commentIndex: number): void {
    const comment = this.comments[commentIndex];
    if (comment.replyText.trim()) {
      comment.replies.push({
        author: 'You', // Replace with the current user if necessary
        imgSrc: 'assets/img/blog/comments-user.jpg', // Replace with user image
        imgAlt: 'User Avatar',
        date: new Date().toISOString(),
        formattedDate: new Date().toLocaleDateString(),
        text: comment.replyText
      });
      comment.replyText = ''; // Clear reply input
      comment.showReplyForm = false; // Hide reply form
    }
  }

  // Categorias disponíveis
  categories = [
    { name: 'Technology', count: 5 },
    { name: 'Web Development', count: 7 },
    { name: 'Design', count: 3 },
    { name: 'Business', count: 2 },
    { name: 'SEO', count: 4 }
  ];

  // Posts recentes
  recentPosts = [
    { title: 'How to Learn Angular', imgSrc: 'assets/img/blog/blog-recent-1.jpg', imgAlt: 'Post 1', date: '2024-11-25T08:00:00Z', formattedDate: 'November 25, 2024' },
    { title: 'Introduction to TypeScript', imgSrc: 'assets/img/blog/blog-recent-2.jpg', imgAlt: 'Post 2', date: '2024-11-22T10:30:00Z', formattedDate: 'November 22, 2024' },
    { title: 'Best Practices in Web Development', imgSrc: 'assets/img/blog/blog-recent-3.jpg', imgAlt: 'Post 3', date: '2024-11-20T09:15:00Z', formattedDate: 'November 20, 2024' }
  ];

  // Dados do autor do blog
  authorWidget = {
    imgSrc: 'assets/img/blog/blog-author.jpg',
    imgAlt: 'Author Avatar',
    name: 'Jane Doe',
    socialLinks: [
      { icon: 'bi bi-twitter', url: 'https://twitter.com/janedoe' },
      { icon: 'bi bi-facebook', url: 'https://facebook.com/janedoe' },
      { icon: 'bi bi-linkedin', url: 'https://linkedin.com/in/janedoe' }
    ],
    bio: 'Jane Doe is a passionate writer and developer who loves to share knowledge about the latest trends in technology and web development.'
  };

  constructor() { }

  ngOnInit(): void {
    // Aqui você pode carregar dados adicionais se necessário, como chamar APIs ou serviços.
  }
}
