## Unity Scraper

Simple script to scrape the unity download archive for version and change set info

### Setup and running
- `yarn install` to install the dependencies
- `yarn start` to run the script

### Environment variables
- `UNITY_ARCHIVE_URL` - URL for the unity archive page, defaults to (https://unity3d.com/get-unity/download/archive)
- `UNITY_VERSIONS_PATH` - path + filename of the output versions json, defaults to (__dirname + '/unity-versions.json')
