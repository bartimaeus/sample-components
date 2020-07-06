const path = require('path');

module.exports = {
  title: 'Suralink React Components',
  // theme: {
  //  baseBackground: '#fdfdfc',
  //  link: '#274e75',
  //  linkHover: '#90a7bf',
  //  border: '#e0d2de',
  //  font: ['Helvetica', 'sans-serif'],
  // },
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, 'src/styleguide/components/Logo'),
    // StyleGuideRenderer: path.join(
    //   __dirname,
    //   'src/styleguide/components/StyleGuide',
    // ),
    // SectionsRenderer: path.join(
    //   __dirname,
    //   'src/styleguide/components/SectionsRenderer',
    // ),
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/,
          use: ['file-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js|jsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/react'],
            plugins: [['import', { libraryName: 'antd', style: 'css' }]],
          },
        },
      ],
    },
  },
};
