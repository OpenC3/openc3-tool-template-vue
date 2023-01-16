<!--
# Copyright 2023 OpenC3, Inc.
# All Rights Reserved.
#
# This file may also be used under the terms of a commercial license
# if purchased from OpenC3, Inc.
-->

<template>
  <div>
    <top-bar :menus="menus" :title="title" />
    <v-card>
      <v-card-title> Example Card </v-card-title>
      <v-card-text>
        <v-btn block @click="buttonPress"> Example Button </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { OpenC3Api } from '@openc3/tool-common/src/services/openc3-api'
import TopBar from '@openc3/tool-common/src/components/TopBar'

export default {
  components: {
    TopBar,
  },
  data() {
    return {
      title: 'Tool Template Vue',
      api: null,
      menus: [
        {
          label: 'File',
          items: [
            {
              label: 'Show Alert',
              command: () => {
                alert('Alert Shown')
              },
            },
          ],
        },
      ],
    }
  },
  created() {
    this.api = new OpenC3Api()
  },
  methods: {
    buttonPress() {
      alert('Button Pressed')
    },
  },
}
</script>
