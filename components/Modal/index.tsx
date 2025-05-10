import { ProjectData } from '@/types/projectData';
import { Box, Modal as ModalMUI, Typography } from '@mui/material';
import Image from 'next/image';
import Unavailable from '@/public/images/unavailable-image.jpg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  bgcolor: 'background.paper',
  border: '2px solid inherit',
  boxShadow: 24,
  p: 0,
};

const Modal = ({ open, toggleModal, data }: { open: boolean; toggleModal: () => void, data?: ProjectData }) => {
    const {
      projectName = '',
      projectYearStart,
      projectYearEnd,
      projectDescriptionLong,
      imgThumbnail = Unavailable,
      techStackUrl = [],
    } = data || {};

    return (
      <ModalMUI
        open={open}
        onClose={toggleModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style} className="max-w-[40rem] !rounded-2xl overflow-hidden">
          <Image
            src={imgThumbnail}
            alt={projectName}
            className='w-full h-auto'
          />
          <div className='p-4 bg-white'>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              {projectName}{' '}
              <sup className='text-sm'>
                (
                {`${projectYearStart}${projectYearEnd && ` - ${projectYearEnd}`}`}
                )
              </sup>
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }} className='whitespace-pre-line max-h-72 overflow-auto'>
              {projectDescriptionLong}
            </Typography>
            <div className='flex flex-col gap-2'>
              <Typography id='modal-modal-tech-detail' sx={{ mt: 2 }}>
                This app built using:
              </Typography>
              <div className='w-full flex items-center'>
                {(techStackUrl || []).map((item, i) => (
                  <Image
                    key={`tech-${i}`}
                    src={item}
                    width={50}
                    height={0}
                    className='mx-2'
                    alt='tech icons'
                  />
                ))}
              </div>
            </div>
          </div>
        </Box>
      </ModalMUI>
    );
}

export default Modal;
