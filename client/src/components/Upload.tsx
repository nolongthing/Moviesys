import React, { useEffect, useState } from 'react';
import { Upload } from 'antd';
import { RcCustomRequestOptions, UploadFile } from 'antd/lib/upload/interface';

export default function UploadCom() {
  const [fileList, setFileList] = useState<any[]>([
    // {
    //   uid: '-1',
    //   name: 'image'
    // }
  ]);
  // useEffect(() => {
  //   initFun();
  // }, [])

  // async function initFun() {
  //   const { data } = await getMovie();
  //   console.log(data);
  // }
  function onPreview(data: UploadFile<any>) {
    console.log(data)
  }
  function uploadAction(options: RcCustomRequestOptions) {
    console.log(options);
    const formData = new FormData();
    const file = {
      uid: options.file.uid,
      name: options.file.name,
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
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </div>
  )
}
