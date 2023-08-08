import React, { useContext, useEffect } from "react";
import ShowsContext from "../context/shows/showsContext";
import { Button, Grid, Typography } from "@mui/material";
import { Circle, Star } from "@mui/icons-material";  
import { useNavigate } from "react-router-dom";
const AllShows = () => {
    let navigate =useNavigate();
  const showsContext = useContext(ShowsContext);
  const { shows,getShows } = showsContext;
  useEffect(() => {
    getShows();
  }, []);
  return (
    <Grid
      container
      columns={12}
      sx={{
        marginTop: { md: "5%", xs: "15%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {shows?.map((show) => (
        <Grid
          item
          key={show?.show?.id}
          md={3}
          xs={10}
          sx={{
            margin: { md: "2%", xs: "10%" },
            display: "flex",
            flexDirection: "column",
            borderRadius: "15px",
            // boxShadow: '-5px 5px 5px 5px grey',
          }}
        >
          <Grid item xs={12} sx={{}}>
            <img
              src={show?.show?.image?.medium}
              alt={show?.show?.image?.original}
              style={{
                width: "100%",
                borderRadius: "15px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingX: "2%",
            }}
          >
            <Typography sx={{ fontWeight: 800 }}>{show?.show?.name}</Typography>
            <Grid
              item
              sx={{
                display: "flex",
                textAlign: "center",
                justifyContent: "space-between",
              }}
              xs={2}
              md={2}
            >
              <Star sx={{ color: "#ffb71c" }} />
              <Typography>{show?.show?.rating?.average}</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", textAlign: "center", paddingX: "2%" }}
          >
            {show?.show?.genres?.map((genre) => (
              <>
                <Circle
                  sx={{ fontSize: "9px", alignSelf: "center", color: "grey" }}
                />
                &nbsp;
                <Typography variant={"body2"}>{genre}</Typography>
                &nbsp; &nbsp;
              </>
            ))}
          </Grid>
          <Button
            sx={{
              backgroundColor: "#000",
              textTransform: "none",
              color: "#F05537",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#F05537",
                color: "#000",
              },
              height: "8vh",
            }}
            onClick={()=>navigate('/show-description',{state:{show}})}
          >
            <Typography sx={{ fontWeight: 600 }}>Book Tickets</Typography>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default AllShows;
