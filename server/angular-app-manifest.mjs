
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 10968, hash: '7297c2fabdda23d19b20565b9ea2e6e9a3dda56645e7669faddcc4d1d2af2f49', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 990, hash: '053ee3af5e4cde58fa3f503568e339a328cbde76dc730cd4128929857993b738', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21395, hash: '58a1054b66b15e71a7bc1a079c774d9f692251a0482e82d691a1f335a1fb7858', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ETRMJ2NS.css': {size: 47992, hash: 'UQ4reD2SVDs', text: () => import('./assets-chunks/styles-ETRMJ2NS_css.mjs').then(m => m.default)}
  },
};
