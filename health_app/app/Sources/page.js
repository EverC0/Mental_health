import { List, ListItem, ListItemText, Typography, Link } from '@mui/material';

function ReferenceList() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        References
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Abate, B. B., Sendekie, A. K., Tadesse, A. W., Engdaw, T., Mengesha, A., Zemariam, A. B., Alamaw, A. W., Abebe, G., &apos; Azmeraw, M. (2024). Resilience after adversity: An umbrella review of adversity protective factors and resilience-promoting interventions. Frontiers in Psychiatry, 15."
            secondary={
              <Link href="https://doi.org/10.3389/fpsyt.2024.1391312" target="_blank" rel="noopener">
                https://doi.org/10.3389/fpsyt.2024.1391312
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Colizzi, M., Lasalvia, A., &apos; Ruggeri, M. (2020). Prevention and early intervention in youth mental health: Is it time for a multidisciplinary and trans-diagnostic model for care? International Journal of Mental Health Systems, 14(1), 1–14."
            secondary={
              <Link href="https://doi.org/10.1186/s13033-020-00356-9" target="_blank" rel="noopener">
                https://doi.org/10.1186/s13033-020-00356-9
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Dall, M., Fellinger, J., &apos; Holzinger, D. (2022). The link between social communication and mental health from childhood to young adulthood: A systematic review. Frontiers in Psychiatry, 13."
            secondary={
              <Link href="https://doi.org/10.3389/fpsyt.2022.944815" target="_blank" rel="noopener">
                https://doi.org/10.3389/fpsyt.2022.944815
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Fischer, J. A., Kelly, C. M., Kitchener, B. A., &apos; Jorm, A. F. (2013). Development of guidelines for adults on how to communicate with adolescents about mental health problems and other sensitive topics. SAGE Open, 3(4), 215824401351676."
            secondary={
              <Link href="https://doi.org/10.1177/2158244013516769" target="_blank" rel="noopener">
                https://doi.org/10.1177/2158244013516769
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Heneghan, A., Stein, R. E. K., Hurlburt, M. S., Zhang, J., Rolls-Reutz, J., Fisher, E., Landsverk, J., &apos; Horwitz, S. M. (2013). Mental health problems in teens investigated by U.S. child welfare agencies. Journal of Adolescent Health, 52(5), 634–640."
            secondary={
              <Link href="https://doi.org/10.1016/j.jadohealth.2012.10.269" target="_blank" rel="noopener">
                https://doi.org/10.1016/j.jadohealth.2012.10.269
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Ligier, F., Giguère, C.-E., Notredame, C.-E., Lesage, A., Renaud, J., &apos; Séguin, M. (2020). Are school difficulties an early sign for mental disorder diagnosis and suicide prevention? Child and Adolescent Psychiatry and Mental Health, 14(1)."
            secondary={
              <Link href="https://doi.org/10.1186/s13034-019-0308-x" target="_blank" rel="noopener">
                https://doi.org/10.1186/s13034-019-0308-x
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Mosler, F., Packer, K., Jerome, L., &apos; Bird, V. (2023). Structured communication methods for mental health consultations in primary care: A scoping review. BMC Primary Care, 24(1), 1–17."
            secondary={
              <Link href="https://doi.org/10.1186/s12875-023-02129-y" target="_blank" rel="noopener">
                https://doi.org/10.1186/s12875-023-02129-y
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="NAMI. (2022). NAMI: National Alliance on Mental Illness. NAMI: National Alliance on Mental Illness."
            secondary={
              <Link href="https://www.nami.org/" target="_blank" rel="noopener">
                https://www.nami.org/
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="National Institute of Mental Health. (2019, May). Child and adolescent mental health. Www.nimh.nih.gov."
            secondary={
              <Link href="https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health" target="_blank" rel="noopener">
                https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Siriwardhana, C., Ali, S. S., Roberts, B., &apos; Stewart, R. (2014). A systematic review of resilience and mental health outcomes of conflict-driven adult forced migrants. Conflict and Health, 8(1)."
            secondary={
              <Link href="https://doi.org/10.1186/1752-1505-8-13" target="_blank" rel="noopener">
                https://doi.org/10.1186/1752-1505-8-13
              </Link>
            }
          />
        </ListItem>
      </List>
    </>
  );
}

export default ReferenceList;
