"use client"

import React from 'react'
import { Container, Typography, Box, Button, Link } from '@mui/material'
import { useRouter } from 'next/navigation';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ChatIcon from '@mui/icons-material/Chat';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


const Goal = () => {

  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/Topics');  // Redirect to the Goal page
  };

  return (
    <Container

      sx={{
        display:'flex',
        flexDirection:'column',
        pt:"20px"}}>

      <Typography variant="h4"
        sx={{margin:'10px'}}>
        Goals for Supporting Your Teen’s Mental Health
      </Typography>

      {/* goal 1 */}
      <Box 
        sx={{
          margin:'20px',
          borderStyle:'groove',
          borderRadius:'10px',
          backgroundColor:'lightgray',
          padding:'2px',
          paddingBottom:'8px'
        }}>

          <Typography variant="h6"
            sx={{padding:'7px', display: 'flex', alignItems: 'center'}}>
            <HealthAndSafetyIcon sx={{mr: 1}} /> 
            Goal 1: Recognize Key Signs of Mental Health Issues
          </Typography>

          <Typography variant="body1"
            sx={{paddingLeft:'15px'}}>
            Parents will be able to identify at least three key signs of common 
            mental health issues such as anxiety, depression, and mood disorders in their teens.
          </Typography>

          <Box>
            <ul >
              <li>Anxiety: Excessive worry, restlessness, or tension.</li>
              <li>Depression: Persistent sadness, loss of interest, and fatigue.</li>
              <li>Mood Swings: Extreme highs and lows in emotions.</li>
            </ul>
          </Box>
          

      </Box>

        {/* goal 2 */}
      <Box 
        sx={{
          margin:'20px',
          borderStyle:'groove',
          borderRadius:'10px',
          backgroundColor:'lightgray',
          padding:'2px',
          paddingBottom:'8px'
        }}>

          <Typography variant="h6"
            sx={{padding:'7px', display: 'flex', alignItems: 'center'}}>
            <ChatIcon sx={{mr: 1}} />
            Goal 2: Learn Effective Communication Strategies
          </Typography>

          <Typography variant="body1"
            sx={{paddingLeft:'15px'}}>
            Parents will discover at least two proven communication strategies to 
            discuss mental health with their teens in a supportive and non-judgmental manner.
          </Typography>

          <Box>
          <ul >
            <li>Active Listening: Pay full attention and validate their feelings.</li>
            <li>Open Questions: Ask questions that encourage conversation without judgment.</li>
          </ul>
          </Box>
      
      </Box>


        {/* goal 3 */}
      <Box
        sx={{
          margin:'20px',
          borderStyle:'groove',
          borderRadius:'10px',
          backgroundColor:'lightgray',
          padding:'2px',
          paddingBottom:'8px'
        }}>

          <Typography variant="h6"
            sx={{padding:'7px', display: 'flex', alignItems: 'center'}}>
            <SupportAgentIcon sx={{mr: 1}} />
            Goal 3: Access Professional Resources for Help
          </Typography>

          <Typography variant="body1"
            sx={{paddingLeft:'15px'}}>
            Parents will be provided with helpful resources throughout their time, such as national helplines, local therapists, or online support services.
          </Typography>

          {/* add links */}
          <Box>
          <ul >
            <li> National Helpline: 1-800-273-TALK (8255)</li>
            <li><Link href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjtpKLxjoWJAxUYYUcBHZkENloYABADGgJxdQ&ae=2&co=1&gclid=CjwKCAjw9p24BhB_EiwA8ID5BtvYJbq6UVlZMIQVVZZgqDZ--cZc8-NSCHQGCAL6gH7VfXAFbUnJ3BoC8C0QAvD_BwE&ohost=www.google.com&cid=CAESVuD26MY9zy6_wRKniADxcbWE99hYsbQLtl8De9qUbD_TePJBXZMbGsjRQUksLYL5gxnpAULuoN6Z6gziYMAEtiAIMnOp0fXSeXKWqBtRcFCmoMxLdCP8&sig=AOD64_28FHqCNTTzgpv6Je6xqCSsvp2n_g&q&adurl&ved=2ahUKEwjd-ZbxjoWJAxXfD1kFHX8lNLwQ0Qx6BAgIEAE"> Find a Therapist</Link></li>
            <li><Link href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi_wKyAj4WJAxWAaEcBHR-8H3MYABABGgJxdQ&ae=2&co=1&gclid=CjwKCAjw9p24BhB_EiwA8ID5Bgit9iOBKJH3FX8vdOh4oYdXEnj_QYgjZsvieDD9Q64SyJ_BghpyTxoC5hkQAvD_BwE&ohost=www.google.com&cid=CAESVuD2ygR-yUFWbGeOfrRucG-BSnR-CUuu5_-AnbtpJeRPVWedruzpa13wV2aGHeHansR5d9RShlt2OfwCXIXeSwPlSnyokNDRrIAi1fLSfoWDHh506JKZ&sig=AOD64_1A8Z_eG_3F-Z03sMny5t08UIRxlg&q&adurl&ved=2ahUKEwjVgqWAj4WJAxXOLFkFHaBzO0gQ0Qx6BAgiEAEs"> Online Support Groups: Connect with others</Link></li>
          </ul>
          </Box>

      </Box>


      {/* ending
      Call to Action Section:
        Encouragement: "Start recognizing the signs, communicating with your teen, and accessing professional support today!"
        Button: “Continue to Next Section” (Links to Mental Health Topics section)
      */}
      
      <Box
        sx={{margin:"15px"}}>

        <Typography
          variant="h5" 
          sx={{marginBottom:1}}>
        Start recognizing the signs, communicating with your teen, and accessing professional support today!
        </Typography>

        <Button 
          variant="contained" 
          sx={{
            paddingLeft:'10px'}}
          onClick={handleButtonClick}
          >

          Links to Mental Health Topics section 
        </Button>

      </Box>


    </Container>
  )
}

export default Goal;
