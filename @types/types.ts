export interface Blog {
  type_of: string
  id: number
  title: string
  description: string
  published: boolean
  published_at: string
  slug: string
  path: string
  url: string
  comments_count: number
  public_reactions_count: number
  page_views_count: number
  published_timestamp: string
  body_markdown: string
  positive_reactions_count: number
  cover_image: string
  tag_list: string[]
  canonical_url: string
  reading_time_minutes: number
  user: User
}

export interface User {
  name: string
  username: string
  twitter_username: string
  github_username: string
  user_id: number
  website_url: any
  profile_image: string
  profile_image_90: string
}

export interface ProjectServerResponse {
  projects: Project[];
}

export interface Project {
  description?: string;
  coverImage: { url: string };
  id: string;
  liveLink: string;
  slug: string;
  title: string;
  githubRepoLink: string;
}


export interface ITools {
  id: string;
  logo: {
    url: string;
  };
}