import { Profile } from '../../models/profile/profile.interface';

const userList: Profile[] = [
  {
    firstName: 'Marni',
    lastName: 'Brewster',
    email: 'marni@statumhealth.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date()
  },
  {
    firstName: 'Paul',
    lastName: 'Halliday',
    email: 'paul@statumhealth.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date()
  },{
    firstName: 'Monica',
    lastName: 'Callen',
    email: 'monica@statumhealth.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date()
  },{
    firstName: 'Sarah',
    lastName: 'Preesh',
    email: 'sarah@statumhealth.com',
    avatar: 'assets/img/avatar.png',
    dateOfBirth: new Date()
  }
];

export const USER_LIST = userList;
