import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

export const Photo = ({
  className,
  src,
  imgBaseUrlFull,
  imgBaseUrlPreview,
}) => {
  return (
    <SimpleReactLightbox>
      <SRLWrapper
        options={{
          lightboxTransitionSpeed: 0,
          buttons: {
            showAutoplayButton: false,
            showDownloadButton: false,
            showFullscreenButton: false,
            showNextButton: false,
            showPrevButton: false,
            showThumbnailsButton: false,
          },
          thumbnails: {
            showThumbnails: false,
          },
        }}
      >
        <a href={`${imgBaseUrlFull}${src}`}>
          <img
            className={className}
            src={`${imgBaseUrlPreview}${src}`}
            alt=""
          />
        </a>
      </SRLWrapper>
    </SimpleReactLightbox>
  );
};
