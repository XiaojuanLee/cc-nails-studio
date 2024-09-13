interface ServiceCardProps {
    title: string;
    image: string;
  }
  
  export default function ServiceCard({ title, image }: ServiceCardProps) {
    return (
      <div className="p-6 bg-white shadow-md">
        <h2 className="text-xl font-bold">{title}</h2>
        <img src={image} alt={title} className="mt-4" />
      </div>
    );
  }