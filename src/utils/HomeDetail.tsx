export interface homeDetailProps {
    id: number;
    title?: string;
    description: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
  }

export const HomeDetail: homeDetailProps = {
    id:1,
    title: 'Beautiful Family House',
    description:"Welcome to your dream home! This stunning property is now available for sale, offering an exceptional blend of comfort, elegance, and modern amenities. Situated in a serene and highly sought-after neighborhood, this home features spacious living areas filled with natural light, meticulously designed to provide a perfect setting for both relaxation and entertainment. The gourmet kitchen is equipped with top-of-the-line appliances and stylish finishes, making it a haven for culinary enthusiasts. The master suite is a luxurious retreat with a private ensuite bathroom and ample closet space. Additional bedrooms are generously sized, providing cozy spaces for family and guests. The beautifully landscaped backyard is perfect for outdoor gatherings, with plenty of room for gardening or simply enjoying a peaceful evening. Located close to excellent schools, shopping centers, and recreational facilities, this home offers convenience and an exceptional quality of life. Don't miss this opportunity to make this exquisite property your own – schedule a viewing today and step into a future filled with endless possibilities.",
    price:"$9999",
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
}