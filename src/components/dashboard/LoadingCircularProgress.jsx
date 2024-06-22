import React from "react";
import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';

const Root = styled('div')({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Certifique-se de que está centralizado
    height: "100vh", // Ocupa toda a altura da tela
});

export default function LoadingCircularProgress() {
    return (
        <Root>
            <CircularProgress />
        </Root>
    );
}
