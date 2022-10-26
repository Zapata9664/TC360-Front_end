import React from 'react';
import { Card } from '@mui/material';
import { CardMedia, CardContent, Typography, CardActions } from '@mui/material';
import {
  LogoEvents,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
} from '../assets';
import { Button } from './button.component';
import { AccessTime, LocationOn, CalendarMonth } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { INVITE_STATUS } from '../constants/inviteStatus.constant';
import { NavLink } from 'react-router-dom';
import { ROUTES_CONSTANTS } from '../pages';


const IMAGE_EVENT = {
  image1: LogoEvents,
  image2: Image2,
  image3: Image3,
  image4: Image4,
  image5: Image5,
  image6: Image6,
  image7: Image7,
};

export const Event = ({ isCardInvite, name, description, coordinator, type, date, time, location, guests }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="500"
        image={IMAGE_EVENT[Image2]}
        alt="Tennis Club"
        className="h-60"
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography height={50} variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography height={50} variant="body2" color="text.secondary">
          {coordinator}
        </Typography>
        <Typography height={50} variant="body2" color="text.secondary">
          {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div>
            <CalendarMonth /> {date}
          </div>
          <div>
            <AccessTime /> {time}
          </div>
          <div className="h-11">
            <LocationOn /> {location}
          </div>
        </Typography>
        <Typography height={50} variant="body2" color="text.secondary">
          {guests}
        </Typography>
      </CardContent>
      <CardActions>
        {isCardInvite ? (
          <React.Fragment>
            <Button
              size="small"
              className="text-green-600"
              color={
                event.inviteStatus === INVITE_STATUS.yes ? 'success' : 'inherit'
              }
              variant="contained"
            >
              Yes
            </Button>

            <Button
              size="small"
              variant="contained"
              color={
                event.inviteStatus === INVITE_STATUS.no ? 'success' : 'inherit'
              }
            >
              No
            </Button>

            <Button
              size="small"
              variant="contained"
              color={
                event.inviteStatus === INVITE_STATUS.maybe
                  ? 'success'
                  : 'inherit'
              }
            >
              Maybe
            </Button>
          </React.Fragment>
        ) : (
          <NavLink to={ROUTES_CONSTANTS.EVENTDETAIL}>
          <Button size="small" variant="text">
            Detail
          </Button>

          </NavLink>
        )}
      </CardActions>
    </Card>
  );
};

Event.propTypes = {
  event: PropTypes.object,
  isCardInvite: PropTypes.bool,
  name: PropTypes.string,
  description: PropTypes.string,
  coordinator: PropTypes.string,
  type: PropTypes.string,
  time: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
  guests: PropTypes.string,
};
