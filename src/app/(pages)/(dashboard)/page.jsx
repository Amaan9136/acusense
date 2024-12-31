import PageHeading from "@/views/dashboard/PageHeading";
import { Grid } from "@mui/material";

export const metadata = {
  title: 'Home - Royal Software Company',
  description: 'RSC Royal Software Company.',
};

const DashboardPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
      <PageHeading />
      </Grid>
      <Grid item xs={12} md={4}>
        <PageHeading />
      </Grid>
      <Grid item xs={12} md={4}>
        <PageHeading />
      </Grid>
      <Grid item xs={12} md={4}>
        <PageHeading />
      </Grid>
    </Grid>
  )
}

export default DashboardPage
