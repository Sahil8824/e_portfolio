import Reveal from "@/components/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="mb-3 font-mono text-sm text-accent">
        {"// "}
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-relaxed text-ink2">
          {description}
        </p>
      )}
    </Reveal>
  );
}