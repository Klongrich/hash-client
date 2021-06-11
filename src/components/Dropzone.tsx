import { Box, Flex, Text } from '@chakra-ui/react';
// import { Image } from 'cloudinary-react';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Dropzone() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;

    acceptedFiles.forEach(async (acceptedFile: any) => {
      const { signature, timestamp } = await getSignature();

      const formData = new FormData();
      formData.append('file', acceptedFile);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      // formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_KEY);

      const response = await fetch(url, {
        method: 'post',
        body: formData,
      });
      const data = await response.json();

      // setUploadedFiles((old) => [...old, data]);
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: 'image/*', multiple: false });

  return (
    <>
      <Flex
        flexDirection="column"
        transition="border 0.24s ease-in-out"
        borderRadius="2px"
        flex="1"
        outline="none"
        p="20px"
        justifyContent="center"
        alignItems="flex"
        fontWeight="bold"
        cursor="pointer"
        borderWidth="2px"
        borderStyle={isDragActive ? 'solid' : 'dashed'}
        // {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <Box outline="none" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <Text>Drop the files here ...</Text>
          ) : (
            <Text>Drag and drop some files here, or click to select files</Text>
          )}
        </Box>
      </Flex>
      {/* {uploadedFiles.map((file, id: number) => (
        <Box key={id}>
          <Image
            cloudName={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
            publicId={file.public_id}
            width="100"
            crop="scale"
          />
        </Box>
      ))} */}
    </>
  );
}

async function getSignature() {
  const response = await fetch('/api/sign');
  const data = await response.json();
  const { signature, timestamp } = data;
  return { signature, timestamp };
}
