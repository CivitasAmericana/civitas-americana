import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  papersSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'About the Papers',
    },
    {
      type: 'category',
      label: 'Book I - The Diagnosis', 
      collapsed: true,
      items: [
    {
      type: 'doc',
      id: 'paper-1',
      label: 'No. 1: On the Duty of a Free People to Renew the Conditions of Their Own Liberty',
    },
    {
      type: 'doc',
      id: 'paper-2',
      label: 'No. 2: On Power, and Why It Must Be Expected to Fail Its Own Restraints',
    },
    {
      type: 'doc',
      id: 'paper-3',
      label: 'No. 3: On Interpretation, and the Quiet Substitution of Judgment for Law',
    },
     {
      type: 'doc',
      id: 'paper-4',
      label: 'No. 4: On Federalism Properly Understood, and the Myth of Local Innocence',
    },
     {
      type: 'doc',
      id: 'paper-5',
      label: 'No. 5: On Renewal, and Why Free Governments Must Re-Authorize Themselves',
     },
  ],
},
    {
      type: 'category',
      label: 'Book II - Discipline', 
      collapsed: true,
      items: [
        {
      type: 'doc',
      id: 'paper-6',
      label: 'No. 6: On Citizenship as Burden, Not Identity',
        },
        {
      type: 'doc',
      id: 'paper-7',
      label: 'No. 7: On Elections, and the Myth of Participation',
        },
         {
      type: 'doc',
      id: 'paper-8',
      label: 'No. 8: On Emergency Power and the Normalization of Exception',
        },
         {
      type: 'doc',
      id: 'paper-9',
      label: 'No. 9: On Bureaucracy, Compliance, and the Disappearance of Responsibility',
        },
         {
      type: 'doc',
      id: 'paper-10',
      label: 'No. 10: On Silence, Consent, and the Comfort of Looking Away',
        },
    ],
},
    {
      type: 'category',
      label: 'Book III - Lawful Paths', 
      collapsed: true,
      items: [
        {
      type: 'doc',
      id: 'paper-11',
      label: 'No. 11: On Article V and the Discipline of Difficulty',
       },
        {
      type: 'doc',
      id: 'paper-12',
      label: 'No. 12: On Courts, Courage, and the Limits of Judicial Repair',
       },
        {
      type: 'doc',
      id: 'paper-13',
      label: 'No. 13: On Federalism as Civic Practice',
       },
        {
      type: 'doc',
      id: 'paper-14',
      label: 'No. 14: On Reform Without Revolution',
       },
        {
      type: 'doc',
      id: 'paper-15',
      label: 'No. 15: On Preservation as the Highest Form of Change',
       },
      ],
    },
  ],
};

export default sidebars;
