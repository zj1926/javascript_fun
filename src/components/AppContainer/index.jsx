import React from 'react';
import PropTypes from 'prop-types';

import Html from './Html';
import Layout from './Layout';

import {
  publicPath,
  leftNavText,
  iconCdnUrl,
  pageLink,
  pageAssetFileName,
} from '../../config';
const { version } = process.env;
const AppContainer = ({ url, children }) => (
  <Html
    year={leftNavText[0]}
    favIconUrl={`${iconCdnUrl}/fav.ico`}
    script={`${publicPath}/${pageAssetFileName[url]}.js`}
    style={`${publicPath}/${pageAssetFileName[url]}.css`}
    lastBuildDate={process.env.lastBuildDate || 'dev'}
    version={version}
  >
    <Layout page={pageLink[url]} leftNavText={leftNavText}>
      {children}
    </Layout>
  </Html>
);

AppContainer.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppContainer;