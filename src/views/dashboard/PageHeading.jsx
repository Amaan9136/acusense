import { Button, Card, CardContent, Typography } from "@mui/material";

const PageHeading = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <Typography variant='h5'>Congratulations Amaan! 🎉</Typography>
          <Typography>Best miner of the month</Typography>
        </div>
        <div>
          <Typography variant='h4' color='primary'>
            Bye
          </Typography>
          <Typography>78% of target fucker 🚀</Typography>
        </div>
        <Button size='small' variant='contained'>
          View Sales
        </Button>
        <img
          src='/images/pages/trophy.png'
          alt='trophy image'
          height={102}
          className='absolute inline-end-7 bottom-6'
        />
      </CardContent>
    </Card>
    )
}

export default PageHeading
