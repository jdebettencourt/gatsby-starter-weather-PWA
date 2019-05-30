module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`,
  /*  pathPrefix: '/static-gatsby-weather',*/
  },
  plugins: [
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyJS_WX",
        short_name: "GatsbyJS_WX",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "./static/favicon.ico", // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '450aaacef02ea3a56bf2ae24a7d7675e',
        location: 'Chicago',
        units: 'imperial',
        type: 'weather'
      },
    },
  
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '01cfa1f338cb65fa0a5db70d91a78524',
        latitude: '43.03',
        longitude: '-87.74',
        exclude: ['minutely']
      },
    } 
    
  ]
}