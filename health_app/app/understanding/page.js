import { Typography, Box, List, ListItem, Link as MuiLink } from '@mui/material';

const Understanding = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>Understanding Mental Health in Adolescence</Typography>
      
      {/* Introduction */}
      <Typography variant="body1" gutterBottom>
        Adolescence is a time of rapid brain development, emotional growth, and significant life transitions. 
        Mental health challenges such as anxiety, depression, and stress can emerge during this stage as teenagers navigate these changes. 
        It&apos;s crucial for parents to understand the mental health risks and how they can support their adolescent during this period.
      </Typography>

      {/* Key Changes in the Teen Brain */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Key Changes in the Teen Brain</Typography>
      <Typography variant="body1" gutterBottom>
        According to research by <MuiLink href="https://www.sciencedirect.com/science/article/pii/S1054139X12007033" target="_blank">Heneghan et al. (2012)</MuiLink>, 
        adolescents experience significant changes in brain development, particularly in areas related to emotional regulation, risk-taking, and decision-making. 
        This shift in brain activity often leads to mood swings, heightened emotional responses, and an increased likelihood of engaging in risky behaviors. 
        Parents who understand these changes can better empathize with their adolescent&apos;s experiences and respond with patience and guidance.
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        Furthermore, research by <MuiLink href="https://link.springer.com/article/10.1186/s13034-019-0308-x" target="_blank">Ligier et al. (2020)</MuiLink> emphasizes that early identification of mental health issues in adolescence is crucial. 
        Adolescents who struggle with untreated mental health challenges are more likely to develop severe mental health disorders in adulthood. 
        By recognizing early signs and seeking intervention, parents can significantly impact their teen&apos;s long-term mental well-being.
      </Typography>

      {/* How Parents Can Support Their Teens */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>How Parents Can Support Their Teens</Typography>
      <Typography variant="body1" gutterBottom>
        Parents play a critical role in supporting their adolescent&apos;s mental health. By creating a stable and open environment, they can encourage their teens to communicate about their feelings. 
        As highlighted by <MuiLink href="https://journals.sagepub.com/doi/full/10.1177/2158244013516769" target="_blank">Fischer et al. (2013)</MuiLink>, open communication between parents and teens is linked to better emotional regulation and lower levels of anxiety and depression.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Practical ways to support your teen include:
      </Typography>
      <ul>
        <li>Maintaining a routine that balances schoolwork, relaxation, and social activities.</li>
        <li>Encouraging open discussions about emotions without judgment.</li>
        <li>Seeking professional help when necessary (therapists, counselors, etc.).</li>
      </ul>

      {/* Case Study */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Case Study: Sarah&apos;s Journey Through Anxiety</Typography>
      <Typography variant="body1" gutterBottom>
        Sarah, a 16-year-old high school student, began exhibiting signs of anxiety during her sophomore year. Her parents noticed that she was becoming withdrawn, losing interest in activities she once enjoyed, and experiencing difficulty sleeping.
        At first, her parents attributed these changes to typical teenage mood swings, but after some time, they decided to engage in open conversations with Sarah about her feelings. 
      </Typography>
      <Typography variant="body1" gutterBottom>
        Through these conversations, Sarah expressed her fears about academic pressures and social relationships. Her parents sought support from a school counselor, who provided Sarah with coping mechanisms such as mindfulness exercises and journaling.
        Over time, Sarah&apos;s anxiety lessened, and her communication with her parents improved significantly.
      </Typography>

      {/* Additional Resources */}
      <Typography variant="h5" sx={{ marginTop: '40px' }}>Additional Resources</Typography>
      <List>
        <ListItem>
          <MuiLink href="https://www.sciencedirect.com/science/article/pii/S1054139X12007033" target="_blank" rel="noopener noreferrer">Forbes, E. E., & Dahl, R. E. (2012). Adolescent brain development. *ScienceDirect*</MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink href="https://link.springer.com/article/10.1186/s13034-019-0308-x" target="_blank" rel="noopener noreferrer">Kaess, M., et al. (2020). Early identification of adolescent mental health disorders. *Springer*</MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink href="https://journals.sagepub.com/doi/full/10.1177/2158244013516769" target="_blank" rel="noopener noreferrer">Heaven, P. C. L., & Ciarrochi, J. (2013). Parental influence on adolescent mental health. *SAGE*</MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink href="https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health" target="_blank" rel="noopener noreferrer">National Institute of Mental Health (NIMH): Child and Adolescent Mental Health</MuiLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default Understanding;
