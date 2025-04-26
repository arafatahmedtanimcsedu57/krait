import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CardItemProps {
  index: number;
  card: {
    title: string;
    description: string;
    alternatives?: Array<{
      logo: string;
      alt: string;
      name: string;
    }>;
  };
}

export const CardItem = ({ index, card }: CardItemProps) => {
  return (
    <Card
      key={index}
      className="shadow-sm border-0 bg-[#18181B] text-foreground mx-auto w-full rounded-3xl"
    >
      <CardHeader>
        <CardTitle className="mb-2 text-2xl font-semibold text-white text-start">
          {card.title}
        </CardTitle>
        <CardDescription className="text-start text-[#F4F4F5] h-8">
          {card.description}
        </CardDescription>
      </CardHeader>

      <Separator
        className="mb-6 h-[1px]"
        style={{
          background:
            "linear-gradient(to right, rgba(45,45,45,1) 0%, rgba(255,255,255,0.37) 46%, rgba(45,45,45,1) 100%)",
        }}
      />

      <CardFooter>
        <div className="flex items-center space-x-4 text-sm">
          {card?.alternatives?.length ? (
            <p className="text-xl font-medium text-yellow-400 font-justme">
              Alternative of
            </p>
          ) : null}
          <div className="flex flex-wrap items-center gap-2">
            {card?.alternatives?.map((alt, altIndex) => (
              <div
                key={altIndex}
                className="rounded-xl p-[6px] bg-zinc-700 flex items-center gap-2 text-[#F4F4F5]"
              >
                <img
                  src={alt.logo}
                  alt={alt.alt}
                  className="object-scale-down w-6 h-6 rounded-full"
                />
                <h4>{alt.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
