import * as ui from './ui';
import { Webcam } from './webcam';

const webcam = new Webcam(document.getElementById('webcam'));

async function init() {
  try {
    await webcam.setup();
  } catch (e) {
    document.getElementById('no-webcam').style.display = 'block';
  }

  ui.init();
}

init();
