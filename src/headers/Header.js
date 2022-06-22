import Box from '@mui/material/Box';

function Header() {
    return ( 
        <Box sx={{
            width: '100%',
            height: 100,
            backgroundColor: 'bisque',
            '&:hover': {
              backgroundColor: 'darksalmon',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
            <h1 style={{align:"center", fontFamily:"fantasy", color:"chocolate", paddingTop:20}}>JUST FOOTBALL</h1>
        </Box>
     );
}

export default Header;