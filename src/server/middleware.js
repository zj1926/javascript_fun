import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Html from '../modules/Html';
import Layout from '../modules/Layout';

import BoxGroup from '../modules/BoxGroup';
import GitBox from '../modules/GitBox';
import LinkBox from '../modules/LinkBox';
import gitSource from '../../public/github.json';
import siteSource from '../../public/site.json';
import {
  leftNavText,
  iconCdnUrl,
  githubUrl,
  defaultIcon,
  pageLink,
  pageAssetFileName,
} from '../config';

export const linkMd = (req, res) => {
  const app = siteSource.list.map(v => {
    return (
      <BoxGroup key={v.id} title={v.name} isWebsite>
        {v.list.map(v1 => {
          return (
            <LinkBox key={v1.url} name={v1.name} desc={v1.desc} url={v1.url} />
          );
        })}
      </BoxGroup>
    );
  });
  const htmlDOM = (
    <Html
      year={leftNavText[0]}
      favIconUrl={`${iconCdnUrl}/fav.ico`}
      script={`/${pageAssetFileName[req.url]}.js`}
      style={`/${pageAssetFileName[req.url]}.css`}
      lastBuildDate={process.env.lastBuildDate || 'dev'}
      version="abc"
    >
      <Layout page={pageLink[req.url]} leftNavText={leftNavText}>
        {app}
      </Layout>
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.status(200);
  res.send(`<!DOCTYPE html>${html}`);
};

export const gitMd = (req, res) => {
  const app = gitSource
    .filter(v => v.page === pageLink[req.url])
    .map(v => {
      return (
        <BoxGroup key={v.id} title={v.name}>
          {v.list.map(v1 => {
            return (
              <GitBox
                key={v1.github}
                name={v1.name}
                img={`${iconCdnUrl}/${v1.img || defaultIcon}`}
                star={v1.star}
                url={`${githubUrl}/${v1.github}`}
              />
            );
          })}
        </BoxGroup>
      );
    });
  const htmlDOM = (
    <Html
      year={leftNavText[0]}
      favIconUrl={`${iconCdnUrl}/fav.ico`}
      style={`/${pageAssetFileName[req.url]}.css`}
      script={`/${pageAssetFileName[req.url]}.js`}
      lastBuildDate={process.env.lastBuildDate || 'dev'}
      version="abc"
    >
      <Layout page={pageLink[req.url]} leftNavText={leftNavText}>
        {app}
      </Layout>
    </Html>
  );
  const html = renderToStaticMarkup(htmlDOM);
  res.status(200);
  res.send(`<!DOCTYPE html>${html}`);
};