import { sharedStrings } from '../../constants/shared'
import { Caption } from '../shared/Caption'

export function Footer() {
  return (
    <footer className="mt-6 border-t border-line py-4">
      <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <Caption>{sharedStrings.footer.copyright}</Caption>

        <div className="flex gap-4">
          <a className="hover:underline" href={sharedStrings.site.emailUrl}>
            <Caption>{sharedStrings.site.emailLabel}</Caption>
          </a>
          <a
            className="hover:underline"
            href={sharedStrings.site.instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Caption>{sharedStrings.site.instagram}</Caption>
          </a>
        </div>
      </div>
    </footer>
  )
}
