import puppeteer from 'puppeteer';
import { promises as fs } from 'fs';

(async () => {

  const browser = await puppeteer.launch({
    args: ['--no-sandbox']
  });

  try {
    const archiveUrl = process.env.UNITY_ARCHIVE_URL || 'https://unity3d.com/get-unity/download/archive';
    const jsonPath = process.env.UNITY_VERSIONS_PATH || __dirname + '/unity-versions.json';
  
    const page = await browser.newPage();
  
    await page.goto(archiveUrl);
  
    const unityVersionInfo = await page.evaluate(
      () => Array.from(
        document.querySelectorAll('.unityhub') as NodeListOf<HTMLAnchorElement>,
        a => {
          const link = a.href.replace('unityhub://', '');
          return {
            version: link.split('/')[0],
            changeset: link.split('/')[1]
          }
        }
      )
    );
  
    await fs.writeFile(jsonPath, JSON.stringify(unityVersionInfo), {encoding:'utf-8'});
  
    console.log('DONE');
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
  }

})();