import { useState, useEffect } from 'react'
import { MdClose, MdCalendarToday } from 'react-icons/md'

const LAST_WORKING_DAY = new Date('2026-07-10T23:59:59')

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (new Date() <= LAST_WORKING_DAY) setVisible(true)
  }, [])

  if (!visible) return null

  return (
    <div className="relative z-50 w-full bg-gradient-to-r from-red-500 via-amber-400 to-yellow-300 border-b border-yellow-200">
      <div className="container-max px-4 py-2.5 flex items-center justify-center gap-3">
        <MdCalendarToday size={15} className="text-white shrink-0" />
        <p className="text-sm text-white font-medium text-center leading-snug drop-shadow-sm">
          <span className="font-bold">Available from 13 July 2026 —</span>{' '}
          Last working day is{' '}
          <span className="font-bold underline underline-offset-2">10 July 2026</span>.
          {' '}Full recruitment process must be completed{' '}
          <span className="font-bold underline underline-offset-2">within June 2026</span>.
        </p>
        <button
          onClick={() => setVisible(false)}
          aria-label="Dismiss announcement"
          className="shrink-0 ml-2 p-1 rounded-full hover:bg-white/20 transition-colors duration-150"
        >
          <MdClose size={16} className="text-white" />
        </button>
      </div>
    </div>
  )
}
