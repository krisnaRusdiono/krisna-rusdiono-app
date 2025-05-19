'use client'

import ContentContainer from '@/components/ContentContainer';
import Modal from '@/components/Modal';
import TransitionEnter from '@/components/Transition/Enter';
import PROJECT_DATA from '@/constants/projectData';
import NavigationTitle from '@/enums/navigation';
import { ProjectData } from '@/types/projectData';
import { OpenInNew } from '@mui/icons-material';
import { Button, Tooltip, Typography } from '@mui/material';
import { useAnimationControls } from 'motion/react';
import Image from 'next/image';
import { useMemo, useState } from 'react';

const ProjectSlot = () => {
    const controls = useAnimationControls();
    const [selectedProject, setSelectedProject] = useState<ProjectData>();
    const [open, setOpen] = useState<boolean>(false);
    const [size] = useState(10);

    const startAnimate = () => controls.start({ opacity: 1, scale: 1 });
    const endAnimate = () => {
      controls.start({ opacity: 0, scale: 0, transition: { duration: 0.5 } });
    };

    const toggleModal = () => setOpen(!open);
    const renderedData = useMemo(() => {
      return PROJECT_DATA.slice(0, size)
    }, [size])

    const handleClickDetail = (data: ProjectData) => {
      setSelectedProject(data);
      toggleModal();
    };

    return (
      <ContentContainer
        id={NavigationTitle.PROJECT}
        badge='Project Experiences'
        className='bg-slate-900 flex-col [&>div>button]:flex [&>div>button]:mt-8'
        onViewportEnter={startAnimate}
        onViewportLeave={endAnimate}
      >
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-28 max-h-screen overflow-auto simple-scrollbar'>
          {renderedData.map((project, i) => (
            <TransitionEnter
              controls={controls}
              delay={i / 6}
              key={project.projectId}
              className='col-span-1 flex flex-col drop-shadow-lg shadow-lg hover:shadow-md hover:drop-shadow-md rounded-xl overflow-hidden transition-all [&>div>img]:hover:scale-110 relative [&>:first-child]:hover:opacity-20 [&>button>svg]:hover:fill-white justify-between'
            >
              <div className='absolute w-full h-full bg-black opacity-0 transition-all z-10 flex justify-center items-center' />
              <Tooltip
                title='View Detail'
                className='absolute right-2 top-2 z-10'
              >
                <Button
                  variant='text'
                  className='min-w-4 bg-transparent'
                  onClick={() => handleClickDetail(project)}
                >
                  <OpenInNew />
                </Button>
              </Tooltip>
              <div className='overflow-hidden border-0 border-b border-solid border-neutral-200 bg-red-200 h-full flex'>
                <Image
                  src={project.imgThumbnail}
                  alt={project.projectName}
                  layout='responsive'
                  className='transition-all scale-105  h-full'
                />
              </div>
              <div className='p-4 bg-white min-h-24'>
                <Typography
                  variant='h5'
                  className='font-bold overflow-hidden text-ellipsis line-clamp-2 min-h-16'
                >
                  {project.projectName}{' '}
                  <sup className='text-sm'>({project.projectYearStart})</sup>
                </Typography>
                <Typography
                  variant='caption'
                  className='overflow-hidden text-ellipsis line-clamp-1 mt-2'
                >
                  {project.projectDescription}
                </Typography>
              </div>
            </TransitionEnter>
          ))}
        </div>
        <Modal open={open} toggleModal={toggleModal} data={selectedProject} />
      </ContentContainer>
    );
};

export default ProjectSlot;
