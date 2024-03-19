import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        badge: {
            variant: 'info',
            text: 'MENUITEMS.DASHBOARDS.BADGE',
        }
    },
    {
        id: 3,
        isLayout: true
    },
    {
        id: 4,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true,
    },
    {
        id: 5,
        label: 'MENUITEMS.ANNOUNCE.TEXT',
        icon: 'bx bxs-megaphone',
        link: '/Announce',
    },
  {
    id: 6,
    label: 'MENUITEMS.ANNOUNCEDETAILS.TEXT',
    icon: 'bx bx-git-repo-forked',
    link: '/Announce/details',
  },
  {
    id: 7,
    label: 'MENUITEMS.ANNOUNCEREVIEW.TEXT',
    icon: 'bx bx-message-rounded',
    link: '/Announce/review',
  },
  {
    id: 8,
    label: 'MENUITEMS.ANNOUNCENOTIFICATION.TEXT',
    icon: 'bx bxs-notification',
    link: '/Announce/notification',
  },
];

