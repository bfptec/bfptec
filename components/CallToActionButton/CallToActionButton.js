import { ButtonLink } from "components/ButtonLink/ButtonLink";

export const CallToActionButton = ({
  buttonLabel,
  destination,
  align = "left",
}) => {
  const alignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className={alignMap[align]}>
      <ButtonLink label={buttonLabel} destination={destination} />
    </div>
  );
};
