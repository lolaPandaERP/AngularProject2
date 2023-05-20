export interface Resource {
  id: string;
  title: string;
  description: string;
  content: string;
  image_path: string;
  createdBy: string;
  createdAt: string;
  comments?: Comment[];
}
