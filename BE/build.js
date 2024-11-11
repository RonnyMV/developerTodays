require('esbuild').build({
  entryPoints: ['src/server.ts'],
  outfile: 'dist/server.js',
  bundle: true,
  platform: 'node',
  target: 'node14',
}).catch(() => process.exit(1));
