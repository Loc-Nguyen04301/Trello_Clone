import React from 'react'
import { Box, PaletteMode, useColorScheme } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';

const ModeSelect = () => {
    const { mode, setMode } = useColorScheme();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    useEffect(() => {
        prefersDarkMode ? setMode("dark") : setMode("light")
    }, [prefersDarkMode])

    const handleChange = (event: SelectChangeEvent) => {
        const selectedMode = event.target.value as PaletteMode
        setMode(selectedMode)
    };

    return (
        <Box >
            <FormControl fullWidth sx={{ minWidth: 120, m: 1 }} size='small'>
                <InputLabel id="mode-select-label">Mode</InputLabel>
                <Select
                    labelId="mode-select-label"
                    id="demo-simple-select"
                    value={mode}
                    label="Mode"
                    onChange={handleChange}
                >
                    <MenuItem value={'light'}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <LightModeIcon fontSize='small' /> Light
                        </Box>
                    </MenuItem>
                    <MenuItem value={'dark'}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <DarkModeIcon fontSize='small' /> Dark
                        </Box>
                    </MenuItem>
                    <MenuItem value={'system'}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <SettingsBrightnessIcon fontSize='small' /> System
                        </Box>
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default ModeSelect