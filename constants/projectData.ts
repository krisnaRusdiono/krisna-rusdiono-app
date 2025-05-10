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

import IcAngular from '@/public/images/ic_angular.svg';
import IcBootstrap from '@/public/images/ic_bootstrap.svg';
import IcDocker from '@/public/images/ic_docker.svg';
import IcDotNet from '@/public/images/ic_dotnet_core.svg';
import IcJs from '@/public/images/ic_javascript.svg';
import IcTs from '@/public/images/ic_typescript.svg';
import IcLiferay from '@/public/images/ic_liferay.svg';
import IcRxjs from '@/public/images/ic_rxjs.svg';
import IcNext from '@/public/images/ic_nextjs_new.svg';
import IcMui from '@/public/images/ic_material_ui.svg';
import IcTailwind from '@/public/images/ic_tailwind_new.svg';
import IcReactQuery from '@/public/images/ic_react-query.svg';
import IcAspNet from '@/public/images/ic_asp_net.svg';
import IcAntd from '@/public/images/ic_antd_fix.svg';

const PROJECT_DATA: ProjectData[] = [
  {
    projectId: 'project-1',
    projectName: 'AkselHR',
    projectYearStart: '2025',
    projectYearEnd: '2025',
    projectDescription: 'HRIS App for Managing HR core task and data',
    projectDescriptionLong: 'A Human Resource Information System (HRIS) web application designed to streamline employee management, attendance tracking, and payroll processing. \n\nAs the frontend developer, I built responsive user interfaces using Next.js, implemented dynamic dashboards, and ensured a smooth user experience across HR modules like leave management, employee profiles, disbursement and performance reviews.',
    imgThumbnail: AkselHr,
    techStackUrl: [IcNext, IcTailwind, IcMui, IcReactQuery, IcTs],
  },
  {
    projectId: 'project-2',
    projectName: 'Asia Money Finance News and Forums',
    projectYearStart: '2024',
    projectYearEnd: '2025',
    projectDescription: 'App Information for Crypto/Stocks Update',
    projectDescriptionLong: 'A modern web platform that delivers up-to-date insights on finance, cryptocurrency, and stock markets, while fostering community discussions through interactive forums. \n\nAs a frontend developer, I built the user interface using Next.js, leveraging server-side rendering for faster performance and improved SEO. I also integrated real-time market data APIs, implemented dynamic routing, and developed forum features such as threaded discussions, user profiles, and topic filters to create a smooth and engaging user experience.',
    imgThumbnail: AsiaMoney,
    techStackUrl: [IcNext, IcTailwind, IcMui, IcReactQuery, IcTs],
  },
  {
    projectId: 'project-3',
    projectName: 'APL Customer Portal',
    projectYearStart: '2021',
    projectYearEnd: '2025',
    projectDescription: 'Pharmacy B2B App for Buying Medicines and others',
    projectDescriptionLong: 'A B2B marketplace platform for buying and selling medicines, medical supplies, and health-related goods. \n\nAs a frontend developer, I developed the platform using Next.js, focusing on performance, accessibility, and scalability. I implemented features such as product catalog browsing, bulk order management, role-based access (buyers/sellers), and secure checkout flows, ensuring a smooth and reliable experience for pharmacies, suppliers, and distributors.',
    imgThumbnail: Ezrx,
    techStackUrl: [IcAngular, IcBootstrap, IcRxjs, IcTs],
  },
  {
    projectId: 'project-4',
    projectName: 'Asesmen Nasional Berbasis Komputer (ANBK)',
    projectYearStart: '2023',
    projectYearEnd: '2024',
    projectDescription:
      'A National-level Assessment App to evaluate the quality of education in Indonesia',
      projectDescriptionLong: 'A web-based application developed to support computer-based national assessments in schools, including exam scheduling, participant management, and real-time monitoring. \n\nAs a frontend developer, I collaborated closely with the backend team using .NET MVC and was responsible for building responsive, user-friendly interfaces using Razor views, HTML/CSS, and JavaScript. I focused on optimizing the user experience for admins, proctors, and participants, ensuring smooth navigation, accessibility, and real-time feedback during assessments.',
    imgThumbnail: Anbk,
    techStackUrl: [IcAspNet, IcBootstrap, IcJs],
  },
  {
    projectId: 'project-5',
    projectName: 'Biofarma Audity Management System',
    projectYearStart: '2024',
    projectYearEnd: '2024',
    projectDescription: 'App for helping manager to manage internal audit',
    projectDescriptionLong: 'A web-based system designed to manage internal and external audit processes, including planning, execution, reporting, and corrective actions. \n\nAs a frontend developer, I developed the user interface using Next.js in collaboration with a backend powered by .NET MVC. I implemented features such as audit scheduling, issue tracking, dynamic forms, and role-based dashboards, ensuring a smooth, responsive, and intuitive experience for auditors, managers, and stakeholders.',
    imgThumbnail: BioAudit,
    techStackUrl: [IcDotNet, IcBootstrap],
  },
  {
    projectId: 'project-6',
    projectName: 'Sales Workforce Automatic',
    projectYearStart: '2023',
    projectYearEnd: '2024',
    projectDescription: 'App for monitoring and tracking sales activity',
    projectDescriptionLong: 'A web application built to monitor and analyze sales performance, track targets, and provide real-time sales data visualization for business teams. \n\nAs a frontend developer, I built interactive and responsive UI components using .NET MVC. I implemented features such as sales dashboards, filterable reports, real-time chart visualizations, and user role management, helping teams gain actionable insights and stay aligned with their sales goals.',
    imgThumbnail: Sfa,
    techStackUrl: [IcAspNet, IcBootstrap, IcJs],
  },
  {
    projectId: 'project-7',
    projectName: 'Waste Management App',
    projectYearStart: '2023',
    projectYearEnd: '2023',
    projectDescription:
      'App for selling and recycling domestic waste from Danone',
    projectDescriptionLong: 'A digital platform designed to streamline waste collection, tracking, and reporting processes for municipalities and private waste management services. \n\nAs a frontend developer, I developed the interface using Next.js. I implemented features such as pickup scheduling, waste tracking dashboards, location-based service requests, and report generation, focusing on creating a user-friendly experience for both operators and administrators. ',
    imgThumbnail: WasteManagement,
    techStackUrl: [IcNext, IcTailwind, IcMui, IcReactQuery, IcTs],
  },
  {
    projectId: 'project-8',
    projectName: 'DBS Bank Retainer',
    projectYearStart: '2021',
    projectYearEnd: '2023',
    projectDescription: 'Maintenance DBS Bank for regional Indonesia',
    projectDescriptionLong: 'Retainer for ongoing maintenance and updates of DBS Bank\'s web platform, ensuring the site remains secure, responsive, and functional for users across Indonesia. \n\nAs a frontend developer, I worked with Liferay DXP, focusing on maintaining and optimizing existing web components, implementing new features, and ensuring compliance with banking regulations. I collaborated with backend teams to integrate new services, troubleshoot issues, and optimize performance for both desktop and mobile experiences, providing timely updates and enhancements to support DBS Bank\'s online presence in the region.',
    imgThumbnail: Dbs,
    techStackUrl: [IcLiferay],
  },
  {
    projectId: 'project-9',
    projectName: 'Vitclaim System Maintenance',
    projectYearStart: '2023',
    projectYearEnd: '2025',
    projectDescription:
      "Maintenance app and it's security for claiming invoice, reimburse and other from Danone",
    projectDescriptionLong: 'A web application designed to monitor and manage disbursements and claims, providing real-time tracking and reporting for financial teams and claimants. \n\nAs a frontend developer, I built intuitive and responsive interfaces using Angular CLI, integrating with backend systems to handle data related to disbursements and claims. I implemented features such as claim status tracking, real-time disbursement updates, filterable reports, and user role management, ensuring an efficient and user-friendly experience for claimants and administrators alike.',
    imgThumbnail: Vitclaim,
    techStackUrl: [IcAngular, IcMui, IcRxjs, IcTs, IcDocker],
  },
  {
    projectId: 'project-10',
    projectName: 'Binus Curriculum Management System',
    projectYearStart: '2022',
    projectYearEnd: '2023',
    projectDescription: 'App for Managing Curriculum in Binus University',
    projectDescriptionLong: 'A web-based application designed to manage and streamline curriculum planning, scheduling, and tracking for educational institutions. \n\nAs a frontend developer, I developed the user interface using Angular CLI, focusing on making curriculum data easily accessible and interactive for teachers and administrators. I implemented features such as curriculum creation and scheduling, student progress tracking, role-based access, and dynamic reporting, ensuring a seamless and efficient user experience for educators and school staff.',
    imgThumbnail: Crm,
    techStackUrl: [IcAngular, IcAntd, IcRxjs, IcTs],
  },
];

export default PROJECT_DATA;