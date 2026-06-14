import { useState, useEffect } from 'react'
import { MdClose, MdCalendarToday } from 'react-icons/md'

const LAST_WORKING_DAY = new Date('2026-07-10T23:59:59')
const STORAGE_KEY = 'announcement-dismissed'

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const expired = new Date() > LAST_WORKING_DAY
    const dismissed = sessionStorage.getItem(STORAGE_KEY) === 'true'
    if (!expired && !dismissed) setVisible(true)
  }, [])

  if (!visible) return null

  const dismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  return (
    <div className="relative z-50 w-full bg-gradient-to-r from-brand-purple/90 via-brand-blue/90 to-brand-cyan/20 border-b border-white/10 backdrop-blur-sm">
      <div className="container-max px-4 py-2.5 flex items-center justify-center gap-3">
        <MdCalendarToday size={15} className="text-brand-cyan shrink-0" />
        <p className="text-sm text-white/90 text-center leading-snug">
          <span className="font-semibold text-white">Available from August 2026 —</span>{' '}
          My last working day is{' '}
          <span className="font-semibold text-brand-cyan">10 July 2026</span>.
          {' '}I am open to opportunities where the full recruitment process (interviews + offer letter) can be completed{' '}
          <span className="font-semibold text-white">within June 2026</span>.
        </p>
        <button
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="shrink-0 ml-2 p-1 rounded-full hover:bg-white/10 transition-colors duration-150"
        >
          <MdClose size={16} className="text-white/70 hover:text-white" />
        </button>
      </div>
    </div>
  )
}
