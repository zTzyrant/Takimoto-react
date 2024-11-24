import { cn } from "@/lib/utils";
import { CardBody, CardContainer, CardItem } from "components/ui/3d-card";

export function ThreeDCardDemo({ className }: { className?: string }) {
  return (
    <CardContainer
      className={cn("inter-var rounded-2xl bg-[#e9e9e9] text-black", className)}
      containerClassName={"w-full h-full"}
    >
      <CardBody className="group/card relative flex h-full w-full flex-col rounded-xl border border-[#6a6a6a] p-6">
        <CardItem translateZ="50" className="text-xl font-bold text-black">
          Make things float in air
        </CardItem>
        <CardItem as="p" translateZ="60" className="max-w-sm text-sm text-black">
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full rounded-xl object-cover pt-2 group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex items-center justify-end pt-6">
          <CardItem
            translateZ={20}
            as="button"
            className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white"
          >
            View More
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
