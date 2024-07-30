// MediaModal.tsx
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import ReactPlayer from "react-player";
import Image from "next/image";
import PrimaryButton from "../Buttons/PrimaryButton";
import AudioPlayer from "../Shared/AudioPlayer";

interface MediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  mediaUri: string;
  mediaType: string;
  creator: string;
  name: string;
}

const MediaModal: React.FC<MediaModalProps> = ({
  isOpen,
  onClose,
  mediaUri,
  mediaType,
  creator,
  name,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="5xl"
      style={{
        aspectRatio: "16/9",
      }}
    >
      <ModalContent className="border border-primaryBorder">
        {(onClose) => (
          <>
            <ModalBody className="px-0 py-0 bg-black">
              <div className="w-full h-full relative">
                {mediaType === "video" && (
                  <ReactPlayer
                    url={mediaUri}
                    controls
                    width="100%"
                    height="100%"
                  />
                )}
                {mediaType === "image" && (
                  <Image src={mediaUri} alt="Media Content" fill />
                )}
                {mediaType === "audio" && (
                  <div className="flex items-center justify-center px-5 h-full">
                    <AudioPlayer url={mediaUri} />
                  </div>
                )}
              </div>
            </ModalBody>
            <ModalFooter className="flex justify-between bg-black items-center">
              <h3 className="font-heading-3xl-anton">{name}</h3>
              <div className="flex flex-col gap-3 items-center max-md:text-center">
                <h4 className="font-content-lg">{creator}</h4>
                <h5 className="font-content-md-4 text-light-gray">Artist</h5>
              </div>

              <PrimaryButton onClick={() => {}}>Upvote</PrimaryButton>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default MediaModal;
