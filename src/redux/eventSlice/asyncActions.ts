import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { EventObject } from './types';
import { url } from "../../constants/url";

export const fetchEvents = createAsyncThunk<EventObject[]>(
  "events/fetchByIdStatus",
  async () => {
    const { data } = await axios.get<EventObject[]>(url + "/events/api/event/");
    return data;
  }
);
