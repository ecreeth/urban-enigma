module.exports = {
  presets: [
    [
      '@rnx-kit/babel-preset-metro-react-native',
      {
        disableImportExportTransform: true,
        unstable_transformProfile: 'esbuild',
      },
    ],
  ],
};
