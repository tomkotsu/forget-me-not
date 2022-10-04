import React from "react";
import phonePlant from "../assets/imgs/phone-plant.svg";
import camera from "../assets/imgs/camera.svg";
import gardenIcon from "../assets/imgs/garden-icon.svg";

const HowTo = () => {
  return (
    <section className="bg-green-500 text-blue-900 p-12" id="how-to">
      <div className="howto-wrapper flex flex-col justify-center items-center text-2xl gap-8">
        <div className="howto-1 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold">What is it?</h1>
            <p className="w-72 h-auto text-lg font-bold">
              forget-me-not is a computer vision AI that can tell you what
              flower you're looking at. It uses a convolutional neural network
              trained on almost 10000 publicly available photos of flowers and
              can categorise 102 species (limited to species commonly found in
              the uk for now).
            </p>
          </div>
          <img
            src={phonePlant}
            alt="a phone icon with plants"
            className="w-72 h-auto text-lg"
          />
        </div>

        <div className="howto-1 flex flex-col md:flex-row-reverse justify-center items-center gap-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold text-l md:text-right">How to use</h1>
            <ul className="w-72 h-auto text-lg font-bold md:text-right flex flex-col gap-6">
              <li>1. Start wondering what that flower you're looking at is.</li>
              <li>2. Take a photo of the flower.</li>
              <li>
                3. Upload the photo with the big green button above, or by
                clicking here.
              </li>
              <li>
                4. Receive your results!
              </li>
              <li>
                5. If you're signed in, you can add the flower to your garden to
                keep track of everything you've seen. if you're not, you can
                register here.
              </li>
            </ul>
          </div>
          <img
            src={camera}
            alt="a phone and a flower"
            className="w-72 h-auto text-lg"
          />
        </div>
        <div className="howto-1 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold">Future plans</h1>
              <p className="w-72 h-auto text-lg font-bold">
                One obvious area for improvement is the number of plant species
                forget-me-not can identify and categorise. Not only would it be cool
                to include less common UK species, but species worldwide. Why not
                trees, birds, and insects, too? This would likely require transfer
                learning to be feasible, though.
                <br></br>
                <br></br>
                another feature I would like to add is a 3D grid representing each
                user's garden: add a flower to your list, and have it in pixel form
                in your garden forever. The robots will water them while you're not
                there.
              </p>
          </div>
          <img
            src={gardenIcon}
            alt="an ecological garden icon"
            className="w-72 h-auto text-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HowTo;
