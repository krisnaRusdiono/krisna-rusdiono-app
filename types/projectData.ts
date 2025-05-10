import { StaticImageData } from 'next/image';

export interface ProjectData {
  projectId: string;
  projectName: string;
  projectYearStart: string;
  projectYearEnd: string;
  projectDescription: string;
  projectDescriptionLong: string;
  imgThumbnail: StaticImageData;
  techStackUrl?: (string | StaticImageData)[];
}
