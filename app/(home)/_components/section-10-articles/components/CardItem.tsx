interface Author {
  avatar: string;
  name: string;
  role: string;
}

interface CardData {
  image: string;
  tags: string[];
  title: string;
  description: string;
  author: Author;
}

interface CardItemProps {
  data: CardData;
}

export function CardItem({ data }: CardItemProps) {
  const { image, tags, title, description, author } = data;

  return (
    <div className="flex flex-col h-auto overflow-hidden shadow-lg rounded-3xl">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48 rounded-b-3xl"
        />
      </div>

      <div className="flex flex-col flex-grow gap-1 py-4">
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium text-[#F4F4F5] rounded-lg bg-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-1 text-xl font-semibold text-white">{title}</h3>
        <p className="mb-auto text-sm text-[#F4F4F5] line-clamp-2">
          {description}
        </p>
      </div>

      <div className="flex items-center py-1 mt-1">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-8 h-8 mr-3 rounded-full"
        />
        <div>
          <p className="text-sm font-medium">{author.name}</p>
          <p className="text-xs text-zinc-500">{author.role}</p>
        </div>
      </div>
    </div>
  );
}
