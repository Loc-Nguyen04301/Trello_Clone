import { Box } from "@mui/material"

const BoardContent = () => {
    return (
        <Box
            sx={{
                backgroundColor: "primary",
                width: "100%",
                height: (theme) => `calc(100vh - ${theme.trelloCustom.boardBarHeight} - ${theme.trelloCustom.appBarHeight} )`,
                display: "flex",
                alignItems: "center"
            }}
        >
            Rest
        </Box>
    )
}

export default BoardContent