
export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface ImageBlock {
  type: 'image';
  src: string;
  caption: string;
}

export interface VideoBlock {
  type: 'video';
  videoId: string;
  caption: string;
}

export type ContentBlock = ParagraphBlock | ImageBlock | VideoBlock;

export interface Article {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  author: string;
  date: string;
  readTime: number; // in minutes
  content: ContentBlock[];
}

export type View = 'home' | 'categories' | 'categoryPage' | 'about' | 'contact' | 'faq' | 'documentation' | 'api-status' | 'blog' | 'careers' | 'privacy' | 'terms';
