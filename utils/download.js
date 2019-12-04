import RNBackgroundDownloader from 'react-native-background-downloader'
 

const task = RNBackgroundDownloader

let downloader = (id, url, dest) => {
  return task
    .download({
      id,
      url,
      destination: `${RNBackgroundDownloader.directories.documents}/file.pdf`
    })
    .begin(expectedBytes => {
      console.log(`Going to download ${expectedBytes} bytes!`);
    })
    .progress(percent => {
      console.log(`Downloaded: ${percent * 100}%`);
    })
    .done(() => {
      console.log("Download is done!");
    })
    .error(error => {
      console.log("Download canceled due to error: ", error);
    });
}


export default downloader