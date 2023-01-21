import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useNavigate } from 'react-router-dom';
import { default as settings } from '../config';
import AppHeader from './AppHeader';

export default function Home() {
	const apps = [{name: "TODO", url: settings.PAGE_URLS.Todos}];
	const navigate = useNavigate();

	const handleOpen = (app) => {
		navigate(app.url);
	};

	return (
		<>
		<Box sx={{ display: 'flex', flexDirection: 'row' }}>
			{apps.map((app, ind) => (
				<Card sx={{ width: 200, p: 2, m: 2 }} key={ind}>
					<CardContent>
						<Typography variant="h3" color="text.secondary">
							{app.name}
						</Typography>
					</CardContent>
					<CardActions sx={{display: "flex"}}>
						<Button onClick={() => handleOpen(app)}>Open</Button>
					</CardActions>
				</Card>
			))}
		</Box></>
	)
}