// paginated-list.component.ts
import { AfterViewInit, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-paginated-list',
  templateUrl: './paginated-list.component.html',
  styleUrls: ['./paginated-list.component.css']
})
export class PaginatedListComponent{
  @Input() items: any[] = [];
  @Input() itemTemplate!: TemplateRef<any>;
  @Input() isOneColumn!: boolean;
  @Input() pageSize: number = 6;
  
  currentPage = 1;

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.items.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.items.length / this.pageSize);
  }

  setPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  get pageNumbers() {
    const pages = [];
    const totalPages = this.totalPages;

    const startPage = Math.max(1, this.currentPage - 1);
    const endPage = Math.min(totalPages, this.currentPage + 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  }
}
