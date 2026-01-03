import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  authSidebar: [
    {
      type: 'doc',
      id: 'VERIFY',
      label: 'Verify Signatures',
    },
    {
      type: 'doc',
      id: 'attestation',
      label: 'Release Attestation',
    },
  ],
};

export default sidebars;
