import 'vuetify/styles';

import { VApp } from 'vuetify/components/VApp';
import { VMain } from 'vuetify/components/VMain'
import { VBtn } from 'vuetify/components/VBtn';
import { VOverlay } from 'vuetify/components/VOverlay';
import { VDataTableVirtual } from 'vuetify/components/VDataTable';
import { VDivider } from 'vuetify/components/VDivider';

import { createVuetify } from 'vuetify';

export default createVuetify({
    components: {
        VApp,
        VMain,
        VBtn,
        VOverlay,
        VDataTableVirtual,
        VDivider,
      },
});
