import { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, 10%, 0);
    }

    to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
`;
