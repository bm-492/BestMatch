import {
  //   bookRoom,
  upsertPreference,
  upsertProfile,
} from '@src/controller/user';
import {
  addDormPreference,
  editDormPreference,
} from '@src/controller/user/dormPref';
import { getProfile, getRole } from '@src/controller/user/manager';
import { createTRPCRouter } from '@src/trpc';

export const studentRouter = createTRPCRouter({
  // User
  getProfile: getProfile,
  getRole: getRole,

  // Profile
  upsertProfile: upsertProfile,

  // Mate
  upsertPreference: upsertPreference,

  // Room & Dorm
  addDormPreference: addDormPreference,
  editDormPreference: editDormPreference,

  // Book room
  // bookRoom: bookRoom,
});
