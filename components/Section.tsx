import { Container } from "./Container";

type Props = React.ComponentPropsWithoutRef<"section"> & {
  tone?: "dark" | "light";
};

const tones = {
  dark: "bg-ink text-paper",
  light: "bg-paper text-ink",
};

export function Section({
  tone = "light",
  className = "",
  children,
  ...props
}: Props) {
  return (
    <section
      className={`${tones[tone]} py-[clamp(4rem,9vw,7rem)] ${className}`}
      {...props}
    >
      <Container>{children}</Container>
    </section>
  );
}