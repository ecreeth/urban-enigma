const {makeMetroConfig} = require('@rnx-kit/metro-config');
const MetroSymlinksResolver = require('@rnx-kit/metro-resolver-symlinks');
const {
  MetroSerializer,
  esbuildTransformerConfig,
} = require('@rnx-kit/metro-serializer-esbuild');

module.exports = makeMetroConfig({
  resolver: {
    resolveRequest: MetroSymlinksResolver(),
  },
  serializer: {
    customSerializer: MetroSerializer(),
  },
  transformer: esbuildTransformerConfig,
  // Add your existing Metro configuration here! It will be merged in.
});
