import { ProjectData } from '@/types/projectData';
import AkselHr from '@/public/images/aksel-hr.png';
import AsiaMoney from '@/public/images/asia-money.png';
import Ezrx from '@/public/images/ezrx.png';
import Anbk from '@/public/images/anbk.png';
import Sfa from '@/public/images/sfa.png';
import WasteManagement from '@/public/images/waste-management.png';
import Dbs from '@/public/images/dbs.png';
import Vitclaim from '@/public/images/vitclaim.png';
import BioAudit from '@/public/images/bioaudit.jpg';
import Crm from '@/public/images/crm.png';
import Mui from '@/public/images/mui-library.png';
import Tanstack from '@/public/images/tanstack-query.png';
import NetMvc from '@/public/images/net-mvc.png';
import LiferayDxp from '@/public/images/liferay.png';
import Antd from '@/public/images/antd.svg';

const PROJECT_DATA: ProjectData[] = [
  {
    projectId: 'project-1',
    projectName: 'AkselHR',
    projectYearStart: '2025',
    projectYearEnd: '2025',
    projectDescription: 'HRIS App for Managing HR core task and data',
    imgThumbnail: AkselHr,
    techStackUrl: [
      'https://static.cdnlogo.com/logos/n/80/next-js.svg',
      'https://static.cdnlogo.com/logos/t/34/tailwind-css.svg',
      Mui,
      Tanstack,
      'https://static.cdnlogo.com/logos/t/96/typescript.svg',
    ],
  },
  {
    projectId: 'project-2',
    projectName: 'Asia Money Finance News and Forums',
    projectYearStart: '2024',
    projectYearEnd: '2025',
    projectDescription: 'App Information for Crypto/Stocks Update',
    imgThumbnail: AsiaMoney,
    techStackUrl: [
      'https://static.cdnlogo.com/logos/n/80/next-js.svg',
      'https://static.cdnlogo.com/logos/t/34/tailwind-css.svg',
      Mui,
      Tanstack,
      'https://static.cdnlogo.com/logos/t/96/typescript.svg',
    ],
  },
  {
    projectId: 'project-3',
    projectName: 'APL Customer Portal',
    projectYearStart: '2021',
    projectYearEnd: '2025',
    projectDescription: 'Pharmacy B2B App for Buying Medicines and others',
    imgThumbnail: Ezrx,
    techStackUrl: [
      'https://static.cdnlogo.com/logos/a/51/angular.svg',
      'https://static.cdnlogo.com/logos/b/74/bootstrap-5.svg',
      'https://static.cdnlogo.com/logos/r/44/rxjs.svg',
      'https://static.cdnlogo.com/logos/t/96/typescript.svg',
    ],
  },
  {
    projectId: 'project-4',
    projectName: 'Asesmen Nasional Berbasis Komputer (ANBK)',
    projectYearStart: '2023',
    projectYearEnd: '2024',
    projectDescription:
      'A National-level Assessment App to evaluate the quality of education in Indonesia',
    imgThumbnail: Anbk,
    techStackUrl: [
      NetMvc,
      'https://static.cdnlogo.com/logos/b/74/bootstrap-5.svg',
      'https://static.cdnlogo.com/logos/j/44/javascript.svg',
    ],
  },
  {
    projectId: 'project-5',
    projectName: 'Biofarma Audity Management System',
    projectYearStart: '2024',
    projectYearEnd: '2024',
    projectDescription: 'App for helping manager to manage internal audit',
    imgThumbnail: BioAudit,
    techStackUrl: [
      'https://static.cdnlogo.com/logos/d/6/dot-net-core.svg',
      'https://static.cdnlogo.com/logos/b/74/bootstrap-5.svg',
    ],
  },
  {
    projectId: 'project-6',
    projectName: 'Sales Workforce Automatic',
    projectYearStart: '2023',
    projectYearEnd: '2024',
    projectDescription: 'App for monitoring and tracking sales activity',
    imgThumbnail: Sfa,
    techStackUrl: [
      NetMvc,
      'https://static.cdnlogo.com/logos/b/74/bootstrap-5.svg',
      'https://static.cdnlogo.com/logos/j/44/javascript.svg',
    ],
  },
  {
    projectId: 'project-7',
    projectName: 'Waste Management App',
    projectYearStart: '2023',
    projectYearEnd: '2023',
    projectDescription:
      'App for selling and recycling domestic waste from Danone',
    imgThumbnail: WasteManagement,
    techStackUrl: [
      'https://static.cdnlogo.com/logos/n/80/next-js.svg',
      'https://static.cdnlogo.com/logos/t/34/tailwind-css.svg',
      Mui,
      Tanstack,
      'https://static.cdnlogo.com/logos/t/96/typescript.svg',
    ],
  },
  {
    projectId: 'project-8',
    projectName: 'DBS Bank Retainer',
    projectYearStart: '2021',
    projectYearEnd: '2023',
    projectDescription: 'Maintenance DBS Bank for regional Indonesia',
    imgThumbnail: Dbs,
    techStackUrl: [LiferayDxp],
  },
  {
    projectId: 'project-9',
    projectName: 'Vitclaim System Maintenance',
    projectYearStart: '2023',
    projectYearEnd: '2025',
    projectDescription:
      "Maintenance app and it's security for claiming invoice, reimburse and other from Danone",
    imgThumbnail: Vitclaim,
    techStackUrl: [
      'https://static.cdnlogo.com/logos/a/51/angular.svg',
      Antd,
      'https://static.cdnlogo.com/logos/r/44/rxjs.svg',
      'https://static.cdnlogo.com/logos/t/96/typescript.svg',
    ],
  },
  {
    projectId: 'project-10',
    projectName: 'Binus Curriculum Management System',
    projectYearStart: '2022',
    projectYearEnd: '2023',
    projectDescription: 'App for Managing Curriculum in Binus University',
    imgThumbnail: Crm,
    techStackUrl: [
      'https://static.cdnlogo.com/logos/a/51/angular.svg',
      Antd,
      'https://static.cdnlogo.com/logos/r/44/rxjs.svg',
      'https://static.cdnlogo.com/logos/t/96/typescript.svg',
    ],
  },
];

export default PROJECT_DATA;