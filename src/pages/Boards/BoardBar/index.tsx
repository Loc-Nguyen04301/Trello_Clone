import { Box } from '@mui/material'

const BoardBar = () => {
    return (
        <Box
            sx={{
                backgroundColor: "primary.dark",
                width: "100%",
                height: (theme) => theme.trelloCustom.boardBarHeight,
                display: "flex",
                alignItems: "center"
            }}
        >
            Board Bar
        </Box>
    )
}

export default BoardBar