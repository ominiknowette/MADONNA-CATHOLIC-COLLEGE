type PageTitleProps = {
  title: string;
  description: string;
};

/** Displays consistent headings across dashboard pages. */
export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div className="mb-6 min-w-0 sm:mb-8">
      <h1 className="break-words text-2xl font-black leading-tight tracking-normal text-black sm:text-3xl md:text-4xl">{title}</h1>
      <p className="mt-2 max-w-2xl break-words text-sm text-mcc-muted sm:text-base">{description}</p>
    </div>
  );
}
