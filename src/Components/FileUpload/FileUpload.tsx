import { useApolloClient, useLazyQuery } from '@apollo/client';
import React, { ChangeEvent, LegacyRef, useEffect, useState } from 'react';
import {
  CREATE_DOCUMENTS,
  GET_CANDIDATE,
  GET_FILE_UPLOAD_URL,
} from 'service/query/candidate';
import './style.css';
import { error } from 'console';
import { APIRequestHeaders, CallApi } from 'types/request';
import Axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';
import { REQUEST_METHODS } from '../../constants';
import { useGetCandidate } from 'service/hooks/jobs.hooks';
import { useRecoilState } from 'recoil';
import { getCandidateDetails } from 'store/atoms/authAtom';
// import { REQUEST_METHODS } from 'constants';

export enum requestMethods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

export const FileUpload = () => {
  const client = useApolloClient();
  const userId = 2;

  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState<File>();
  const [, setCandidateDetails] = useRecoilState(getCandidateDetails);

  const getFileUploadUrl = async () => {
    return client.query<any, any>({
      query: GET_FILE_UPLOAD_URL,
      variables: {
        // documents: [fileUploadInput],
        key: `candidate/${userId}/resume/${selectedFile?.name}`,
      },
      fetchPolicy: 'network-only',
    });
  };
  const defaultHeaders: APIRequestHeaders = {
    'Content-Type': 'application/json',
  };

  const callApi: CallApi = async ({ payload, headers }) => {
    const apiParams: AxiosRequestConfig = {
      ...payload,
      headers: {
        ...defaultHeaders,
        ...headers,
      },
    };

    // Fire API request
    const apiResponse: AxiosResponse = await Axios(apiParams);
    return apiResponse;
  };

  const uploadFileToS3 = async (url: string, file: File) => {
    const imgBody = new Blob([file as File], { type: file?.type });
    return callApi({
      payload: { method: 'put' as REQUEST_METHODS, url, data: imgBody },
      headers: { 'Content-Type': `application/json` },
    });
  };
  // const SavedCandidatesList = () => {
  const saveUploadedFile = async () => {
    return client.mutate<any, any>({
      mutation: CREATE_DOCUMENTS,
      variables: {
        input: {
          entityName: 'CANDIDATE',
          entityId: userId,
          key: `candidate/${userId}/resume/${selectedFile?.name}`,
          type: 'RESUME',
        },
      },
      fetchPolicy: 'network-only',
      // refetchQueries,
    });
  };
  const [getCandidate] = useLazyQuery(GET_CANDIDATE, {
    fetchPolicy: 'network-only',
  });

  const uploadFile = async () => {
    try {
      const { data } = await getFileUploadUrl();
      const { url, key } = data?.getDocumentUploadUrl || {};
      await uploadFileToS3(url, selectedFile as File);
      const { data: savedData } = await saveUploadedFile();
      if (savedData) {
        // console.log(savedData);
        getCandidate({
          variables: { id: userId },
          onCompleted: (data) => {
            console.log(data);
            const details = data?.getCandidate?.info;
            setCandidateDetails({
              name: details.name,
              age: data?.getCandidate?.age,
              email: details.email,
              phone: details.phone,
              overview: details.summary,
              skills: details.skills,
              gender: { id: 1, label: 'M' },
            });
          },
        });
      }
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    if (selectedFile) uploadFile();
  }, [selectedFile]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
    // uploadFile();
  };
  console.log(selectedFile?.name);
  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // className="dash-btn-two tran3s me-3"
        />

        <input
          type="file"
          onChange={handleFileChange}
          content="Choose file to upload"
        />
      </form>
    </div>
  );
};
