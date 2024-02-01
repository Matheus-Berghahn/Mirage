// useImageRequest.ts
import { useState, useEffect } from 'react';
import { usePost } from '../useFetch';

interface PropsImageRequest {
    valueInputForm: string;
    requestImage: boolean;
}

const useImageRequest = ( {valueInputForm, requestImage}: PropsImageRequest ) => {
  const [dataImage, setDataImage] = useState("https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg");
  const [isLoading, setIsLoading] = useState(false);

  const [ isComponentMounted, setComponentMounted ] = useState(false);

  useEffect(() => {
    if (isComponentMounted){
      setIsLoading(true)
      const handleCreatedImage = async () => {
        try {
          const responseData = await usePost({ mensagem: valueInputForm });
 //       setDataImage(responseData.imageURL.url)
        } catch (error) {
          console.error(`Erro`);
        } finally {
          setIsLoading(false)
        }   
      };
  
      handleCreatedImage()

    }else {
      setComponentMounted(true)
    }
  }, [requestImage])

  return { dataImage, isLoading };
};

export default useImageRequest;
