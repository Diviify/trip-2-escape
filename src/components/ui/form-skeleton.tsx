export function FormSkeleton() {
  return (
    <div
      className="animate-pulse space-y-4 rounded-2xl border border-border bg-card p-6"
      aria-hidden
    >
      <div className="h-6 w-2/3 rounded-md bg-muted" />
      <div className="h-4 w-full rounded-md bg-muted" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="h-10 rounded-lg bg-muted" />
        <div className="h-10 rounded-lg bg-muted" />
        <div className="h-10 rounded-lg bg-muted" />
        <div className="h-10 rounded-lg bg-muted" />
      </div>
      <div className="h-24 rounded-lg bg-muted" />
      <div className="h-10 rounded-lg bg-muted" />
    </div>
  );
}
