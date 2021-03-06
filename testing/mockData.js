const cateMock = [
  {
    id: 1,
    name: 'famous web',
    page: 4,
    sort: 1,
  },
  {
    id: 2,
    name: 'library',
    page: 1,
    sort: 1,
    icon: 'jquery.svg',
  },
  {
    id: 3,
    name: 'framework',
    page: 1,
    sort: 1,
  },
];
const siteMock = [
  {
    id: 1,
    name: 'cnn',
    desc: 'cnn news',
    url: 'www.cnn.com',
    grp: 1,
  },
];
const githubMock = [
  {
    id: 1,
    name: 'jquery',
    desc: 'jquery desc',
    github: 'jquery/jqeuery',
    grp: 2,
  },
  {
    id: 2,
    name: 'lodash',
    desc: 'lodash desc',
    github: 'lodash/lodash',
    grp: 2,
    img: 'lodash.svg',
  },
  {
    id: 3,
    name: 'rxjs',
    desc: 'rxjs desc',
    github: 'rxjs/rxjs',
    grp: 3,
    img: 'rxjs.svg',
  },
];

module.exports = {
  cateMock,
  siteMock,
  githubMock,
};
