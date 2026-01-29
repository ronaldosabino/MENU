import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  menuItems: any[] = [
    {
      title: 'Café da manhã & Brunch',
      id: 'breakfast',
      anchor: '#breakfast',
      items: [
        {
          subtitle: 'Café da manhã',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '20',
          image: 'assets/brunch.png',
        },
        {
          subtitle: 'Brunch',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '25',
          image: 'assets/brunch.png',
        },
      ],
    },
    {
      title: 'Almoço',
      id: 'lunch',
      anchor: '#lunch',
      items: [
        {
          subtitle: 'Cupim ao molho madeira',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '38',
          image: 'assets/lunch.png',
        },
        {
          subtitle: 'Frango à parmegiana',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '28',
          image: 'assets/lunch.png',
        },
      ],
    },
    {
      title: 'Sobremesa',
      id: 'dessert',
      anchor: '#dessert',
      items: [
        {
          subtitle: 'Mouse de limão',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '20',
          image: 'assets/dessert.png',
        },
        {
          subtitle: 'Pudim',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '15',
          image: 'assets/dessert.png',
        },
      ],
    },
    {
      title: 'Bebida',
      id: 'drink',
      anchor: '#drink',
      items: [
        {
          subtitle: 'Suco de Laranja',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '18',
          image: 'assets/juice.png',
        },
        {
          subtitle: 'Suco de Maracujá',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '18',
          image: 'assets/juice.png',
        },
      ],
    },
    {
      title: 'Fast Food',
      id: 'fastfood',
      anchor: '#fastfood',
      items: [
        {
          subtitle: 'Hambúrguer Artesanal',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          price: '25',
          image: 'assets/hamburguer.png',
        },
      ],
    },
  ];

  carouselItems: any[] = [
    {
      title: 'Almoço',
      description: 'Temos o melhor menu executivo da região',
      image: 'assets/lunch.png',
    },
    {
      title: 'Sobremesa',
      description: 'Temos a melhor sobremesa da região',
      image: 'assets/dessert.png',
    },
    {
      title: 'Fast Food',
      description: 'Temoso melhor Fast Food da região',
      image: 'assets/fastfood.png',
    },
  ];

  searchTerm: string = '';
  selectedItem: any = null;
  adress: boolean = false;

  get filteredMenuItems() {
    const term = this.searchTerm.toLowerCase().trim();
    if (!term) return this.menuItems;

    return this.menuItems
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (subitem: any) =>
            subitem.subtitle.toLowerCase().includes(term) ||
            section.title.toLowerCase().includes(term),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }

  openModalItem(item: any): void {
    this.selectedItem = item;
    console.log(this.selectedItem);

    document.body.style.overflow = 'hidden'; // trava o scroll
  }

  closeModalItem(): void {
    this.selectedItem = null;
    document.body.style.overflow = ''; // libera o scroll
  }
}
