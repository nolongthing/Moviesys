import React, { useState } from 'react';
import { Upload } from 'antd';
import { RcCustomRequestOptions, UploadFile } from 'antd/lib/upload/interface';
import { uploadImg } from '../api';

export default function UploadCom() {
  const [fileList, setFileList] = useState<any[]>([
    // {
    //   uid: '-1',
    //   name: 'image'
    // }
  ])
  function onPreview(data: UploadFile<any>) {
    console.log(data)
  }
  async function uploadAction(options: RcCustomRequestOptions) {
    const formData = new FormData();
    formData.append('image', options.file);
    const { data } = await uploadImg(formData);
    const file = {
      uid: options.file.uid,
      name: options.file.name,
      url: `/images/${data.fileName}`
    }
    setFileList([...fileList, file]);
  }
  return (
    <div>
      <Upload
        accept=".jpg, .jpeg, .png"
        customRequest={uploadAction}
        listType="picture-card"
        fileList={fileList}
        onPreview={onPreview}
      >
        {fileList.length < 2 && '+ Upload'}
      </Upload>
    </div>
  )
}
