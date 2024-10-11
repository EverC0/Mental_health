import { Typography, Box, List, ListItem, Link as MuiLink } from '@mui/material';

const CommunicationStrategies = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>Communication Strategies for Parents</Typography>

      {/* Introduction */}
      <Typography variant="body1" gutterBottom>
        Communication is a key factor in maintaining a strong relationship between parents and adolescents. 
        Effective communication fosters emotional support, mutual understanding, and problem-solving, especially during the teenage years when emotional responses and stress are heightened. 
        This section will explore strategies to help parents communicate more effectively with their teens.
      </Typography>

      {/* The Importance of Open Communication */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>The Importance of Open Communication</Typography>
      <Typography variant="body1" gutterBottom>
        According to research by <MuiLink href="https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.944815/full" target="_blank">Duan et al. (2022)</MuiLink>, 
        open communication between parents and adolescents is critical for maintaining emotional regulation and reducing mental health challenges like anxiety and depression. 
        When parents take the time to listen actively and validate their teen&apos;s feelings, it helps to create a safe environment where teens feel comfortable sharing their thoughts and emotions.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The study emphasizes that communication should not be one-sided. Parents who engage in discussions rather than lectures are more likely to help their teens develop better problem-solving skills and emotional maturity.
      </Typography>

      {/* Active Listening and Validation */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Active Listening and Validation</Typography>
      <Typography variant="body1" gutterBottom>
        Active listening is an essential communication skill that parents can use to connect with their teens. As described by <MuiLink href="https://bmcprimcare.biomedcentral.com/articles/10.1186/s12875-023-02129-y" target="_blank">Folkman et al. (2023)</MuiLink>, 
        active listening involves giving full attention to the speaker, refraining from interrupting, and offering verbal and non-verbal feedback. 
        This method allows teens to feel heard and understood, which is vital for building trust.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Additionally, validating a teen&apos;s emotions—acknowledging that their feelings are real and important—can significantly reduce conflict and emotional distress. Instead of responding with solutions immediately, parents can say, &quot;I understand how you feel,&quot; which fosters empathy and emotional connection.
      </Typography>

      {/* Practical Communication Strategies */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Practical Communication Strategies for Parents</Typography>
      <ul>
        <li>Use open-ended questions that encourage discussion (e.g., &quot;How was your day?&quot; rather than &quot;Did you finish your homework?&quot;).</li>
        <li>Practice non-verbal communication, such as maintaining eye contact and using a calm tone of voice.</li>
        <li>Refrain from interrupting when your teen is speaking. Let them finish their thoughts before responding.</li>
        <li>Avoid judgmental or critical language. Focus on understanding their perspective.</li>
        <li>Offer reassurance and let them know it&apos;s okay to have difficult feelings.</li>
      </ul>

      {/* Case Study */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Case Study: Building Trust Through Communication</Typography>
      <Typography variant="body1" gutterBottom>
        Mark, a father of two teenage boys, struggled to get them to open up about their school life. His sons were often quiet during family dinners and rarely discussed their challenges. 
        Mark decided to practice active listening by asking more open-ended questions and allowing them to share without interruption.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Over time, his sons began to open up about their academic struggles and social pressures. By validating their experiences and offering reassurance rather than immediate solutions, 
        Mark was able to build a stronger bond with his sons, resulting in more frequent and meaningful conversations.
      </Typography>

      {/* Additional Resources */}
      <Typography variant="h5" sx={{ marginTop: '40px' }}>Additional Resources</Typography>
      <List>
        <ListItem>
          <MuiLink href="https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.944815/full" target="_blank" rel="noopener noreferrer">Duan, L., et al. (2022). Communication and mental health in adolescence. *Frontiers in Psychiatry*</MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink href="https://bmcprimcare.biomedcentral.com/articles/10.1186/s12875-023-02129-y" target="_blank" rel="noopener noreferrer">Folkman, J., et al. (2023). Active listening and emotional validation in parent-teen communication. *BMC Primary Care*</MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink href="https://www.mentalhealth.org.uk/a-to-z/c/communication" target="_blank" rel="noopener noreferrer">Mental Health Foundation: Communication Tips for Parents</MuiLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default CommunicationStrategies;
