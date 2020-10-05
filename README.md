## Unity Scrapper

Simple script to scrape the unity download archive for version and change set info

### Setup and running
- `(npm / yarn) install` to install the dependencies
- `(npm / yarn) start` to run the script

### Enviornment Variables
- `UNITY_ARCHIVE_URL` - URL for the unity archive page, defaults to (https://unity3d.com/get-unity/download/archive)
- `UNITY_VERSIONS_PATH` - path + filename of the output versions json, defaults to (__dirname + '/unity-versions.json')