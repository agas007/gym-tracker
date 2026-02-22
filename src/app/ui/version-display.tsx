import packageJson from '../../../package.json';

export default function VersionDisplay() {
  return (
    <div className="mt-auto pt-8">
      <p className="text-xs text-zinc-500 font-medium">MajapahitGym v{packageJson.version}</p>
    </div>
  );
}
