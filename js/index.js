/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const context = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '..', 'contexts', 'zcap-v1.jsonld'),
    {encoding: 'utf8'}
  )
);

const constants = require('./constants');
const {CONTEXT_URL, CBORLD_VALUE} = constants;

const contexts = new Map();
contexts.set(constants.CONTEXT_URL, context);

const appContextMap = new Map();
appContextMap.set(CONTEXT_URL, CBORLD_VALUE);

module.exports = {
  constants,
  contexts,
  appContextMap,
  CONTEXT_URL,
  CONTEXT: context
};
