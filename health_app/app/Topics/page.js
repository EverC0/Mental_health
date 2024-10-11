import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box, Card, CardContent, Button, List, ListItem, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';


const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <Box sx={{ padding: '50px', backgroundColor: '#f0f4f7', textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Mental Health Topics for Parents of Adolescents (13-18 Years)
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Understand and support your teen’s mental well-being with practical advice and resources.
        </Typography>
      </Box>

      {/* Mental Health Topics Accordion Section */}
      <Stack spacing={4} sx={{ padding: '20px' }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Understanding Mental Health in Adolescence</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Learn how adolescent brain development affects emotions, decision-making, and behavior. 
              Adolescents experience significant changes, and parents can play a crucial role in supporting their mental well-being.
            </Typography>
            <Link href="/understanding">
            <Button variant="contained" sx={{ marginTop: '10px' }}>Learn More</Button>
            </Link>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Recognizing Warning Signs and Symptoms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Common signs of mental health struggles include mood swings, social withdrawal, and changes in behavior.
              Parents can adjust their approach by staying calm and offering emotional support.
            </Typography>
            <Link href="/warningsigns">
            <Button variant="contained" sx={{ marginTop: '10px' }}>Learn More</Button>
            </Link>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Communication Strategies for Parents</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Effective communication is essential in supporting your teen’s mental health. Learn techniques like active listening, 
              asking open-ended questions, and maintaining non-verbal communication to create a safe space for your teen to express themselves.
            </Typography>
            <Link href="/startforcommun">
              <Button variant="contained" sx={{ marginTop: '10px' }}>Learn More</Button>
            </Link>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">Managing Conflict and Building Resilience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Conflicts are a normal part of adolescence. Help your teen build resilience by modeling calm conflict resolution,
              celebrating small victories, and teaching problem-solving skills.
            </Typography>
            <Link href="/managing-conflict">
              <Button variant="contained" sx={{ marginTop: '10px' }}>Learn More</Button>
            </Link>
          </AccordionDetails>
        </Accordion>
      </Stack>

      {/* Cards for Supportive Family Dynamics */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} sx={{ padding: '20px' }}>
        <Card>
          <CardContent>
            <Typography variant="h6">Family Dynamics: Creating a Supportive Environment</Typography>
            <Typography>
              By modeling healthy behaviors like stress management, parents can provide a positive example for their teens.
              Encouraging open communication and building trust are essential for creating a safe space at home.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6">Supporting Your Teen Through Mental Health Challenges</Typography>
            <Typography>
              Offer emotional support and suggest practical steps, like talking to a counselor or taking a break from social media,
              when your teen is feeling overwhelmed.
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      {/* Resources Section */}
      <Typography variant="h5" align="center" sx={{ marginTop: '40px' }}>Additional Resources</Typography>
      <List>
        <ListItem>
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5778739/" target="_blank" rel="noopener noreferrer">
            Understanding Elder Abuse in Family Dynamics: An In-depth Review
          </a>
        </ListItem>
        <ListItem>
          <a href="https://www.ajgponline.org/article/S1064-7481(20)30346-8/fulltext" target="_blank" rel="noopener noreferrer">
            Exploring the Impact of Elder Neglect on Mental Health
          </a>
        </ListItem>
        <ListItem>
          <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9957528/" target="_blank" rel="noopener noreferrer">
            Family Violence: Addressing Elder Abuse and Neglect in Caregiving
          </a>
        </ListItem>
      </List>

    </>
  );
};

export default Page;
