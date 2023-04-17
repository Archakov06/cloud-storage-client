import { User } from "@/api/dto/auth.dto";

export interface FileItem {
  filename: string;
  originalName: string;
  size: number;
  mimetype: string;
  user: User;
  deletedAt: string | null;
  id: number;
}
