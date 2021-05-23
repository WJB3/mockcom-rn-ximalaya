module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/utils': './src/utils',
          '@/navigator': './src/navigator',
          '@/pages': './src/pages',
          '@/models': './src/models',
          '@/assets': './src/assets',
          '@/config': './src/config',
          '@/components': './src/components',
        }
      }
    ]
  ]
};
