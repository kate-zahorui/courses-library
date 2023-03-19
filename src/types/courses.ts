export interface IMeta {
  slug: string;
  skills: string[];
  courseVideoPreview: {
    link: string;
    duration: number;
    previewImageLink: string;
  };
}

export interface ICourseCommon {
  containsLockedLessons: boolean;
  description: string;
  duration: number;
  id: string;
  launchDate: string;
  meta: IMeta;
  previewImageLink: string;
  rating: number;
  status: string;
  tags: string[];
  title: string;
}

export interface ILesson {
  duration: number;
  id: string;
  link: string;
  meta: IMeta | null;
  order: number;
  previewImageLink: string;
  status: string;
  title: string;
  type: string;
}

export interface ICourse extends ICourseCommon {
  lessonsCount: number;
}

export interface ICourseDetails extends ICourseCommon {
  lessons: ILesson[];
}

export interface IState {
  token: string | null;
  items: Array<ICourse> | [];
  currentCourse: ICourseDetails | null;
  isLoading: boolean;
  error: string;
  isModalShown: boolean;
}
