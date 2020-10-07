import { promises as fs } from 'fs';
import { JSDOM } from 'jsdom';
import fetch from 'node-fetch';

(async () => {

  try {
    const archiveUrl = process.env.UNITY_ARCHIVE_URL || 'https://unity3d.com/get-unity/download/archive';
    const jsonPath = process.env.UNITY_VERSIONS_PATH || __dirname + '/unity-versions.json';

    const html = await (await fetch(archiveUrl)).text();
    const dom = new JSDOM(html);

    const unityVersionInfo = Array.from(
      dom.window.document.querySelectorAll('.unityhub') as NodeListOf<HTMLAnchorElement>,
      a => {
        const link = a.href.replace('unityhub://', '');
        return {
          version: link.split('/')[0],
          changeset: link.split('/')[1]
        }
      }
    )
  
    await fs.writeFile(jsonPath, JSON.stringify(unityVersionInfo), {encoding:'utf-8'});
  
    console.log('DONE');
  } catch (e) {
    console.error(e);
  } finally {

  }

})();