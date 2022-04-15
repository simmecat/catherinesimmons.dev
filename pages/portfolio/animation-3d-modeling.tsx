import { Button, Text } from "@nextui-org/react";

export default function Animation3DModeling() {
  return (
    <div className="flex flex-col">
      <Text className="font-bold text-3xl">Animation & 3D Modeling</Text>
      <Text>
        All models and animations made with Maya unless specified otherwise.
      </Text>

      <div className="mt-4">
        <Text className="font-bold mb-2">3D Character Model</Text>
        <video controls className="rounded">
          <source
            src="../../videos/3d-character-model.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div className="mt-4">
        <Text className="font-bold mb-2">
          Kinetic Type Made With Adobe After Effects
        </Text>
        <video
          controls
          className="rounded"
          poster="../../images/kinetic-type-thumbnail.png"
        >
          <source
            src="../../videos/animation-kinetic-type.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div className="mt-4">
        <Text className="font-bold mb-2">Waling In Place</Text>
        <video controls className="rounded">
          <source
            src="../../videos/animation-walk-in-place.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div className="mt-4">
        <Text className="font-bold mb-2">One Leg Jump</Text>
        <video controls className="rounded">
          <source
            src="../../videos/animation-one-leg-jump.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div className="mt-4">
        <Text className="font-bold mb-2">Crane Arm Rig</Text>
        <video controls className="rounded">
          <source
            src="../../videos/animation-crane-arm-rig.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>

      <div className="mt-4">
        <Text className="font-bold mb-2">Diamond Thief</Text>
        <video controls className="rounded">
          <source
            src="../../videos/animation-diamond-thief.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </div>
  );
}
