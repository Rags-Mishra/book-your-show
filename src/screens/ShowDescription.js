import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Modal,
  Box,
  IconButton,
  Input,
  Divider,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { Add, Circle, LocationCity, Remove, Star } from "@mui/icons-material";

const ShowDescription = () => {
  const [open, setOpen] = useState(false);
  const [seats, setSeats] = useState(1);
  let location = useLocation();
  const handleAddSeats = () => {
    setSeats((seats) => seats + 1);
  };
  const handleSubtractSeats = () => {
    if (seats !== 1) {
      setSeats((seats) => seats - 1);
    }
  };
  return (
    <Grid
      container
      sx={{
        marginTop: { md: "10%", xs: "15%" },
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "1%",
      }}
      columns={12}
    >
      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          backgroundColor: "#000",
          color: "#fff",
          borderRadius: "15px",
          padding: "1%",
        }}
        md={12}
      >
        <Grid
          item
          sx={{
            width: { md: "20%", xs: "60%" },
            alignSelf: "center",
            marginY: "2%",
          }}
        >
          <img
            src={location?.state?.show?.show?.image?.medium}
            alt={location?.state?.show?.show?.name}
            style={{
              borderRadius: "15px",
              width: "100%",
              borderColor: "#F05537",
              borderStyle: "solid",
            }}
          />
        </Grid>

        <Grid
          item
          md={9}
          xs={12}
          sx={{
            paddingX: "2%",
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, alignSelf: { xs: "center" }, marginY: "2%" }}
          >
            {location?.state?.show?.show?.name}
          </Typography>

          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              marginY: "2%",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
              Summary:&nbsp;
            </Typography>
            <Typography variant="body2">
              {location?.state?.show?.show?.summary}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              marginY: "2%",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
              Premiered on:&nbsp;
            </Typography>
            <Typography variant="body2">
              {location?.state?.show?.show?.premiered}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              marginY: "2%",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
              Schedule:&nbsp;
            </Typography>
            <Typography variant="body2">
              {location?.state?.show?.show?.schedule?.time}, &nbsp;&nbsp;
            </Typography>
            {location?.state?.show?.show?.schedule?.days?.map((day) => (
              <Typography>{day}</Typography>
            ))}
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              marginY: "2%",
            }}
          >
            <Typography sx={{ fontSize: "18px", fontWeight: 600 }}>
              Time Zone:&nbsp;
            </Typography>
            <Typography variant="body2">
              {location?.state?.show?.show?.network?.country?.timezone}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ display: "flex", flexDirection: "row" }}
            md={12}
            xs={12}
          >
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexGrow: 1,
              }}
              xs={2}
              md={1}
            >
              <Star sx={{ color: "#ffb71c", alignSelf: "center" }} />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {location?.state?.show?.show?.rating?.average}
                &nbsp;&nbsp;&nbsp;&nbsp;
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              xs={4}
              md={2}
            >
              {location?.state?.show?.show?.genres?.map((genre) => (
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
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
              xs={5}
              md={2}
            >
              <LocationCity />
              <Typography>
                {location?.state?.show?.show?.network?.country?.name}
              </Typography>
            </Grid>
          </Grid>
          <Button
            sx={{
              backgroundColor: "#F05537",
              textTransform: "none",
              color: "#000",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#000",
                color: "#F05537",
              },
              height: "8vh",
              marginTop: "4%",
            }}
            onClick={() => setOpen(true)}
          >
            <Typography sx={{ fontWeight: 600 }}>Book Tickets</Typography>
          </Button>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid
          container
          sx={{
            width: { md: "40%", xs: "70%" },
            backgroundColor: "white",
            display: "flex",
            padding: "2%",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ alignSelf: "center", width: { md: "30%", xs: "70%" } }}>
            <img
              src={location?.state?.show?.show?.image?.medium}
              alt={location?.state?.show?.show?.name}
              style={{ width: "100%" }}
            />
          </Box>
          <Divider />
          <Grid item sx={{ display: "flex" }}>
            <Typography>Name:&nbsp;</Typography>
            <Typography>{location?.state?.show?.show?.name}</Typography>
          </Grid>
          <Grid item sx={{ display: "flex" }}>
            <Typography>Rating:&nbsp;</Typography>
            <Typography>
              {location?.state?.show?.show?.rating?.average}
            </Typography>
          </Grid>
          <Grid item sx={{ display: "flex" }}>
            <Typography>Genres:&nbsp;</Typography>
            {location?.state?.show?.show?.genres?.map((genre) => (
              <Typography>{genre},</Typography>
            ))}
          </Grid>
          <Grid item sx={{ display: "flex" }}>
            <Typography>Date:&nbsp;</Typography>
            <Input type="date" sx={{ alignSelf: "center" }} />
          </Grid>
          <Grid item sx={{ display: "flex", alignItems: "center" }}>
            <Typography>Number of seats:&nbsp;</Typography>
            <IconButton
              onClick={() => handleAddSeats()}
              sx={{ backgroundColor: "#F05537", padding: 0, marginX: "1%" }}
            >
              <Add sx={{ fontSize: "16px" }} />
            </IconButton>
            {seats}
            <IconButton
              onClick={() => handleSubtractSeats()}
              sx={{ backgroundColor: "#F05537", padding: 0, marginX: "1%" }}
            >
              <Remove sx={{ fontSize: "16px" }} />
            </IconButton>
          </Grid>
          <Divider />

          <Button
            sx={{
              backgroundColor: "#F05537",
              textTransform: "none",
              color: "#000",
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#000",
                color: "#F05537",
              },
              height: "8vh",
              marginTop: "4%",
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>Confirm Tickets</Typography>
          </Button>
        </Grid>
      </Modal>
    </Grid>
  );
};

export default ShowDescription;
