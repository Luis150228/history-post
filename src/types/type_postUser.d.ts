export interface MediaItem {
  type: 'image' | 'video' | 'gif' | 'audio';
  url: string;
  alt_text: string;
  width?: number;
  height?: number;
}

export interface Link {
  url: string;
  title: string;
  description: string;
  image?: string;
}

export interface Author {
  user_id: string;
  username: string;
  profile_picture: string;
  verified: boolean;
}

export interface UserInteraction {
  liked: boolean;
  shared: boolean;
  bookmarked: boolean;
}

export interface Interactions {
  likes?: number;
  comments?: number;
  shares?: number;
  bookmarks?: number;
  views?: number;
  user_interaction?: UserInteraction;
}

export interface UserInteraction {
  liked: boolean;
  shared: boolean;
  bookmarked: boolean;
}

export interface CommentPreview {
  comment_id: string;
  user: {
    user_id: string;
    username: string;
  };
  text: string;
  created_at: string;
  interactions?: Interactions;
  comments_response?: CommentPreview;
}

export interface PrivacySettings {
  visibility: 'public' | 'friends' | 'private' | 'custom';
  allowed_users: string[];
  blocked_users: string[];
}

export interface Monetization {
  is_sponsored: boolean;
  sponsor: string | null;
  ad_metadata: any | null; // Puedes reemplazar 'any' con una interfaz más específica si es necesario
}

export interface PostMetadata {
  created_at: string;
  updated_at: string;
  language: string;
  content_rating: 'safe' | 'sensitive' | 'nsfw';
}

export interface PostContent {
  text: string;
  media?: MediaItem[];
  links?: Link[];
}

export interface SocialMediaPost {
  post_id: string;
  author: Author;
  content: PostContent;
  metadata: PostMetadata;
  interactions: Interactions;
  comments_preview?: CommentPreview[];
  privacy: PrivacySettings;
  monetization: Monetization;
  version: string;
}

export interface Image {
	id: number;
	url: string;
	alt: string;
}

// export interface ImageListItem {
//   type: string
//   url: string
//   alt_text: string
//   width: number
//   height: number
// }