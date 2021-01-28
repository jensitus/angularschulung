export interface Book {
  isbn?: string;
  cover?: string;
  numPages?: number;
  title: string;
  subtitle?: string;
  author: string;
  abstract?: string;
  publisher?: {name: string, url: string};
}
