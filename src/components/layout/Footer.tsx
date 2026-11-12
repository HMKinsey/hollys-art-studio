import { en } from '../../locales/en';
import { Caption } from '../shared/Caption';

export function Footer() {
  return (
    <footer className="border-line mt-6 border-t py-4">
      <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <Caption>{en.footer.copyright}</Caption>

        <div className="flex gap-4">
          <a className="hover:underline" href={en.site.emailUrl}>
            <Caption>{en.site.emailLabel}</Caption>
          </a>
          <a
            className="hover:underline"
            href={en.site.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Caption>{en.site.instagram}</Caption>
          </a>
        </div>
      </div>
    </footer>
  );
}
