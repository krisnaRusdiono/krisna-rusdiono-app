import { useTheme } from '@mui/material';

const useMUIConfig = () => {
    const theme = useTheme();
    const paletteBgDefault = theme.palette.background.default;

    return { paletteBgDefault };
}

export default useMUIConfig;