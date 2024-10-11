"use client";

import { Container, Box, Typography, Button } from "@mui/material";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/Goals');  // Redirect to the Goal page
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center'
      }}
    >
      <Box
        sx={{
          width: '800px',
          padding: '20px',
          margin: '0 auto',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px'
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginRight: '10px',
              color: 'inherit'
            }}
          >
            Welcome To Supporting Adolescent Mental Health <AccessibilityNewIcon sx={{ fontSize: '33px' }} />
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            lineHeight: '1.6',
            marginBottom: '20px'
          }}
        >
          Adolescence is full of changes, and mental health challenges are common. Learn how to support your teen through awareness, communication, and guidance.
        </Typography>
      </Box>

      <Container
        sx={{
          padding: '24px',
          backgroundColor: '#f5f5f5',
          marginTop: '34px',
          height: 'auto',
          marginBottom: '50px',
          textAlign: 'left',
          marginLeft: '25px'
        }}
      >
        <Box sx={{ marginBottom: '24px' }}>
          <Typography variant="h5" gutterBottom>
            Purpose:
          </Typography>
          <Typography variant="body1">
            Our Mission: Helping parents navigate the complexities of adolescence by providing trusted guidance and resources on mental health. We’re here to empower you with the knowledge and tools to foster a supportive, healthy environment for your teen.      
          </Typography>
        </Box>

        <Box sx={{ marginBottom: '24px' }}>
          <Typography variant="h5" gutterBottom>
            Take the Next Step:
          </Typography>
          <Typography variant="body1">
            You’re not alone on this journey. Explore our resources, gain insights into your teen’s mental health, and discover practical ways to nurture a positive, supportive relationship. Start making small changes today for a big impact tomorrow.          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          sx={{ padding: '10px 20px', textTransform: 'none' }}
          onClick={handleButtonClick}
        >
          Start Learning
        </Button>
      </Container>
    </Container>
  );
}
