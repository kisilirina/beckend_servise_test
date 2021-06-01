import * as uuid from 'uuid'
import * as path from 'path'

const saveFile = (file) => {
  try {
    const fileName = uuid.v4() + '.jpg';
    const filePath = path.resolve('static', fileName);
    file.mv(filePath);
    return fileName;
  } catch (error) {
    console.log(error.message);
  }
}

export {
  saveFile,
}