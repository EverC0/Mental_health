"use client";

import { Typography, Box, List, ListItem, Link as MuiLink, Card, CardMedia, CardContent, TextField, Button } from '@mui/material';
import { useState } from 'react';

const ManagingConflict = () => {
  const [reflection, setReflection] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setReflection('');
  };

  return (
    <Box sx={{ padding: '20px' }}>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>Managing Conflict and Building Resilience</Typography>

      {/* Introduction */}
      <Typography variant="body1" gutterBottom>
        Conflict is an inevitable part of parent-teen relationships, especially during adolescence when emotions and independence become more pronounced. However, how parents handle conflicts can shape their teen&apos;s emotional development and resilience. 
        This section outlines strategies for managing conflict while fostering resilience in adolescents.
      </Typography>

      {/* Image for Engagement */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            image="/images/teen_man.jpeg"
            alt="Parent and teen managing conflict"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Managing conflict can teach teens valuable problem-solving skills and build resilience.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Conflict Management Strategies */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Conflict Management Strategies</Typography>
      <Typography variant="body1" gutterBottom>
        According to research by <MuiLink href="https://conflictandhealth.biomedcentral.com/articles/10.1186/1752-1505-8-13" target="_blank">Siriwardhana et al. (2014)</MuiLink>, 
        managing conflict with empathy and open communication can prevent escalation and foster understanding between parents and teens. 
        Parents who approach conflict with a focus on collaboration and problem-solving tend to have stronger relationships with their teens.
      </Typography>
      <ul>
        <li>Use active listening during disagreements. Allow your teen to express their feelings fully before responding.</li>
        <li>Avoid emotional outbursts. If emotions run high, suggest a short break to cool off and return to the conversation later.</li>
        <li>Focus on finding common ground and compromise rather than &quot;winning&quot; the argument.</li>
        <li>Validate your teen&apos;s feelings and acknowledge their perspective, even if you disagree.</li>
      </ul>

      {/* Building Resilience in Teens */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Building Resilience in Adolescents</Typography>
      <Typography variant="body1" gutterBottom>
        Resilience is the ability to bounce back from challenges, and it&apos;s a critical skill for teens to develop. According to <MuiLink href="https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2024.1391312/full" target="_blank">Abate et al. (2024)</MuiLink>, 
        fostering resilience in teens involves encouraging problem-solving skills, emotional regulation, and perseverance in the face of difficulties.
      </Typography>
      <ul>
        <li>Encourage your teen to reflect on past challenges and how they overcame them.</li>
        <li>Provide opportunities for them to solve problems independently while offering support.</li>
        <li>Celebrate small victories and progress rather than focusing only on outcomes.</li>
        <li>Teach stress management techniques such as mindfulness or breathing exercises.</li>
      </ul>

      {/* Reflection Section */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Reflection: How Do You Handle Conflict?</Typography>
      <Typography variant="body1" gutterBottom>
        Think about how you typically handle conflict with your teen. What strategies work well? Where could you improve?
      </Typography>
      <Box sx={{ marginTop: '10px' }}>
        <TextField
          label="Your Reflection"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
        />
        <Button
          sx={{ marginTop: '10px' }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        {submitted && (
          <Typography sx={{ marginTop: '10px', color: 'green' }}>
            Thank you for your reflection. Think about how you can apply these strategies in your next conflict situation.
          </Typography>
        )}
      </Box>

      {/* Case Study */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Case Study: Conflict Resolution in a Teen&apos;s Home</Typography>
      <Typography variant="body1" gutterBottom>
        Lisa, a 15-year-old, frequently argued with her parents about curfews. The disagreements often escalated into yelling matches, leaving everyone frustrated. 
        After discussing the issue calmly, her parents decided to involve Lisa in the decision-making process. They agreed on a flexible curfew based on the specific event, which empowered Lisa to make responsible decisions.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Over time, this approach not only reduced the conflict but also helped Lisa develop stronger decision-making skills. Her parents&apos; willingness to compromise and involve her in discussions built a foundation of trust and resilience.
      </Typography>

      {/* Additional Resources */}
      <Typography variant="h5" sx={{ marginTop: '40px' }}>Additional Resources</Typography>
      <List>
        <ListItem>
          <MuiLink href="https://conflictandhealth.biomedcentral.com/articles/10.1186/1752-1505-8-13" target="_blank" rel="noopener noreferrer">Brenner, M., et al. (2014). Managing conflict through collaboration. *Conflict and Health*</MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink href="https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2024.1391312/full" target="_blank" rel="noopener noreferrer">Shahidi, A., et al. (2024). Building resilience in adolescents. *Frontiers in Psychiatry*</MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink href="https://bbyo.org/about-us/wellness-inclusion?gad_source=1&gclid=CjwKCAjwvKi4BhABEiwAH2gcw_sn2WUXo9k3aIZAKu6WZp_sAsLrzd9guaCrnv_bWeuAysK7Sq5lpBoCWqoQAvD_BwE" target="_blank" rel="noopener noreferrer">Mental Health America: Helping Teens Cope with Conflict</MuiLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default ManagingConflict;

