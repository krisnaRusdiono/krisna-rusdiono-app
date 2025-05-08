import { ProjectData } from '@/types/projectData';
import AkselHr from '@/public/images/aksel-hr.png';
import AsiaMoney from '@/public/images/asia-money.png';
import Ezrx from '@/public/images/ezrx.png';
import Anbk from '@/public/images/anbk.png';
import Unavailable from '@/public/images/unavailable-image.jpg';
import Sfa from '@/public/images/sfa.png';
import WasteManagement from '@/public/images/waste-management.png';
import Dbs from '@/public/images/dbs.png';
import Vitclaim from '@/public/images/vitclaim.png';

const PROJECT_DATA: ProjectData[] = [
  {
    projectId: 'project-1',
    projectName: 'AkselHR',
    projectYearStart: '2025',
    projectYearEnd: '2025',
    projectDescription: 'HRIS App for Managing HR core task and data',
    imgThumbnail: AkselHr,
  },
  {
    projectId: 'project-2',
    projectName: 'Asia Money Finance News and Forums',
    projectYearStart: '2024',
    projectYearEnd: '2025',
    projectDescription: 'App Information for Crypto/Stocks Update',
    imgThumbnail: AsiaMoney,
  },
  {
    projectId: 'project-3',
    projectName: 'APL Customer Portal',
    projectYearStart: '2021 & 2025',
    projectYearEnd: '2021 & 2025',
    projectDescription: 'Pharmacy B2B App for Buying Medicines and others',
    imgThumbnail: Ezrx,
  },
  {
    projectId: 'project-4',
    projectName: 'Asesmen Nasional Berbasis Komputer (ANBK)',
    projectYearStart: '2023',
    projectYearEnd: '2024',
    projectDescription:
      'A National-level Assessment App to evaluate the quality of education in Indonesia',
    imgThumbnail: Anbk,
  },
  {
    projectId: 'project-5',
    projectName: 'Biofarma Audity Management System',
    projectYearStart: '2024',
    projectYearEnd: '2024',
    projectDescription: 'App for helping manager to manage internal audit',
    imgThumbnail: Unavailable,
  },
  {
    projectId: 'project-6',
    projectName: 'Sales Workforce Automatic',
    projectYearStart: '2023',
    projectYearEnd: '2024',
    projectDescription: 'App for monitoring and tracking sales activity',
    imgThumbnail: Sfa,
  },
  {
    projectId: 'project-7',
    projectName: 'Waste Management App',
    projectYearStart: '2023',
    projectYearEnd: '2023',
    projectDescription:
      'App for selling and recycling domestic waste from Danone',
    imgThumbnail: WasteManagement,
  },
  {
    projectId: 'project-8',
    projectName: 'DBS Bank Retainer',
    projectYearStart: '2021 & 2023',
    projectYearEnd: '2021 & 2023',
    projectDescription: 'Maintenance DBS Bank for regional Indonesia',
    imgThumbnail: Dbs,
  },
  {
    projectId: 'project-9',
    projectName: 'Vitclaim System Maintenance',
    projectYearStart: '2023 & 2025',
    projectYearEnd: '2023 & 2025',
    projectDescription:
      "Maintenance app and it' security for claiming invoice, reimburse and other from Danone",
    imgThumbnail: Vitclaim,
  },
  {
    projectId: 'project-10',
    projectName: 'Binus Curriculum Management System',
    projectYearStart: '2022 - 2023',
    projectYearEnd: '2022 - 2023',
    projectDescription: 'App for Managing Curriculum in Binus University',
    imgThumbnail: Unavailable,
  },
];

export default PROJECT_DATA;