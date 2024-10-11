import { Typography, Box, List, ListItem, Link as MuiLink } from '@mui/material';

const Sources = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      {/* Page Title */}
      <Typography variant="h4" gutterBottom>Sources</Typography>

      {/* List of Sources */}
      <List>
        <ListItem>
          <MuiLink href="https://www.sciencedirect.com/science/article/pii/S1054139X12007033" target="_blank" rel="noopener noreferrer">
            Forbes, E. E., & Dahl, R. E. (2012). Adolescent brain development. *ScienceDirect*.
          </MuiLink>
        </ListItem>

        <ListItem>
          <MuiLink href="https://link.springer.com/article/10.1186/s13034-019-0308-x" target="_blank" rel="noopener noreferrer">
            Kaess, M., et al. (2019). Early identification of adolescent mental health disorders. *Springer*.
          </MuiLink>
        </ListItem>

        <ListItem>
          <MuiLink href="https://journals.sagepub.com/doi/full/10.1177/2158244013516769" target="_blank" rel="noopener noreferrer">
            Heaven, P. C. L., & Ciarrochi, J. (2013). Parental influence on adolescent mental health. *SAGE*.
          </MuiLink>
        </ListItem>

        <ListItem>
          <MuiLink href="https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health" target="_blank" rel="noopener noreferrer">
            National Institute of Mental Health (NIMH): Child and Adolescent Mental Health.
          </MuiLink>
        </ListItem>

        <ListItem>
          <MuiLink href="https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2022.944815/full" target="_blank" rel="noopener noreferrer">
            Duan, L., et al. (2022). Communication and mental health in adolescence. *Frontiers in Psychiatry*.
          </MuiLink>
        </ListItem>

        <ListItem>
          <MuiLink href="https://bmcprimcare.biomedcentral.com/articles/10.1186/s12875-023-02129-y" target="_blank" rel="noopener noreferrer">
            Folkman, J., et al. (2023). Active listening and emotional validation in parent-teen communication. *BMC Primary Care*.
          </MuiLink>
        </ListItem>

        <ListItem>
          <MuiLink href="https://www.mentalhealth.org.uk/a-to-z/c/communication" target="_blank" rel="noopener noreferrer">
            Mental Health Foundation: Communication Tips for Parents.
          </MuiLink>
        </ListItem>

        <ListItem>
          <MuiLink href="https://ijmhs.biomedcentral.com/articles/10.1186/s13033-020-00356-9" target="_blank" rel="noopener noreferrer">
            Shah, N., et al. (2020). Recognizing physical and cognitive warning signs. *BMC International Journal of Mental Health Systems*.
          </MuiLink>
        </ListItem>

        <ListItem>
          <MuiLink href="https://www.nami.org" target="_blank" rel="noopener noreferrer">
            National Alliance on Mental Illness (NAMI): Adolescent Mental Health.
          </MuiLink>
        </ListItem>

        <ListItem>
          <MuiLink href="https://conflictandhealth.biomedcentral.com/articles/10.1186/1752-1505-8-13" target="_blank" rel="noopener noreferrer">
            Brenner, M., et al. (2014). Managing conflict through collaboration. *Conflict and Health*.
          </MuiLink>
        </ListItem>

        <ListItem>
          <MuiLink href="https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2024.1391312/full" target="_blank" rel="noopener noreferrer">
            Shahidi, A., et al. (2024). Building resilience in adolescents. *Frontiers in Psychiatry*.
          </MuiLink>
        </ListItem>

        <ListItem>
          <MuiLink href="https://www.mhanational.org/best-ways-help-your-teen-cope-conflict" target="_blank" rel="noopener noreferrer">
            Mental Health America: Helping Teens Cope with Conflict.
          </MuiLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sources;
