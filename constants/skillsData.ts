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
import IcHtml from '@/public/images/ic_html.svg';
import IcCss from '@/public/images/ic_css.svg';
import IcReact from '@/public/images/ic_react.svg';
import IcVue from '@/public/images/ic_vue.svg';
import IcThreeDot from '@/public/images/ic_three_dot.svg';
import { StaticImageData } from 'next/image';

export interface SkillData {
    name: string;
    icon: StaticImageData;
}

const SKILLS_DATA: SkillData[] = [
  {
    name: 'HTML',
    icon: IcHtml,
  },
  {
    name: 'CSS',
    icon: IcCss,
  },
  {
    name: 'Javascript',
    icon: IcJs,
  },
  {
    name: 'Typescript',
    icon: IcTs,
  },
  {
    name: 'Tailwind CSS',
    icon: IcTailwind,
  },
  {
    name: 'Bootstrap',
    icon: IcBootstrap,
  },
  {
    name: 'RXJS',
    icon: IcRxjs,
  },
  {
    name: 'React',
    icon: IcReact,
  },
  {
    name: 'Next JS',
    icon: IcNext,
  },
  {
    name: 'Angular CLI',
    icon: IcAngular,
  },
  {
    name: 'Vue JS',
    icon: IcVue,
  },
  {
    name: '.NET',
    icon: IcDotNet,
  },
  {
    name: 'Docker',
    icon: IcDocker,
  },
  {
    name: 'Liferay DXP',
    icon: IcLiferay,
  },
  {
    name: 'Material UI',
    icon: IcMui,
  },
  {
    name: 'Tanstack Query',
    icon: IcReactQuery,
  },
  {
    name: '.NET MVC',
    icon: IcAspNet,
  },
  {
    name: 'Ant Design',
    icon: IcAntd,
  },
  {
    name: 'And others tools',
    icon: IcThreeDot,
  },
];

export default SKILLS_DATA;
