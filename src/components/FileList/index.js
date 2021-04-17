import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import {MdCheckCircle, MdError, MdLink} from 'react-icons/md';

import { Container, FileInfo, Preview } from './style';

export default FileList = ({files, onDelete})=>(

    <Container>
       {files.map(uploadFile=>(
            <li key ={uploadFile.id}>
            <FileInfo>
                <Preview src={uploadFile.preview} />
                <div>
                    <strong>{uploadFile.name}</strong>
                    <span>
                        {uploadFile.readableSize}{" "}
                        {!!uploadFile.url && (
                             <button onClick={()=>{onDelete(uploadFile.id)}}>Excluir</button>
                        )}
                    </span>
                </div>
            </FileInfo>
            <div>
            {!uploadFile.uploaded && !uploadFile.error && (
                <CircularProgressbar
                styles={{
                  root: { width: 24},
                  path: { stroke: "#7159c1" }
                }}
                strokeWidth={10}
                value={uploadFile.progress}
              />
            )}
        
            {uploadFile.url && (
            <a 
                href={uploadFile.url}
                target ="_blank"
                rel = "noopener noreferrer"
            >
                <MdLink style={{marginRight: 8}} size={24} color="#222" />
            </a>)}
            {uploadFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
            {uploadFile.error && <MdError size={24} color="#e57878" />}
        </div>
        </li> 
       ))}
    </Container>
); 

