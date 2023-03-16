export interface ICourse {
  id: string;
  title: string;
  tags: string[];
  launchDate: string;
  status: string;
  description: string;
  duration: number;
  lessonsCount: number;
  containsLockedLessons: boolean;
  previewImageLink: string;
  rating: number;
  meta: {
    slug: string;
    skills: string[];
    courseVideoPreview: {
      link: string;
      duration: number;
      previewImageLink: string;
    };
  };
}

export interface IState {
  token: string | null;
  items: Array<ICourse> | [];
  currentCourse: ICourse | null;
  isLoading: boolean;
  error: string;
  perPage: number;
}
