import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

type FormValues = yup.InferType<typeof schema>;

const SignUp = () => {
    const [checked, setChecked] = useState(false)

    const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormValues) => {
        console.log(data)
    };

    return (
        <Container component="main" maxWidth="xs">
            <Stack
                sx={{
                    marginTop: 10,
                    alignItems: 'center'
                }}
            >
                <Avatar
                    sx={{
                        backgroundColor: 'secondary.main',
                        margin: 1
                    }}
                >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>Sign up</Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ margin: 3 }} >
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field }) =>
                                    <TextField
                                        {...field}
                                        label="First Name"
                                        variant="outlined"
                                        error={!!errors.firstName}
                                        helperText={errors.firstName ? errors.firstName.message : ''}
                                        fullWidth
                                    />
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Controller
                                name="lastName"
                                control={control}
                                render={({ field }) =>
                                    <TextField
                                        {...field}
                                        label="Last Name"
                                        variant="outlined"
                                        error={!!errors.lastName}
                                        helperText={errors.lastName ? errors.lastName.message : ''}
                                        fullWidth
                                    />
                                }
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) =>
                                    <TextField
                                        {...field}
                                        label="Email"
                                        variant="outlined"
                                        error={!!errors.email}
                                        helperText={errors.email ? errors.email.message : ''}
                                        fullWidth
                                    />
                                }
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) =>
                                    <TextField
                                        {...field}
                                        type="password"
                                        label="Password"
                                        variant="outlined"
                                        error={!!errors.password}
                                        helperText={errors.password ? errors.password.message : ''}
                                        fullWidth
                                    />
                                }
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                                }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <Button variant='contained' type='submit' color='secondary' fullWidth>SIGN UP</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Container>
    );
}

export default SignUp

