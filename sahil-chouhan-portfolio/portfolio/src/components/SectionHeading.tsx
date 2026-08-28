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
      <p className="font-mono text-sm text-accent mb-3">// {eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink dark:text-paper">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink2 leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
