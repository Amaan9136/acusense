'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'


// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const FooterContent = () => {
  // Hooks

  return (
    <div
      className={classnames(verticalLayoutClasses.footerContent, 'flex items-center justify-between flex-wrap gap-4')}
    >
      <p>
        <span>{`© ${new Date().getFullYear()}, Made with `}</span>
        <span>{`❤️`}</span>
        <span>{` by `}</span>
        <Link href='' target='_blank' className='text-primary'>
          RSC
        </Link>
      </p>
      <Link
        href={`https://github.com/themeselection/${process.env.NEXT_PUBLIC_REPO_NAME}/issues`}
        target='_blank'
        className='text-primary'
      >
        Support
      </Link>
    </div>
  )
}

export default FooterContent
