import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { default as settings } from '../config';
import TaskIcon from '@mui/icons-material/Task';
import { Stack, Card, CardActions, CardMedia, Button } from '@mui/material';

export default function Home() {
  const apps = [
    {
      name: "TODO", url: settings.PAGE_URLS.Todos, icon: TaskIcon,
      image: "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      name: "Attendance", url: null, icon: TaskIcon,
      image: "https://images.unsplash.com/photo-1602827115209-0f49346b36b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      name: "Money", url: null, icon: TaskIcon,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1715&q=80"
    }
  ];
  const navigate = useNavigate();

  const handleOpen = (app) => {
    navigate(app.url);
  };

  return (
    <Stack direction="row">
      {
        apps.map((app, ind) => (
          <Card sx={{ width: 200, m: 2 }} key={ind}>
            <CardMedia
              sx={{ height: 140 }}
              image={app.image}
              title="green iguana"
            />
            <CardActions sx={{ display: "flex", justifyContent: 'center' }}>
              <Button onClick={() => handleOpen(app)}>{app.name} App</Button>
            </CardActions>
          </Card>
        ))
      }
    </Stack>
  )
}