'use client'

import ContentContainer from '@/components/ContentContainer';
import Modal from '@/components/Modal';
import PROJECT_DATA from '@/constants/projectData';
import { ProjectData } from '@/types/projectData';
import { OpenInNew } from '@mui/icons-material';
import { Button, Tooltip, Typography } from '@mui/material';
import Image from 'next/image';
import { useMemo, useState } from 'react';

const ProjectSlot = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectData>();
    const [showMore, setShowMore] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const toggleModal = () => setOpen(!open);
    const toggleShowMore = () => setShowMore(!showMore)
    const renderedData = useMemo(() => {
      if (showMore) {
        return PROJECT_DATA;
      }

      return PROJECT_DATA.slice(0, 4)
    }, [showMore])

    const handleClickDetail = (data: ProjectData) => {
      setSelectedProject(data);
      toggleModal();
    };

    return (
      <ContentContainer
        id='project'
        badge='Project Experiences'
        className='bg-slate-900 flex-col'
      >
        <div className='w-full grid grid-cols-1 gap-4'>
          {renderedData.map(project => (
            <div
              key={project.projectId}
              className='col-span-1 flex flex-col drop-shadow-lg shadow-lg hover:shadow-md hover:drop-shadow-md rounded-xl overflow-hidden transition-all [&>div>img]:hover:scale-110 relative [&>:first-child]:hover:opacity-20 [&>button>svg]:hover:fill-white'
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
              <div className='overflow-hidden h-fill-available border-0 border-b border-solid border-neutral-200'>
                <Image
                  src={project.imgThumbnail}
                  alt={project.projectName}
                  layout='responsive'
                  className='transition-all scale-105'
                />
              </div>
              <div className='p-4 bg-white'>
                <Typography
                  variant='h5'
                  className='font-bold overflow-hidden text-ellipsis line-clamp-2'
                >
                  {project.projectName}{' '}
                  <sup className='text-sm'>({project.projectYearStart})</sup>
                </Typography>
                <Typography
                  variant='caption'
                  className='overflow-hidden text-ellipsis line-clamp-1'
                >
                  {project.projectDescription}
                </Typography>
              </div>
            </div>
          ))}
        </div>
        <Button
          variant='text'
          className='w-fit mx-auto'
          onClick={toggleShowMore}
        >
          {showMore ? 'Hide some' : 'Show more'}
        </Button>

        <Modal open={open} toggleModal={toggleModal} data={selectedProject} />
      </ContentContainer>
    );
};

export default ProjectSlot;
