import { Typography, Box, List, ListItem, Link as MuiLink, Card, CardMedia, CardContent } from '@mui/material';

const WarningSigns = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>Recognizing Warning Signs and Symptoms</Typography>

      {/* Introduction */}
      <Typography variant="body1" gutterBottom>
        Adolescents often experience emotional and behavioral changes as part of their development, but some signs may indicate deeper mental health challenges such as anxiety, depression, or other mood disorders. 
        It&apos;s important for parents to recognize these signs early to provide the necessary support and interventions. 
        This section outlines common warning signs and symptoms of adolescent mental health struggles.
      </Typography>

      {/* Image for Engagement */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            image="images/teen-stressed.jpg"
            alt="Teen displaying signs of stress"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              Recognizing early signs of mental health issues can help parents provide timely support.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Behavioral and Emotional Warning Signs */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Behavioral and Emotional Warning Signs</Typography>
      <Typography variant="body1" gutterBottom>
        According to research by <MuiLink href="https://link.springer.com/article/10.1186/s13034-019-0308-x" target="_blank">Kaess et al. (2019)</MuiLink>, 
        some of the most common behavioral and emotional warning signs that parents should watch for include:
      </Typography>
      <ul>
        <li>Increased irritability or mood swings</li>
        <li>Social withdrawal from family and friends</li>
        <li>Loss of interest in previously enjoyable activities</li>
        <li>Sudden changes in sleeping or eating habits</li>
        <li>Excessive worry or fearfulness</li>
        <li>Frequent emotional outbursts or crying spells</li>
      </ul>

      {/* Physical and Cognitive Warning Signs */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Physical and Cognitive Warning Signs</Typography>
      <Typography variant="body1" gutterBottom>
        In addition to emotional and behavioral signs, physical and cognitive symptoms can also indicate mental health concerns in adolescents. 
        As <MuiLink href="https://ijmhs.biomedcentral.com/articles/10.1186/s13033-020-00356-9" target="_blank">Shah et al. (2020)</MuiLink> explains, parents should also watch for:
      </Typography>
      <ul>
        <li>Frequent headaches or stomachaches without a medical cause</li>
        <li>Fatigue or low energy</li>
        <li>Difficulty concentrating or making decisions</li>
        <li>Decline in academic performance</li>
        <li>Complaints of feeling empty, hopeless, or numb</li>
      </ul>

      {/* Interactive Quiz: "Is Your Teen Exhibiting Warning Signs?" */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Is Your Teen Exhibiting Warning Signs?</Typography>
      <Typography variant="body1" gutterBottom>
        Take this quick quiz to see if your teen might be showing signs of mental health issues. The quiz is designed to help parents identify key behaviors or patterns to discuss with a healthcare professional.
      </Typography>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSequDw-CDpyNzxYoBdzP0--ejJiBzh9euOLiJKtb1wQ8ItP7Q/viewform?embedded=true"
        width="100%" 
        height="500" 
        frameBorder="0" 
        marginHeight="0" 
        marginWidth="0">
        Loading…
      </iframe>

      {/* Case Study */}
      <Typography variant="h5" sx={{ marginTop: '20px' }}>Case Study: Recognizing Early Signs in John</Typography>
      <Typography variant="body1" gutterBottom>
        John, a 14-year-old student, began showing signs of social withdrawal and poor academic performance. His parents initially believed it was due to the pressure of starting high school. 
        However, as John&apos;s mood swings became more frequent and he lost interest in hobbies like soccer and video games, his parents grew concerned.
      </Typography>
      <Typography variant="body1" gutterBottom>
        After noticing John&apos;s behavior, his parents reached out to a school counselor who suggested further evaluation. With professional support, John was diagnosed with anxiety, and his parents were able to work with therapists to provide him with the support he needed to manage his symptoms.
      </Typography>

      {/* Additional Resources */}
      <Typography variant="h5" sx={{ marginTop: '40px' }}>Additional Resources</Typography>
      <List>
        <ListItem>
          <MuiLink href="https://link.springer.com/article/10.1186/s13034-019-0308-x" target="_blank" rel="noopener noreferrer">Kaess, M., et al. (2019). Early identification of adolescent mental health disorders. *Springer*</MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink href="https://ijmhs.biomedcentral.com/articles/10.1186/s13033-020-00356-9" target="_blank" rel="noopener noreferrer">Shah, N., et al. (2020). Recognizing physical and cognitive warning signs. *BMC International Journal of Mental Health Systems*</MuiLink>
        </ListItem>
        <ListItem>
          <MuiLink href="https://www.nami.org" target="_blank" rel="noopener noreferrer">National Alliance on Mental Illness (NAMI): Adolescent Mental Health</MuiLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default WarningSigns;
