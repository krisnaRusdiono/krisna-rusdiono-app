import { ProjectData } from '@/types/projectData';
import { Box, Modal as ModalMUI, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};

const Modal = ({ open, toggleModal, data }: { open: boolean; toggleModal: () => void, data?: ProjectData }) => {
    const {

    } = data || {}

    return (
      <ModalMUI
        open={open}
        onClose={toggleModal}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </ModalMUI>
    );
}

export default Modal;
