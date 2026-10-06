type Props = React.ComponentPropsWithoutRef<"div">;

export function Container({ className = "", ...props }: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-[1100px] px-[clamp(1.25rem,5vw,3rem)] ${className}`}
      {...props}
    />
  );
}