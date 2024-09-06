import Image from "next/image";
import React from "react";
import fs from "fs";
import path from "path";

// Function to get all image files from public/images
function getImageFiles() {
  const imageDirectory = path.join(process.cwd(), "public/images");
  const imageFilenames = fs.readdirSync(imageDirectory);
  return imageFilenames.filter((file) =>
    /\.(jpg|jpeg|png|gif|svg)$/i.test(file)
  );
}

const Page = () => {
  const imageFiles = getImageFiles();

  return (
    <section className="container px-4 mx-auto h-screen flex flex-col">
      <div className="flex-grow overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6">
          {imageFiles.map((filename, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden hover:shadow-xl transition-shadow "
            >
              <Image
                src={`/images/${filename}`}
                width={400}
                height={300}
                alt={`${filename} ${index + 1}`}
                className="w-full h-96 object-contain "
                style={{ aspectRatio: "400/300", objectFit: "contain" }}
              />
              <div className="col-span-1">
                <p className="text-muted-foreground">
                  {filename.replace(/\.[^/.]+$/, "")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
