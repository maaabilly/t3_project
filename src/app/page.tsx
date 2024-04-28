import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/2d2f27dd-f5dd-4c19-9c90-e681b9ea49fc-df0kjc.jpg",
  "https://utfs.io/f/544a76c1-c168-4898-a95d-7e0ccd5bdd46-9dugfh.jpg",
  "https://utfs.io/f/027c295c-5db6-461f-96cd-498bc89f257a-1n7yu8.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
